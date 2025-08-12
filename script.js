document.getElementById('searchBox').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const query = e.target.value.toLowerCase();
    fetch('search_index.json')
      .then(response => response.json())
      .then(pages => {
        const results = pages.filter(p => p.title.toLowerCase().includes(query));
        if (results.length) {
          let output = '<h1>Search Results</h1><ul>';
          results.forEach(r => output += `<li><a href="${r.url}">${r.title}</a></li>`);
          output += '</ul>';
          document.body.innerHTML = output;
        } else {
          document.body.innerHTML = '<h1>No results found</h1>';
        }
      });
  }
});