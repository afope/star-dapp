const StarToken = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarToken, "Udacity Token", "NNg");
};
