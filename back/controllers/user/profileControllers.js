// @descr Get user profile 
// @route GET /api/users/profile
// @access  Private

export const getUserProfile = (req, res, next) => {
    const user = {
        name: 'Artemiy',
        age: 20
    }
    res.json(user)
}