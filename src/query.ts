import sql from 'msnodesqlv8'
import Connection = MsNodeSqlV8.Connection
import ConnectionPromises = MsNodeSqlV8.ConnectionPromises
async function t() {
    const connectString = 'Driver={ODBC Driver 18 for SQL Server}; Server=DESKTOP-VIUCH90;UID=linux; PWD=linux; Database=node;Encrypt=no'
    const con:Connection = await sql.promises.open(connectString)
    const promises:ConnectionPromises  = con.promises
    const res = await promises.query('select @@servername as server')
    console.log(JSON.stringify(res, null, 4))
    await con.promises.close()
}

t().then(() => {
    console.log('closed')
})