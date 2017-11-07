module.exports = {
    getFullInfo : function () {
        let self = this;
        return new  Promise(resolve => {
            resolve({
                from : self.from,
                to : self.to
            })
        })
    }
};