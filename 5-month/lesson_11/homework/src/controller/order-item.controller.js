import { fetchData } from "../config/postgres.config.js";

export async function createOrderItem(req, res) {
    const { count, product_id, order_id } = req.body

    if (!count || !product_id || !order_id) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const created = await fetchData(
        "INSERT INTO order_items (count, product_id, order_id) VALUES ($1, $2, $3) RETURNING *",
        count, product_id, order_id
    );

    res.send({
        status: 201,
        message: "Successfully created!✅",
        data: created
    });
    return;
}

export async function getAllOrderItems(_, res) {
    const orderItems = await fetchData(
        'SELECT * FROM order-items'
    );

    res.send({
        message: "Success!✅",
        data: orderItems,
    });
    return;
}

export async function getOrderItemById(req, res) {
    const { orderItemId } = req.params;
    const foundedOrderItem = await fetchData(
        `SELECT * FROM order_items WHERE id=${orderItemId}`
    );

    if (foundedOrderItem.length == 0) {
        res.send({
            status: 404,
            message: "Order item not found!",
        });
        return;
    }
    res.send({
        message: "Success!✅",
        data: foundedOrderItem,
    });
    return;
}

export async function updateOrderItem(req, res) {
    const { orderItemId } = req.params;
    const { count, product_id, order_id } = req.body

    const foundedOrderItem = await fetchData(
        `SELECT * FROM order_items WHERE id=${orderItemId}`
    );

    if (foundedOrderItem.length == 0) {
        res.send({
            status: 404,
            message: "Order item not found!",
        });
        return;
    }

    if (!count || !product_id || !order_id) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const updateOrderItem = await fetchData(
        `UPDATE order_items SET count=$1, product_id=$2, order_id=$3  WHERE id=${orderItemId} RETURNING *`,
        count, product_id, order_id
    )

    res.send({
        status: 204,
        message: "Successfully updated!✅",
        data: updateOrderItem,
    });
    return;
}

export async function deleteOrderItem(req, res) {
    const { orderItemId } = req.params;

    const foundedOrderItem = await fetchData(
        `SELECT * FROM order_items WHERE id=${orderItemId}`
    );

    if (foundedOrderItem.length == 0) {
        res.send({
            status: 404,
            message: "Order item not found!",
        });
        return;
    }

    await fetchData(`DELETE FROM order_items WHERE id = ${orderItemId}`);

    res.send({
        message: "Successfully deleted!✅"
    });
    return;
}

