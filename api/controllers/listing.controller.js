import Listing from "../models/listing.model.js";

export const createlisting = async (request, response, next) => {
  try {
    const listing = await Listing.create(request.body);
    return response.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
