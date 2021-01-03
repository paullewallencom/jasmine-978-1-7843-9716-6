function MobilePhone(brand, color, primaryCamera, mdate, platform) {
  this.brand           = brand;
  this.color           = color;
  this.primaryCamera   = primaryCamera;
  this.manufactureDate = mdate;
  this.platform        = platform;
}
MobilePhone.prototype.reviewRating = function () {
  return this.mobileRating(this.brand, this.platform);
};
MobilePhone.prototype.mobileRating = function (brand, platform) {
	  var reviewRating = '****';
	  // Logic will be implemented later by collecting data/review from a third
	  // party system
	  return reviewRating;
};
MobilePhone.prototype.finalPrice = function (callback) { 
  var _this = this;
  var mobilePrice;
  this.mobilePrice(function (finalPrice) {
    _this.finalPrice = finalPrice;
    mobilePrice = finalPrice;
    callback.call(_this, _this.finalPrice);
  });
  return mobilePrice;
};
MobilePhone.prototype.mobilePrice = function (callback) {
  // Let's use hard coded values for demostration purpose
  // In JavaScript there is
  // rounding errors. Always calculate in cents not dollars.
  var price = (50.0 * 100);
  var tax   = price * 6;
  price     = (price + tax) / 100;
  callback.call(this, price);
};
