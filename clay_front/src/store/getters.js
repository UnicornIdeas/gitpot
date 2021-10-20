export default {
  getModel: (state) => (keyword) => state.pageResults.find((res) =>
    res.name.raw === keyword)
};
