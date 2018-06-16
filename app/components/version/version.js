'use strict';

angular.module('cdApp.version', [
  'cdApp.version.interpolate-filter',
  'cdApp.version.version-directive'
])

.value('version', '0.1');
