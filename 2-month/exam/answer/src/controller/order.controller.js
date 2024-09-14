import { fetchData } from "../config/postgres.config.js";

export async function createOrder(req, res) {
    const { customer_id, total_price, address, order_status } = req.body

    if (!customer_id || !total_price || !address) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const created = await fetchData(
        "INSERT INTO orders (customer_id, total_price, address, order_status) VALUES ($1, $2, $3, $4) RETURNING *",
        customer_id, total_price, address, order_status
    );

    res.send({
        status: 201,
        message: "Successfully created!✅",
        data: created
    });
    return;
}

export async function getAllOrders(_, res) {
    const orders = await fetchData(
        'SELECT * FROM orders'
    );

    res.send({
        message: "Success!✅",
        data: orders,
    });
    return;
}

export async function getOrderById(req, res) {
    const { orderId } = req.params;
    const foundedOrder = await fetchData(
        `SELECT * FROM orders WHERE id=${orderId}`
    );

    if (foundedOrder.length == 0) {
        res.send({
            status: 404,
            message: "Order not found!",
        });
        return;
    }
    res.send({
        message: "Success!✅",
        data: foundedOrder,
    });
    return;
}

export async function updateOrder(req, res) {
    const { orderId } = req.params;
    const { customer_id, total_price, address, order_status } = req.body

    const foundedOrder = await fetchData(
        `SELECT * FROM orders WHERE id=${orderId}`
    );

    if (foundedOrder.length == 0) {
        res.send({
            status: 404,
            message: "Order not found!",
        });
        return;
    }

    if (!customer_id || !total_price || !address) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const updateOrder = await fetchData(
        `UPDATE orders SET customer_id=$1, total_price=$2, address=$3, order_status=$4  WHERE id=${orderId} RETURNING *`,
        customer_id, total_price, address, order_status
    )

    res.send({
        status: 204,
        message: "Successfully updated!✅",
        data: updateOrder,
    });
    return;
}

export async function deleteOrder(req, res) {
    const { orderId } = req.params;

    const foundedOrder = await fetchData(
        `SELECT * FROM orders WHERE id=${orderId}`
    );

    if (foundedOrder.length == 0) {
        res.send({
            status: 404,
            message: "Order not found!",
        });
        return;
    }

    await fetchData(`DELETE FROM orders WHERE id = ${orderId}`);

    res.send({
        message: "Successfully deleted!✅"
    });
    return;
}

