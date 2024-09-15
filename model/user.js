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
  // static async getData () {
  //   return Promise.resolve('data')
  // }

  static async getUser (params) {
    const [users] = await db.query(
      'SELECT username, nombre, apellido, FK_tipo_id, contrasenia, BIN_TO_UUID(id) id FROM movie;'
    )
    console.log(users)
    return users
  }

  static async getById ({ id }) {
    const [user] = await db.query(
      `SELECT username
        nombre
        apellido
        FK_tipo_id
        contrasenia,
        BIN_TO_UUID(id) id
        FROM movie WHERE id = UUID_TO_BIN(?);`,
      [id]
    )
    console.log(user)
    if (user.length === 0) return null
    return user[0]
  }

  static async create ({ input }) {
    const {
      // eslint-disable-next-line no-unused-vars
      genre: genreInput, // genre is an array
      title,
      year,
      duration,
      director,
      rate,
      poster
    } = input

    // todo: crear la conexión de genre

    // crypto.randomUUID()
    const [uuidResult] = await db.query('SELECT UUID() uuid;')
    console.log('uuidResult' + uuidResult)
    const [{ uuid }] = uuidResult

    try {
      await db.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate)
          VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
        [title, year, director, duration, poster, rate]
      )
    } catch (e) {
      // puede enviarle información sensible
      throw new Error('Error creating movie')
      // enviar la traza a un servicio interno
      // sendLog(e)
    }

    const [movies] = await db.query(
      // SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
      `SELECT title, year, director, duration, poster, rate, id::text
        FROM movie WHERE id = UUID_TO_BIN(?);`,
      [uuid]
    )

    return movies[0]
  }

  static async delete ({ id }) {
    const [movie] = await db.query(
      // 'select title, year, director, duration, poster, rate, BIN_TO_UUID(id) from movie WHERE id = UUID_TO_BIN(?);', [id]
      'select title, year, director, duration, poster, rate, BIN_TO_UUID(id) from movie WHERE id = UUID_TO_BIN(?);', [id]
    )

    console.log(movie)
  }

  static async update ({ id, input }) {
  }
}
