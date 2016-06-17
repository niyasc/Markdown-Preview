app.controller('PreviewController', ['$scope', function($scope) {

  $scope.markdown = "# h1 tag \n## h2 tag\n### h3 \n#### h4\n##### h5\n###### h6\n###### h6-repeat\
  \n*This text will be italic*\n_This will also be italic_\n**This text will be bold**\
  \n__This will also be bold__\n_You **can** combine them_";
  
  $scope.preview = convertMarkdown($scope.markdown);
  
  $scope.generatePreview = function() {
      var text = $scope.markdown;
      $scope.preview = convertMarkdown(text);
  };
  
  function convertMarkdown(text) {
      
      text = text.replace(/###### ([^\n]*)/g, "<h6>$1</h6>");
      text = text.replace(/##### ([^\n]*)/g, "<h5>$1</h5>");
      text = text.replace(/#### ([^\n]*)/g, "<h4>$1</h4>");
      text = text.replace(/### ([^\n]*)/g, "<h3>$1</h3>");
      text = text.replace(/## ([^\n]*)/g, "<h2>$1</h2>");
      text = text.replace(/# ([^\n]*)/g, "<h1>$1</h1>");
      
      text = text.replace(/\*\*(.+)\*\*/g, "<strong>$1</strong>");
      text = text.replace(/\*(.+)\*/g, "<em>$1</em>");
      
      text = text.replace(/__(.+)__/g, "<strong>$1</strong>");
      text = text.replace(/_(.+)_/g, "<em>$1</em>");
      
      text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
      
      
      
      return text;
  }
}]);