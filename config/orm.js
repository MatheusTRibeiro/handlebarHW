var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb){
		connection.query("SELECT * FROM "+tableInput+";", 
			function(err, result){
				if(err) throw err;
				cb(result)
		})
    },
    updateOne: function(tableInput, condition, cb){
		connection.query("UPDATE " + tableInput + " SET devoured = TRUE WHERE id=" + condition,
			function(err, result){
				if(err) throw err;
				cb(result)
			});
	},
    insertOne: function(tableInput,val, cb){
		connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('"+val+"');",
			function(err, result){
                if(err) throw err;
                cb(result);
			})
	},
};

module.exports = orm;