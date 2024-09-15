export class UserController {
  // eslint-disable-next-line space-before-function-paren
  constructor({ movieModel }) {
    this.movieModel = movieModel
  }

  login = async (req, res) => {

  }

  getById = async (req, res) => {
    const { id } = req.params
    const movie = await this.movieModel.getById({ id })
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
  }
}
