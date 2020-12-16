// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
export default name => {
    return async context => {
        // https://docs.feathersjs.com/guides/basics/hooks.html#hook-functions
        context.data[name] = new Date()
        // if (!context.data[name]) {
        // }
        return context
    }
}
