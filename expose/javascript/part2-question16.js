for (let i = 0; i < Object.keys(statistics).length; i++) {
    if (Object.keys(statistics)[i][0] === 'r') {
      console.log(Object.keys(statistics)[i]);
    }
    else if (statistics[Object.keys(statistics)[i]] % 2 === 1) {
      console.log(Object.keys(statistics)[i]);
    }
  }