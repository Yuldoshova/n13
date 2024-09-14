import { fetchData } from "../config/postgres.config.js";

export async function createCustomer(req, res) {
    const { first_name, last_name, phone, password } = req.body

    if (!first_name || !phone || !password) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const created = await fetchData(
        "INSERT INTO customers (first_name, last_name, phone, password) VALUES ($1, $2, $3, $4) RETURNING *",
        first_name, last_name || null, phone, password
    );

    res.send({
        status: 201,
        message: "Successfully created!✅",
        data: created
    });
    return;
}

export async function getAllCustomers(_, res) {
    const customers = await fetchData(
        'SELECT * FROM customers'
    );

    res.send({
        message: "Success!✅",
        data: customers,
    });
    return;
}

export async function getCustomerById(req, res) {
    const { customerId } = req.params;
    const foundedCustomer = await fetchData(
        `SELECT * FROM customers WHERE id=${customerId}`
    );

    if (foundedCustomer.length == 0) {
        res.send({
            status: 404,
            message: "Customer not found!",
        });
        return;
    }
    res.send({
        message: "Success!✅",
        data: foundedCustomer,
    });
    return;
}

export async function updateCustomer(req, res) {
    const { customerId } = req.params;
    const { first_name, last_name, phone, password } = req.body

    const foundedCustomer = await fetchData(
        `SELECT * FROM customers WHERE id=${customerId}`
    );

    if (foundedCustomer.length == 0) {
        res.send({
            status: 404,
            message: "Customer not found!",
        });
        return;
    }

    if (!first_name || !phone || !password) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const updateCustomer = await fetchData(
        `UPDATE customers SET first_name=$1, last_name=$2, phone=$3, password=$4 WHERE id=${customerId} RETURNING *`,
        first_name, last_name || null, phone, password
    )

    res.send({
        status: 204,
        message: "Successfully updated!✅",
        data: updateCustomer,
    });
    return;
}

export async function deleteCustomer(req, res) {
    const { customerId } = req.params;

    const foundedCustomer = await fetchData(
        `SELECT * FROM customers WHERE id=${customerId}`
    );

    if (foundedCustomer.length == 0) {
        res.send({
            status: 404,
            message: "Customer not found!",
        });
        return;
    }

    await fetchData(`DELETE FROM customers WHERE id = ${customerId}`);

    res.send({
        message: "Successfully deleted!✅"
    });
    return;
}

export async function getAllDebtorCustomers(req, res) {
    const debtorCustomers = await fetchData(
        "SELECT * FROM contracts  c WHERE c.isFinished=false AND  "
    )
now()-c.created_at
    res.send({
        message: "Success!✅",
        data: debtorCustomers,
    });
    return;
}
