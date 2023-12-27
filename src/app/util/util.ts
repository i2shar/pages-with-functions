interface Env {
    DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    // Create a prepared statement with our query
    const ps = context.env.DB.prepare('SELECT * from Customers');
    const data = await ps.first();

    return Response.json(data);
}