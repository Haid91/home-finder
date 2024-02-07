async function searchProperties(channel, location) {

    const url = 'https://realty-in-au.p.rapidapi.com/properties/list?channel=' + channel + '&searchLocation=' + location + '&searchLocationSubtext=Region&type=region&page=1&pageSize=30&sortType=relevance&surroundingSuburbs=true&ex-under-contract=false';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f6fde6b800mshe44c4d3edfcf41ap1ee82cjsn03452dcc2b8b',
            'X-RapidAPI-Host': 'realty-in-au.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result.tieredResults[0].results.filter((list, i)=>i<6) 
    } catch (error) {
        console.error(error);
        return error
    }
}

export default searchProperties