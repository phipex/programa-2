var UtilLinkedList = {
	getNon: function (list) {
		var noneList = new LinkedList();
		for (var i = list.length - 1; i >= 0; i--) {
			if(i % 2 !== 0){
				var item = list[i],
					value = item.getValue();
				noneList.push(value);
			}
			
		}
		return noneList;

	},
	getPar: function (list) {
		var parList = new LinkedList();
		for (var i = list.length - 1; i >= 0; i--) {
			if(i % 2 === 0){
				var item = list[i],
					value = item.getValue();
				parList.push(value);
			}
			
		}
		return parList;
	}
};

module.exports = UtilLinkedList;