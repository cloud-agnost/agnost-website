const nodeFetch = require("node-fetch")

module.exports = () => ({
  name: "fetch-latest-release",
  async loadContent() {
    const response = await nodeFetch(`https://registry.npmjs.org/agnost/latest`)

    const data = await response.json()
    return data.version
  },
  async contentLoaded({ content, actions }) {
    const { setGlobalData } = actions
    setGlobalData({ release: content })
  },
})
