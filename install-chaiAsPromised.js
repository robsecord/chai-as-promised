// If the chai package is installed use it
var chaiAsPromised = require('chai-as-promised');
if(Package['practicalmeteor:chai']){
  chai.use(chaiAsPromised);
  chai.should();
}
