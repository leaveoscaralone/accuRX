function sorter(data, dir) {
    if (!dir) {
        return data
    } else if (dir === 'asc') {
        return data.sort((a, b) => (a.firstName < b.firstName ? -1 : 1));
    } else {
        return data.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
    }
}

function lookUp (element, params) {
    if (!params || params.length < 2) {
        return element;
      } else if (
        element.lastName.toLowerCase().includes(params.toLowerCase())
      ) {
        return element;
      } else return null;
}

const filters = {
    sorter,
    lookUp
}

export default filters;