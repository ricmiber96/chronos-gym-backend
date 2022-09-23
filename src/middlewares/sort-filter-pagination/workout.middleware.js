const workoutMiddleware = model => {
  return async (req, res, next) => {
    // Pagination
    const page = parseInt(req.params.page) < 0 ? 1 : parseInt(req.params.page)
    const limit = parseInt(req.params.limit) > 10 ? 10 : parseInt(req.params.limit)
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {
      currentPage: {
        page,
        limit
      }
    }

    const totalWorkouts = await model.countDocuments().exec()
    results.totalDocuments = totalWorkouts
    if (endIndex > totalWorkouts) {
      results.next = {
        page: page + 1,
        limit
      }
    }

    results.totalPages = Math.ceil(totalWorkouts / limit)
    results.lastPage = Math.ceil(totalWorkouts / limit)

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit
      }
    }

    // Sort
    const sort = {}
    if (req.query.sortBy && req.query.OrderBy) {
      sort[req.query.sortBy] = req.query.OrderBy.toLowerCase() === 'desc' ? -1 : 1
    } else {
      sort.createdAt = -1
    }
    console.log(sort)

    let filter = {}
    // Search
    if (req.query.search) {
      filter = {
        $or: [
          { name: { $regex: req.query.search } },
          { mode: { $regex: req.query.search } },
          { equipment: { $regex: req.query.search } },
          { exercises: { $regex: req.query.search } }
        ]
      }
    }

    console.log('filter', filter)

    // Filter
    if (req.query.filterBy && req.query.mode) {
      console.log(req.query.category.toLowerCase())
      filter.$or = [{ category: req.query.mode }]
    } else if (req.query.mode.toLowerCase() === 'all modes') {
      filter = {}
    } else {
      filter = {}
    }
    try {
      results.results = await model
        .find(filter)
        .limit(limit)
        .sort(sort)
        .skip(startIndex)
        .exec()
      res.paginatedResults = results
      next()
    } catch (err) {
      throw Error(err)
    }
  }
}

module.exports = workoutMiddleware
