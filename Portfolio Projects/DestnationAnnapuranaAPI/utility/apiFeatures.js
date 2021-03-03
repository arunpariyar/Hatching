class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //1.BASIC FILTERING
    // building and adding querying feature
    const queryObj = { ...this.queryString };
    //take away the exlusions that are not required
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
    //2. ADVANCED FILTERING FOR GREATER THAN AND LESS THAN FIELDS
    //convert the queryObj to string
    let queryStr = JSON.stringify(queryObj);
    //replace the greater and less than sign to have a $ on using regular expressions
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    // 3. SORTING
    if (this.queryString.sort) {
      //to consider for multiple sort options
      const sortOpt = this.query.sort.split(',').join(' ');
      this.query = this.query.sort(sortOpt);
    } else {
      //sort by when the tours were created
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limit() {
    // 4. Limiting fields (good for users wanting specific data in a heavy data set)
    if (this.queryString.fields) {
      const fieldOpt = this.query.fields.split(',').join(' ');
      this.query = this.query.select(fieldOpt);
    } else {
      //using the -v we exclude the fields altogther
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1; // getting the page and if not avaible setting it to 1
    const limit = this.queryString.limit * 1 || 10; //getting the limit and if not avaible setting it to 10
    const skip = (page - 1) * limit; //calculating how many trip to skip
    //using skip to calculate the right page to land on
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
