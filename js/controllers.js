app.controller('PreviewController', ['$scope', function($scope) {

  $scope.markdown = "# h1 tag \n## h2 tag\n### h3 \n#### h4\n##### h5\n###### h6\n###### h6-repeat";
  
  $scope.preview = convertMarkdown($scope.markdown);
  
  $scope.generatePreview = function() {
      var text = $scope.markdown;
      $scope.preview = convertMarkdown(text);
  };
  
  function convertMarkdown(text) {
      
      text = text.replace(/###### ([^\n]*)\n{0,1}/g, "<h6>$1</h6>");
      text = text.replace(/[^#]##### ([^<]*)/g, "<h5>$1</h5>");
      text = text.replace(/[^#]#### ([^<]*)/g, "<h4>$1</h4>");
      text = text.replace(/[^#]### ([^<]*)/g, "<h3>$1</h3>");
      text = text.replace(/[^#]## ([^<]*)/g, "<h2>$1</h2>");
      text = text.replace(/# ([^<]*)/g, "<h1>$1</h1>");
      
      text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
      
      
      
      return text;
  }
}]);