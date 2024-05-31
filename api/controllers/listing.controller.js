import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createlisting = async (request, response, next) => {
  try {
    const listing = await Listing.create(request.body);
    return response.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deletelisting = async (request, response, next) => {
  const listing = await Listing.findById(request.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }
  if (request.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings"));
  }

  try {
    await Listing.findByIdAndDelete(request.params.id);
    response.status(200).json("Listing has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updatelisting = async (request, response, next) => {
  const listing = await Listing.findById(request.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }
  if (request.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only update your own listings"));
  }
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};
