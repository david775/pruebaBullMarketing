import pg from 'pg'

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'pruebaBullMarketing',
  password: '1234',
  port: 5432
}

const db = new pg.Client(config)

export class userModel {
  static async getData () {
    return Promise.resolve('data')
  }

  static async getUser (params) {
    const response = await db.query('select * from usuarios')
    console.log(response)
  }
  // getUser()
  // db.connect()
  //   .then(() => {
  //     console.log('Conectado a la base de datos')
  //   })
  //   .catch(err => console.error('Error de conexión', err.stack))

  // app.get('/', (req, res) => {
  //   res.send('<h1>Hello world</h1>')
  // })
  // async getMoreData (data) {
  //   return Promise.resolve(data + 'more data');
  // }

  // async getAll () {
  //   const data = await getData();
  //   const moreData = await getMoreData(data);
  //   return `All the data: ${data}, ${moreData}`;
  // }

  // getAll().then ((all) => {
  //   console.log('all the data')
  // });
}
