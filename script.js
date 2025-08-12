document.getElementById('searchBox').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    alert('Search for: ' + e.target.value);
  }
});