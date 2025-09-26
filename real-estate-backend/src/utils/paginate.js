const paginate = (data, page, limit, total) => {
  return {
    total,
    page: Number(page),
    limit: Number(limit),
    totalPages: Math.ceil(total / limit),
    data,
  };
};

export default paginate;
