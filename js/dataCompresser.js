define(['constants'], function(constants) {
    function compress(data){
        return $.ajax({ 
            url: constants.directoryRootPath + 'model/dataCompression.php',
            data: {
                id: data,
                action: "compress"
            },
            type: 'POST'
        });
    }

    function decompress(data){
        return $.ajax({ 
            url: constants.directoryRootPath + 'model/dataCompression.php',
            data: {
                id: data,
                action: "decompress"
            },
            type: 'POST'
        });
    }

    return {
		decompress: decompress,
		compress: compress
	}
});