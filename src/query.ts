import sql from 'msnodesqlv8'
import Connection = MsNodeSqlV8.Connection
import ConnectionPromises = MsNodeSqlV8.ConnectionPromises
async function t() {
    const connectionString = "Driver={ODBC Driver 18 for SQL Server};Server=127.0.0.1,1433;Database=node;UID=node_user;PWD=StrongPassword123!;TrustServerCertificate=yes;Connect Timeout=10";
    const con:Connection = await sql.promises.open(connectionString)
    const promises:ConnectionPromises  = con.promises
    const res = await promises.query('select @@servername as server')
    console.log(JSON.stringify(res, null, 4))
    await con.promises.close()
}

t().then(() => {
    console.log('closed')
})