module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      beans: Number,
      water: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
  });

  const Coffee = mongoose.model("coffee", schema);
  return Coffee;
};
