import { fetchData } from "../config/postgres.config.js";

export async function createContractType(req, res) {
    const { duration, percentage  } = req.body

    if (!duration || !percentage) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const created = await fetchData(
        "INSERT INTO contract_types (duration, percentage) VALUES ($1, $2) RETURNING *",
        duration, percentage
    );

    res.send({
        status: 201,
        message: "Successfully created!✅",
        data: created
    });
    return;
}

export async function getAllContractTypes(_, res) {
    const contractTypes = await fetchData(
        'SELECT * FROM contract_types'
    );

    res.send({
        message: "Success!✅",
        data: contractTypes,
    });
    return;
}

export async function getContractTypeById(req, res) {
    const { typeId } = req.params;
    const foundedContractType = await fetchData(
        `SELECT * FROM contract_types WHERE id=${typeId}`
    );

    if (foundedContractType.length == 0) {
        res.send({
            status: 404,
            message: "Contract type not found!",
        });
        return;
    }
    res.send({
        message: "Success!✅",
        data: foundedContractType,
    });
    return;
}

export async function updateContractType(req, res) {
    const { typeId } = req.params; 
    const { duration, percentage  } = req.body

    const foundedContractType = await fetchData(
        `SELECT * FROM contract_types WHERE id=${typeId}`
    );

    if (foundedContractType.length == 0) {
        res.send({
            status: 404,
            message: "Contract type not found!",
        });
        return;
    }

    if (!duration || !percentage) {
        res.send({
            status: 400,
            message: "Bad request!"
        })
        return;
    }

    const updateContractType = await fetchData(
        `UPDATE contract_types SET duration=$1, percentage=$2 WHERE id=${typeId} RETURNING *`,
        duration, percentage
    )

    res.send({
        status: 204,
        message: "Successfully updated!✅",
        data: updateContractType,
    });
    return;
}

export async function deleteContractType(req, res) {
    const { typeId } = req.params;

    const foundedContractType = await fetchData(
        `SELECT * FROM contract_types WHERE id=${typeId}`
    );

    if (foundedContractType.length == 0) {
        res.send({
            status: 404,
            message: "Contract type not found!",
        });
        return;
    }

    await fetchData(`DELETE FROM contract_types WHERE id = ${typeId}`);

    res.send({
        message: "Successfully deleted!✅"
    });
    return;
}

