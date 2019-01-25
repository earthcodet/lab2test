function greet(name) {

    if(name == null){
        return "Hello, my friend."
    }

    if(name.constructor === Array){
        var text = "Hello, ";
        if(name.length == 2){
            for (i=0; i< name.length ; i++){
                if(i!= name.length-1){
                text = `${text}${name[i]} and `
                }else{
                    text = `${text}${name[i]}.`
                }
            }
        }

        if(name.length>2){
            for (i=0; i< name.length ; i++){
                if(name[i] == name[i].toUpperCase()){
                    var tempText = name[i]
                    name.splice(i, 1)
                    for (j=0; j< name.length ; j++){
                        if(j!= name.length -1 ){
                            text = `${text}${name[j]} and `
                        }else{
                            text = `${text}${name[j]}. `
                        }
                    }
                    text = `${text}AND HELLO ${tempText}!`
                    return text
                }
            }
            for (i=0; i< name.length ; i++){
                if(i!= name.length-1){
                text = `${text}${name[i]}, `
                }else{
                    text = `${text}and ${name[i]}.`
                }
            }
            }
        return text;
    }

    if(name == name.toUpperCase()){
        return `HELLO ${name.toUpperCase()}!`
    }
    
    return `Hello, ${name}.`
}

module.exports = greet;