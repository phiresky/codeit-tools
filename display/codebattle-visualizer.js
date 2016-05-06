function codebattle_visualizer(){
  var $wnd_0 = window, $doc_0 = document, gwtOnLoad_0, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (gwtOnLoad_0 && bodyDone) {
      gwtOnLoad_0(onLoadErrorFunc, 'codebattle_visualizer', base, softPermutationId);
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = '__gwt_marker_codebattle_visualizer', markerScript;
    $doc_0.write('<script id="' + markerId + '"><\/script>');
    markerScript = $doc_0.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != 'SCRIPT') {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == '') {
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc_0.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc_0.createElement('img');
      img.src = base + 'clear.cache.gif';
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content_0;
      if (name_0) {
        if (name_0 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_0, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_0 = content_0.substring(0, eq);
              value_0 = content_0.substring(eq + 1);
            }
             else {
              name_0 = content_0;
              value_0 = '';
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  __gwt_isKnownPropertyValue = function(propName, propValue){
    return propValue in values[propName];
  }
  ;
  __gwt_getMetaProperty = function(name_0){
    var value_0 = metaProps[name_0];
    return value_0 == null?null:value_0;
  }
  ;
  codebattle_visualizer.onScriptLoad = function(gwtOnLoadFunc){
    codebattle_visualizer = null;
    gwtOnLoad_0 = gwtOnLoadFunc;
    maybeStartModule();
  }
  ;
  if (isHostedMode()) {
    alert('Single-script hosted mode not yet implemented. See issue ' + 'http://code.google.com/p/google-web-toolkit/issues/detail?id=2079');
    return;
  }
  computeScriptBase();
  processMetas();
  try {
    var strongName;
    strongName = 'E052335FF2C5AF3FBF0CD06995B9FC82';
    var idx = strongName.indexOf(':');
    if (idx != -1) {
      softPermutationId = Number(strongName.substring(idx + 1));
    }
  }
   catch (e) {
    return;
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      onBodyDone();
    }
  }
  , 50);
}

codebattle_visualizer();
(function () {var $gwt_version = "2.8.0-SNAPSHOT";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = 'E052335FF2C5AF3FBF0CD06995B9FC82';var $intern_0 = {3:1, 12:1, 10:1}, $intern_1 = 65536, $intern_2 = {3:1, 4:1}, $intern_3 = {8:1, 41:1, 45:1}, $intern_4 = {3:1, 4:1, 5:1}, $intern_5 = {3:1, 6:1, 4:1, 11:1, 17:1, 5:1}, $intern_6 = {9:1, 14:1, 3:1, 8:1, 7:1}, $intern_7 = {14:1, 26:1, 3:1, 8:1, 7:1}, $intern_8 = {15:1, 3:1, 8:1, 7:1}, $intern_9 = {50:1, 3:1, 12:1, 10:1}, $intern_10 = 4194303, $intern_11 = 1048575, $intern_12 = 4194304, $intern_13 = 17592186044416, $intern_14 = 524288, $intern_15 = {3:1, 6:1, 4:1, 11:1, 5:1}, $intern_16 = 16777216, $intern_17 = 33554432, $intern_18 = 67108864, $intern_19 = {58:1, 3:1, 6:1, 4:1, 11:1, 17:1, 5:1}, $intern_20 = {3:1, 6:1, 4:1, 25:1, 5:1}, $intern_21 = {98:1, 3:1, 6:1, 4:1, 25:1, 5:1}, $intern_22 = {16:1}, $intern_23 = {27:1}, $intern_24 = {36:1, 75:1}, $intern_25 = {76:1}, $intern_26 = {51:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function provide(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  !(parts[0] in cur) && cur.execScript && cur.execScript('var ' + parts[0]);
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || !parts.length && optCtor || {};
  }
  return cur;
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    _.constructor = _;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

bootstrap();
function $toString(this$static){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this$static)) + '@' + (hashCode__I__devirtual$(this$static) >>> 0).toString(16);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals(other):isJavaArray(this$static)?this$static === other:maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode():isJavaArray(this$static)?getObjectIdentityHashCode(this$static):getObjectIdentityHashCode(this$static);
}

function toString__Ljava_lang_String___devirtual$(this$static){
  return instanceOfString(this$static)?this$static:instanceOfDouble(this$static)?toString_15((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?toString_13((checkCriticalNotNull(this$static) , this$static)):hasJavaObjectVirtualDispatch(this$static)?this$static.toString_0():isJavaArray(this$static)?$toString(this$static):this$static.toString?this$static.toString():'[JavaScriptObject]';
}

defineClass(1, null, {}, Object_0);
_.equals = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode = function hashCode_0(){
  return getObjectIdentityHashCode(this);
}
;
_.toString_0 = function toString_0(){
  return $toString(this);
}
;
_.toString = function(){
  return this.toString_0();
}
;
function $clinit_Throwable(){
  $clinit_Throwable = emptyMethod;
  UNITIALIZED = new Object_0;
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument_0(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), {3:1, 6:1, 4:1, 5:1}, 10, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  this$static.writetableStackTrace && maskUndefined(this$static.backingJsObject) !== maskUndefined(UNITIALIZED) && this$static.initializeBackingError();
  return this$static;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString_0(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(10, 1, {3:1, 10:1});
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:toNative(this.detailMessage).replace(new $wnd.RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_2(){
  return $toString_0(this, this.getMessage());
}
;
_.disableSuppression = false;
_.writetableStackTrace = true;
var UNITIALIZED;
function Exception(message){
  this.backingJsObject = UNITIALIZED;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(12, 10, $intern_0);
function RuntimeException(){
  this.backingJsObject = UNITIALIZED;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message){
  this.backingJsObject = UNITIALIZED;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(21, 12, $intern_0);
defineClass(111, 21, $intern_0);
defineClass(112, 111, $intern_0);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  $clinit_Throwable();
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.backingJsObject = UNITIALIZED;
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = ($clinit_String() , e == null?'null':toString__Ljava_lang_String___devirtual$(e));
  this.description = '';
  this.e = e;
  this.description = '';
}

defineClass(46, 112, {46:1, 3:1, 12:1, 10:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(248, 1, {});
function StackTraceCreator$CollectorLegacy(){
}

defineClass(113, 248, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
defineClass(249, 248, {});
_.collect = function collect_0(error){
}
;
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(114, 249, {}, StackTraceCreator$CollectorModernNoSourceMap);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  leafElementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && (typeof src_0 === 'object' || typeof src_0 === 'function') && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function toJava(e){
  var javaException;
  if (instanceOf(e, 10)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

defineClass(102, 12, $intern_0);
function UnsupportedEncodingException(msg){
  $clinit_Throwable();
  Exception.call(this, msg);
}

defineClass(103, 102, $intern_0, UnsupportedEncodingException);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

function $createBoolean(x_0){
  $clinit_Boolean();
  return equalsIgnoreCase('true', x_0);
}

function $createBoolean_0(x_0){
  $clinit_Boolean();
  return x_0;
}

function $isInstance(instance){
  $clinit_Boolean();
  return $equals_0('boolean', typeof instance);
}

function compare_1(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?compareTo_1(this$static, other):instanceOfDouble(this$static)?compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):instanceOfBoolean(this$static)?compare_1((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):this$static.compareTo(other);
}

function toString_13(x_0){
  return $clinit_String() , '' + x_0;
}

booleanCastMap = {3:1, 100:1, 8:1};
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function toChars(codePoint, dst, dstIndex){
  checkCriticalArgument(codePoint >= 0 && codePoint <= 1114111);
  if (codePoint >= $intern_1) {
    dst[dstIndex++] = 55296 + (codePoint - $intern_1 >> 10 & 1023) & 65535;
    dst[dstIndex] = 56320 + (codePoint - $intern_1 & 1023) & 65535;
    return 2;
  }
   else {
    dst[dstIndex] = codePoint & 65535;
    return 1;
  }
}

function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(78, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_14(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
function $isInstance_0(instance){
  return $equals_0('number', typeof instance) || instance instanceof Number;
}

function __parseAndValidateDouble(s){
  floatRegex == null && (floatRegex = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);
  if (!floatRegex.test(s)) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('null')));
  }
  length_0 = ($clinit_String() , s).length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw toJs(($clinit_Throwable() , new NumberFormatException('For input string: "' + s + '"')));
  }
  return toReturn;
}

defineClass(62, 1, {3:1, 62:1});
var floatRegex;
function $createDouble(x_0){
  return x_0;
}

function $createDouble_0(s){
  return __parseAndValidateDouble(s);
}

function $isInstance_1(instance){
  return $equals_0('number', typeof instance);
}

function compare_2(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

function toString_15(b){
  return $clinit_String() , '' + b;
}

doubleCastMap = {3:1, 8:1, 104:1, 62:1};
function IllegalArgumentException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(23, 21, $intern_0, IllegalArgumentException, IllegalArgumentException_0);
function IndexOutOfBoundsException(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(42, 21, $intern_0, IndexOutOfBoundsException);
function Integer(value_0){
  this.value_0 = value_0;
}

function compare_3(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function toString_17(value_0){
  return $clinit_String() , '' + value_0;
}

function valueOf_0(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(29, 62, {3:1, 8:1, 29:1, 62:1}, Integer);
_.compareTo = function compareTo_0(b){
  return compare_3(this.value_0, b.value_0);
}
;
_.equals = function equals_5(o){
  return instanceOf(o, 29) && o.value_0 == this.value_0;
}
;
_.hashCode = function hashCode_6(){
  return this.value_0;
}
;
_.toString_0 = function toString_16(){
  return toString_17(this.value_0);
}
;
_.value_0 = 0;
function NullPointerException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(52, 21, $intern_0, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
function NumberFormatException(message){
  $clinit_Throwable();
  IllegalArgumentException_0.call(this, message);
}

defineClass(44, 23, $intern_0, NumberFormatException);
function $clinit_String(){
  $clinit_String = emptyMethod;
  new String$1;
}

function $charAt(this$static, index_0){
  return ($clinit_String() , this$static).charCodeAt(index_0);
}

function $compareToIgnoreCase(this$static, other){
  return compareTo_1(($clinit_String() , this$static).toLowerCase(), other.toLowerCase());
}

function $createString(){
  $clinit_String();
  return '';
}

function $createString_0(other){
  $clinit_String();
  return other;
}

function $createString_1(sb){
  $clinit_String();
  return 'null';
}

function $createString_2(sb){
  $clinit_String();
  return !sb?'null':sb.string;
}

function $createString_3(bytes){
  $clinit_String();
  return $createString_6(bytes, 0, bytes.length, ($clinit_EmulatedCharset() , UTF_8));
}

function $createString_4(bytes, ofs, len){
  $clinit_String();
  return $createString_6(bytes, ofs, len, ($clinit_EmulatedCharset() , UTF_8));
}

function $createString_5(bytes, ofs, len, charsetName){
  $clinit_String();
  return $createString_6(bytes, ofs, len, getCharset(charsetName));
}

function $createString_6(bytes, ofs, len, charset){
  $clinit_String();
  return valueOf_2(charset.decodeString(bytes, ofs, len));
}

function $createString_7(bytes, charsetName){
  $clinit_String();
  return $createString_6(bytes, 0, bytes.length, getCharset(charsetName));
}

function $createString_8(bytes, charset){
  $clinit_String();
  return $createString_6(bytes, 0, bytes.length, getCharset(charset.name_0));
}

function $createString_9(value_0){
  $clinit_String();
  return valueOf_3(value_0, 0, value_0.length);
}

function $createString_10(value_0, offset, count){
  $clinit_String();
  return valueOf_3(value_0, offset, count);
}

function $createString_11(codePoints, offset, count){
  $clinit_String();
  var charIdx, chars;
  chars = initUnidimensionalArray(C_classLit, $intern_2, 97, count * 2, 15, 1);
  charIdx = 0;
  while (count-- > 0) {
    charIdx += toChars(codePoints[offset++], chars, charIdx);
  }
  return valueOf_3(chars, 0, charIdx);
}

function $equals_0(this$static, other){
  return this$static === other;
}

function $isInstance_2(instance){
  $clinit_String();
  return $equals_0('string', typeof instance);
}

function compareTo_1(thisStr, otherStr){
  $clinit_String();
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function equalsIgnoreCase(s, other){
  $clinit_String();
  if (other == null) {
    return false;
  }
  if (s == other) {
    return true;
  }
  return s.length == other.length && s.toLowerCase() == other.toLowerCase();
}

function fromCharCode(array){
  return $wnd.String.fromCharCode.apply(null, array);
}

function getCharset(charsetName){
  try {
    return forName(charsetName);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 63)) {
      throw toJs(new UnsupportedEncodingException(charsetName));
    }
     else 
      throw toJs($e0);
  }
}

function toNative(str){
  $clinit_String();
  return str;
}

function valueOf_1(x_0){
  $clinit_String();
  return x_0 == null?'null':toString__Ljava_lang_String___devirtual$(x_0);
}

function valueOf_2(x_0){
  return valueOf_3(x_0, 0, x_0.length);
}

function valueOf_3(x_0, offset, count){
  var batchEnd, batchStart, end, s;
  end = offset + count;
  checkStringBounds(offset, end, x_0.length);
  s = '';
  for (batchStart = offset; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 258:1, 8:1, 2:1};
function String$1(){
}

defineClass(101, 1, {}, String$1);
_.compare = function compare_4(a, b){
  return compareTo_1(($clinit_String() , a).toLowerCase(), b.toLowerCase());
}
;
_.equals = function equals_6(other){
  return this === other;
}
;
function StringIndexOutOfBoundsException(message){
  $clinit_Throwable();
  IndexOutOfBoundsException.call(this, message);
}

defineClass(64, 42, $intern_0, StringIndexOutOfBoundsException);
function forName(charsetName){
  checkCriticalArgument_0(charsetName != null, 'Null charset name');
  charsetName = ($clinit_String() , charsetName).toLocaleUpperCase();
  if ($equals_0(($clinit_EmulatedCharset() , ISO_8859_1).name_0, charsetName)) {
    return ISO_8859_1;
  }
   else if ($equals_0(ISO_LATIN_1.name_0, charsetName)) {
    return ISO_LATIN_1;
  }
   else if ($equals_0(UTF_8.name_0, charsetName)) {
    return UTF_8;
  }
  if (/^[A-Za-z0-9][\w-:\.\+]*$/.test(charsetName)) {
    throw toJs(new UnsupportedCharsetException(charsetName));
  }
   else {
    throw toJs(new IllegalCharsetNameException(charsetName));
  }
}

defineClass(41, 1, {8:1, 41:1});
_.compareTo = function compareTo_2(that){
  return $compareToIgnoreCase(this.name_0, that.name_0);
}
;
_.equals = function equals_7(o){
  var that;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 41)) {
    return false;
  }
  that = o;
  return $equals_0(this.name_0, that.name_0);
}
;
_.hashCode = function hashCode_7(){
  return getHashCode(this.name_0);
}
;
_.toString_0 = function toString_19(){
  return this.name_0;
}
;
function IllegalCharsetNameException(charsetName){
  $clinit_Throwable();
  IllegalArgumentException_0.call(this, ($clinit_String() , charsetName == null?'null':charsetName));
}

defineClass(118, 23, $intern_0, IllegalCharsetNameException);
function UnsupportedCharsetException(charsetName){
  $clinit_Throwable();
  IllegalArgumentException_0.call(this, ($clinit_String() , charsetName == null?'null':charsetName));
}

defineClass(63, 23, {3:1, 12:1, 10:1, 63:1}, UnsupportedCharsetException);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone_2(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy_0(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, end;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, len, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function $clinit_EmulatedCharset(){
  $clinit_EmulatedCharset = emptyMethod;
  UTF_8 = new EmulatedCharset$UtfCharset;
  ISO_LATIN_1 = new EmulatedCharset$LatinCharset('ISO-LATIN-1');
  ISO_8859_1 = new EmulatedCharset$LatinCharset('ISO-8859-1');
}

function EmulatedCharset(name_0){
  this.name_0 = name_0;
}

defineClass(45, 41, $intern_3);
var ISO_8859_1, ISO_LATIN_1, UTF_8;
function EmulatedCharset$LatinCharset(name_0){
  EmulatedCharset.call(this, name_0);
}

defineClass(79, 45, $intern_3, EmulatedCharset$LatinCharset);
_.decodeString = function decodeString(bytes, ofs, len){
  var chars, i;
  chars = initUnidimensionalArray(C_classLit, $intern_2, 97, len, 15, 1);
  for (i = 0; i < len; ++i) {
    chars[i] = bytes[ofs + i] & 255 & 65535;
  }
  return chars;
}
;
function EmulatedCharset$UtfCharset(){
  EmulatedCharset.call(this, 'UTF-8');
}

defineClass(110, 45, $intern_3, EmulatedCharset$UtfCharset);
_.decodeString = function decodeString_0(bytes, ofs, len){
  var b, ch_0, charCount, chars, count, i, i0, outIdx;
  charCount = 0;
  for (i0 = 0; i0 < len;) {
    ++charCount;
    ch_0 = bytes[ofs + i0];
    if ((ch_0 & 192) == 128) {
      throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
     else if ((ch_0 & 128) == 0) {
      ++i0;
    }
     else if ((ch_0 & 224) == 192) {
      i0 += 2;
    }
     else if ((ch_0 & 240) == 224) {
      i0 += 3;
    }
     else if ((ch_0 & 248) == 240) {
      i0 += 4;
    }
     else {
      throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
    if (i0 > len) {
      throw toJs(new IndexOutOfBoundsException('Invalid UTF8 sequence'));
    }
  }
  chars = initUnidimensionalArray(C_classLit, $intern_2, 97, charCount, 15, 1);
  outIdx = 0;
  count = 0;
  for (i = 0; i < len;) {
    ch_0 = bytes[ofs + i++];
    if ((ch_0 & 128) == 0) {
      count = 1;
      ch_0 &= 127;
    }
     else if ((ch_0 & 224) == 192) {
      count = 2;
      ch_0 &= 31;
    }
     else if ((ch_0 & 240) == 224) {
      count = 3;
      ch_0 &= 15;
    }
     else if ((ch_0 & 248) == 240) {
      count = 4;
      ch_0 &= 7;
    }
     else if ((ch_0 & 252) == 248) {
      count = 5;
      ch_0 &= 3;
    }
    while (--count > 0) {
      b = bytes[ofs + i++];
      if ((b & 192) != 128) {
        throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence at ' + (ofs + i - 1) + ', byte=' + (b >>> 0).toString(16)));
      }
      ch_0 = ch_0 << 6 | b & 63;
    }
    outIdx += toChars(ch_0, chars, outIdx);
  }
  return chars;
}
;
function getObjectIdentityHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

var sNextHashId = 0;
function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(($clinit_String() , errorMessage)));
  }
}

function checkCriticalArgument_1(expression, errorMessageTemplate, errorMessageArgs){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(format(errorMessageTemplate, errorMessageArgs)));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(($clinit_String() , errorMessage)));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0) {
    throw toJs(new IndexOutOfBoundsException('fromIndex: ' + start_0 + ' < 0'));
  }
  if (end > size_0) {
    throw toJs(new IndexOutOfBoundsException('toIndex: ' + end + ' > size ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkStringBounds(start_0, end, size_0){
  if (start_0 < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ' < 0'));
  }
  if (end > size_0) {
    throw toJs(new StringIndexOutOfBoundsException('toIndex: ' + end + ' > size ' + size_0));
  }
  if (end < start_0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function format(template, args){
  var builder, i, placeholderStart, templateStart;
  template = ($clinit_String() , template == null?'null':template);
  builder = (template.length + 16 * args.length , new StringBuilder_0);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_2(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_1(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_2(builder, template.substr(templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_1(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_1(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = ($clinit_String() , str).length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 10);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 12);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 21);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 111);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 112);
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 46);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 248);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 113);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 249);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 114);
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 102);
var Ljava_io_UnsupportedEncodingException_2_classLit = createForClass('java.io', 'UnsupportedEncodingException', 103);
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 100);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 78);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 62);
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 104);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 23);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 42);
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 29);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 52);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 44);
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
var Ljava_lang_String$1_2_classLit = createForClass('java.lang', 'String/1', 101);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 64);
var Ljava_nio_charset_Charset_2_classLit = createForClass('java.nio.charset', 'Charset', 41);
var Ljava_nio_charset_IllegalCharsetNameException_2_classLit = createForClass('java.nio.charset', 'IllegalCharsetNameException', 118);
var Ljava_nio_charset_UnsupportedCharsetException_2_classLit = createForClass('java.nio.charset', 'UnsupportedCharsetException', 63);
var Ljavaemul_internal_EmulatedCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset', 45);
var Ljavaemul_internal_EmulatedCharset$LatinCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/LatinCharset', 79);
var Ljavaemul_internal_EmulatedCharset$UtfCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/UtfCharset', 110);
function $arc(this$static, x_0, y_0, radius, startAngle, endAngle){
  this$static.arc(x_0, y_0, radius, startAngle, endAngle, false);
}

function $clearRect(this$static, x_0, y_0, w, h){
  this$static.clearRect(x_0, y_0, w, h);
}

function $drawImage(this$static, image, dx, dy){
  this$static.drawImage(image, dx, dy);
}

function $drawImage_0(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $drawImage_1(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $fillText(this$static, text_0, x_0, y_0){
  this$static.fillText && this$static.fillText(text_0, x_0, y_0);
}

function $lineTo(this$static, x_0, y_0){
  this$static.lineTo(x_0, y_0);
}

function $measureText(this$static, text_0){
  return this$static.measureText(text_0);
}

function $moveTo(this$static, x_0, y_0){
  this$static.moveTo(x_0, y_0);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function $setLineCap(this$static, lineCap){
  this$static.lineCap = lineCap;
}

function $setLineWidth(this$static, lineWidth){
  this$static.lineWidth = lineWidth;
}

function $setStrokeStyleWeb(this$static, strokeStyle){
  this$static.strokeStyle = strokeStyle;
}

function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.name_0 != null?value_0.name_0:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

function valueOf(map_0, name_0){
  var result;
  checkCriticalNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument_1(!!result, 'Enum constant undefined: %s', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 5, [name_0]));
  return result;
}

defineClass(7, 1, {3:1, 8:1, 7:1});
_.compareTo = function compareTo(other){
  return this.ordinal - other.ordinal;
}
;
_.equals = function equals_0(other){
  return this === other;
}
;
_.hashCode = function hashCode_1(){
  return getObjectIdentityHashCode(this);
}
;
_.toString_0 = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 7);
function $clinit_Context2d$LineCap(){
  $clinit_Context2d$LineCap = emptyMethod;
  BUTT = new Context2d$LineCap('BUTT', 0, 'butt');
  ROUND = new Context2d$LineCap('ROUND', 1, 'round');
  SQUARE = new Context2d$LineCap('SQUARE', 2, 'square');
}

function Context2d$LineCap(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_0(){
  $clinit_Context2d$LineCap();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit, 1), $intern_5, 49, 0, [BUTT, ROUND, SQUARE]);
}

defineClass(49, 7, {49:1, 3:1, 8:1, 7:1}, Context2d$LineCap);
var BUTT, ROUND, SQUARE;
var Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/LineCap', 49, values_0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(237, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 237);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0_0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function execute(cmd){
  return cmd.execute();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 46)?e.getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedPeriodImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  var intervalId = $wnd.setInterval(function(){
    var ret = $entry(execute)(cmd);
    !ret && $wnd.clearInterval(intervalId);
  }
  , delayMs);
}

defineClass(151, 237, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 151);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeAllChildren(this$static){
  while (this$static.lastChild) {
    this$static.removeChild(this$static.lastChild);
  }
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $createButtonElement(doc, type_0){
  var e = doc.createElement('BUTTON');
  e.setAttribute('type', type_0);
  return e;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!equalsIgnoreCase('body', elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $clinit_Style$Cursor(){
  $clinit_Style$Cursor = emptyMethod;
  DEFAULT = new Style$Cursor$1;
  AUTO = new Style$Cursor$2;
  CROSSHAIR = new Style$Cursor$3;
  POINTER = new Style$Cursor$4;
  MOVE = new Style$Cursor$5;
  E_RESIZE = new Style$Cursor$6;
  NE_RESIZE = new Style$Cursor$7;
  NW_RESIZE = new Style$Cursor$8;
  N_RESIZE = new Style$Cursor$9;
  SE_RESIZE = new Style$Cursor$10;
  SW_RESIZE = new Style$Cursor$11;
  S_RESIZE = new Style$Cursor$12;
  W_RESIZE = new Style$Cursor$13;
  TEXT = new Style$Cursor$14;
  WAIT = new Style$Cursor$15;
  HELP = new Style$Cursor$16;
  COL_RESIZE = new Style$Cursor$17;
  ROW_RESIZE = new Style$Cursor$18;
}

function Style$Cursor(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Cursor();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, 1), $intern_5, 9, 0, [DEFAULT, AUTO, CROSSHAIR, POINTER, MOVE, E_RESIZE, NE_RESIZE, NW_RESIZE, N_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, W_RESIZE, TEXT, WAIT, HELP, COL_RESIZE, ROW_RESIZE]);
}

defineClass(9, 7, $intern_6);
var AUTO, COL_RESIZE, CROSSHAIR, DEFAULT, E_RESIZE, HELP, MOVE, NE_RESIZE, NW_RESIZE, N_RESIZE, POINTER, ROW_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, TEXT, WAIT, W_RESIZE;
var Lcom_google_gwt_dom_client_Style$Cursor_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor', 9, values_1);
function Style$Cursor$1(){
  Style$Cursor.call(this, 'DEFAULT', 0);
}

defineClass(195, 9, $intern_6, Style$Cursor$1);
var Lcom_google_gwt_dom_client_Style$Cursor$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/1', 195, null);
function Style$Cursor$10(){
  Style$Cursor.call(this, 'SE_RESIZE', 9);
}

defineClass(204, 9, $intern_6, Style$Cursor$10);
var Lcom_google_gwt_dom_client_Style$Cursor$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/10', 204, null);
function Style$Cursor$11(){
  Style$Cursor.call(this, 'SW_RESIZE', 10);
}

defineClass(205, 9, $intern_6, Style$Cursor$11);
var Lcom_google_gwt_dom_client_Style$Cursor$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/11', 205, null);
function Style$Cursor$12(){
  Style$Cursor.call(this, 'S_RESIZE', 11);
}

defineClass(206, 9, $intern_6, Style$Cursor$12);
var Lcom_google_gwt_dom_client_Style$Cursor$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/12', 206, null);
function Style$Cursor$13(){
  Style$Cursor.call(this, 'W_RESIZE', 12);
}

defineClass(207, 9, $intern_6, Style$Cursor$13);
var Lcom_google_gwt_dom_client_Style$Cursor$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/13', 207, null);
function Style$Cursor$14(){
  Style$Cursor.call(this, 'TEXT', 13);
}

defineClass(208, 9, $intern_6, Style$Cursor$14);
var Lcom_google_gwt_dom_client_Style$Cursor$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/14', 208, null);
function Style$Cursor$15(){
  Style$Cursor.call(this, 'WAIT', 14);
}

defineClass(209, 9, $intern_6, Style$Cursor$15);
var Lcom_google_gwt_dom_client_Style$Cursor$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/15', 209, null);
function Style$Cursor$16(){
  Style$Cursor.call(this, 'HELP', 15);
}

defineClass(210, 9, $intern_6, Style$Cursor$16);
var Lcom_google_gwt_dom_client_Style$Cursor$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/16', 210, null);
function Style$Cursor$17(){
  Style$Cursor.call(this, 'COL_RESIZE', 16);
}

defineClass(211, 9, $intern_6, Style$Cursor$17);
var Lcom_google_gwt_dom_client_Style$Cursor$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/17', 211, null);
function Style$Cursor$18(){
  Style$Cursor.call(this, 'ROW_RESIZE', 17);
}

defineClass(212, 9, $intern_6, Style$Cursor$18);
var Lcom_google_gwt_dom_client_Style$Cursor$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/18', 212, null);
function Style$Cursor$2(){
  Style$Cursor.call(this, 'AUTO', 1);
}

defineClass(196, 9, $intern_6, Style$Cursor$2);
var Lcom_google_gwt_dom_client_Style$Cursor$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/2', 196, null);
function Style$Cursor$3(){
  Style$Cursor.call(this, 'CROSSHAIR', 2);
}

defineClass(197, 9, $intern_6, Style$Cursor$3);
var Lcom_google_gwt_dom_client_Style$Cursor$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/3', 197, null);
function Style$Cursor$4(){
  Style$Cursor.call(this, 'POINTER', 3);
}

defineClass(198, 9, $intern_6, Style$Cursor$4);
var Lcom_google_gwt_dom_client_Style$Cursor$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/4', 198, null);
function Style$Cursor$5(){
  Style$Cursor.call(this, 'MOVE', 4);
}

defineClass(199, 9, $intern_6, Style$Cursor$5);
var Lcom_google_gwt_dom_client_Style$Cursor$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/5', 199, null);
function Style$Cursor$6(){
  Style$Cursor.call(this, 'E_RESIZE', 5);
}

defineClass(200, 9, $intern_6, Style$Cursor$6);
var Lcom_google_gwt_dom_client_Style$Cursor$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/6', 200, null);
function Style$Cursor$7(){
  Style$Cursor.call(this, 'NE_RESIZE', 6);
}

defineClass(201, 9, $intern_6, Style$Cursor$7);
var Lcom_google_gwt_dom_client_Style$Cursor$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/7', 201, null);
function Style$Cursor$8(){
  Style$Cursor.call(this, 'NW_RESIZE', 7);
}

defineClass(202, 9, $intern_6, Style$Cursor$8);
var Lcom_google_gwt_dom_client_Style$Cursor$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/8', 202, null);
function Style$Cursor$9(){
  Style$Cursor.call(this, 'N_RESIZE', 8);
}

defineClass(203, 9, $intern_6, Style$Cursor$9);
var Lcom_google_gwt_dom_client_Style$Cursor$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/9', 203, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_5, 26, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(26, 7, $intern_7);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 26, values_2);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(213, 26, $intern_7, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 213, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(214, 26, $intern_7, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 214, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(215, 26, $intern_7, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 215, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(216, 26, $intern_7, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 216, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_5, 15, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(15, 7, $intern_8);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 15, values_3);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(186, 15, $intern_8, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 186, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(187, 15, $intern_8, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 187, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(188, 15, $intern_8, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 188, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(189, 15, $intern_8, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 189, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(190, 15, $intern_8, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 190, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(191, 15, $intern_8, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 191, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(192, 15, $intern_8, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 192, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(193, 15, $intern_8, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 193, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(194, 15, $intern_8, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 194, null);
defineClass(250, 1, {});
_.toString_0 = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 250);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(251, 250, {});
_.dispatch = function dispatch(handler){
  lambda$0(handler.eventBus_0, this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType(){
  return TYPE;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 251);
function Event$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(30, 1, {}, Event$Type);
_.hashCode = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 30);
function GwtEvent$Type(){
  Event$Type.call(this);
}

defineClass(129, 30, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 129);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler) , new LegacyHandlerWrapper;
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || $revive(event_0);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 50)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(){
  this.eventBus = new HandlerManager$Bus;
  this.source = null;
}

defineClass(184, 1, {}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 184);
defineClass(252, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 252);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_1(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_1(handler));
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType()) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_0(this$static.map_0, type_0);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = $get_0(this$static.map_0, type_0);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = sourceMap.get_1(null);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = $next_0(c$iterator);
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

function SimpleEventBus(){
  SimpleEventBus_0.call(this, false);
}

function SimpleEventBus_0(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(68, 252, {}, SimpleEventBus);
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 68);
function HandlerManager$Bus(){
  SimpleEventBus_0.call(this, true);
}

defineClass(185, 68, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 185);
function LegacyHandlerWrapper(){
}

defineClass(217, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 217);
function UmbrellaException(causes){
  $clinit_Throwable();
  var cause, cause$iterator, i, lastArg;
  RuntimeException_1.call(this, (lastArg = makeMessage(causes) , causes.isEmpty()?null:causes.iterator().next_1() , lastArg));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = cause$iterator.next_1();
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    first?(first = false):(b.string += '; ' , b);
    $append_2(b, t.getMessage());
  }
  return b.string;
}

defineClass(50, 21, $intern_9, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 50);
function UmbrellaException_0(causes){
  $clinit_Throwable();
  UmbrellaException.call(this, causes);
}

defineClass(235, 50, $intern_9, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 235);
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_10;
  a1 = value_0 >> 22 & $intern_10;
  a2 = value_0 < 0?$intern_11:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_12 + a.h * $intern_13;
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_13) {
    a2 = round_int(value_0 / $intern_13);
    value_0 -= a2 * $intern_13;
  }
  a1 = 0;
  if (value_0 >= $intern_12) {
    a1 = round_int(value_0 / $intern_12);
    value_0 -= a1 * $intern_12;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_10 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_10 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_11 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_10 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_10 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_11 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_12 + a.h * $intern_13;
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_10, $intern_10, 524287);
  MIN_VALUE = create0(0, 0, $intern_14);
  create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_12;
  }
  if (a2 == $intern_11) {
    return big_0.l + big_0.m * $intern_12 - $intern_13;
  }
  return big_0;
}

function fromDouble_0(value_0){
  if (-17592186044416 < value_0 && value_0 < $intern_13) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function toDouble_0(a){
  var d;
  if (typeof a === 'number') {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function init(){
  $onModuleLoad();
}

function ImageResourcePrototype(url_0){
  this.url_0 = url_0;
}

defineClass(33, 1, {}, ImageResourcePrototype);
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 33);
function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(28, 1, {269:1, 28:1}, SafeUriString);
_.equals = function equals_1(obj){
  if (!instanceOf(obj, 28)) {
    return false;
  }
  return $equals_0(this.uri_0, obj.uri_0);
}
;
_.hashCode = function hashCode_3(){
  return getHashCode(this.uri_0);
}
;
_.toString_0 = function toString_5(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 28);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire(handlers_0, evt);
  if (!ret && !!evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  return ret;
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_15, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE && (TYPE = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager;
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE, handler);
}

function setEventListener(elem, listener){
  $clinit_DOM();
  elem.__listener = listener;
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var handlers_0;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE && !!handlers && $isEventHandled(handlers, TYPE)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(128, 251, {}, Event$NativePreviewEvent);
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 128);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_1;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_14;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_12;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_16;
    case 'gesturechange':
      return $intern_17;
    case 'gestureend':
      return $intern_18;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 76)?maybeListener:null;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_1 && (elem.onerror = bits & $intern_1?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_14 && (elem.onpaste = bits & $intern_14?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_12 && (elem.ontouchend = bits & $intern_12?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ongesturestart = bits & $intern_16?dispatchEvent_1:null);
  chMask & $intern_17 && (elem.ongesturechange = bits & $intern_17?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.ongestureend = bits & $intern_18?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  !previewEvent(evt);
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget || $wnd;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget || $wnd;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function SimpleEventBus$1(){
}

defineClass(163, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 163);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(164, 1, {268:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 164);
function $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$) {
    result = new SimpleEventBus;
    this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$;
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment(){
}

defineClass(143, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment);
_.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = null;
var Lcom_google_web_bindery_event_shared_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('com.google.web.bindery.event.shared', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 143);
function $setStoredResources(this$static, storedResources){
  this$static.storedResources = storedResources;
}

function Base(){
}

function Base_0(storedResources, hiddenUnits, position){
  this.storedResources = storedResources;
  this.hiddenUnits = hiddenUnits;
  this.position_0 = position;
}

defineClass(69, 1, {69:1, 3:1, 4:1}, Base, Base_0);
_.toString_0 = function toString_6(){
  return '{ position: ' + $toString_1(this.position_0) + ', resources: ' + this.storedResources + ', hiddenUnits: ' + this.hiddenUnits + '}';
}
;
_.storedResources = 0;
var Lde_itdesign_codebattle_api_model_Base_2_classLit = createForClass('de.itdesign.codebattle.api.model', 'Base', 69);
function $clinit_Direction(){
  $clinit_Direction = emptyMethod;
  NORTH = new Direction('NORTH', 0);
  EAST = new Direction('EAST', 1);
  SOUTH = new Direction('SOUTH', 2);
  WEST = new Direction('WEST', 3);
  STAY = new Direction('STAY', 4);
}

function Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lde_itdesign_codebattle_api_model_Direction_2_classLit, 1), $intern_5, 34, 0, [NORTH, EAST, SOUTH, WEST, STAY]);
}

defineClass(34, 7, {34:1, 3:1, 8:1, 7:1}, Direction);
var EAST, NORTH, SOUTH, STAY, WEST;
var Lde_itdesign_codebattle_api_model_Direction_2_classLit = createForEnum('de.itdesign.codebattle.api.model', 'Direction', 34, values_4);
function $clinit_Direction$Map(){
  $clinit_Direction$Map = emptyMethod;
  $MAP = createValueOfMap(($clinit_Direction() , stampJavaTypeInfo(getClassLiteralForArray(Lde_itdesign_codebattle_api_model_Direction_2_classLit, 1), $intern_5, 34, 0, [NORTH, EAST, SOUTH, WEST, STAY])));
}

var $MAP;
function Field(fieldType){
  this.type_0 = fieldType;
}

defineClass(47, 1, {47:1, 3:1, 4:1}, Field);
_.toString_0 = function toString_7(){
  return '{ type: ' + this.type_0 + ', owner: ' + this.owner + ', unitOnField: ' + null + ', resourcesCount: ' + this.resourceCount + ', remainingResourceLifetime: ' + this.remainingResourceLifetime + ' }';
}
;
_.remainingResourceLifetime = 0;
_.resourceCount = 0;
var Lde_itdesign_codebattle_api_model_Field_2_classLit = createForClass('de.itdesign.codebattle.api.model', 'Field', 47);
function $clinit_FieldType(){
  $clinit_FieldType = emptyMethod;
  LAND = new FieldType('LAND', 0);
  WATER = new FieldType('WATER', 1);
  WALL = new FieldType('WALL', 2);
  BASE = new FieldType('BASE', 3);
}

function FieldType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_FieldType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lde_itdesign_codebattle_api_model_FieldType_2_classLit, 1), $intern_19, 31, 0, [LAND, WATER, WALL, BASE]);
}

defineClass(31, 7, {31:1, 3:1, 8:1, 7:1}, FieldType);
var BASE, LAND, WALL, WATER;
var Lde_itdesign_codebattle_api_model_FieldType_2_classLit = createForEnum('de.itdesign.codebattle.api.model', 'FieldType', 31, values_5);
function $clinit_FieldType$Map(){
  $clinit_FieldType$Map = emptyMethod;
  $MAP_0 = createValueOfMap(($clinit_FieldType() , stampJavaTypeInfo(getClassLiteralForArray(Lde_itdesign_codebattle_api_model_FieldType_2_classLit, 1), $intern_19, 31, 0, [LAND, WATER, WALL, BASE])));
}

var $MAP_0;
function $clinit_Position(){
  $clinit_Position = emptyMethod;
  positionsFlyweight = new HashMap;
}

function $addDirection(this$static, direction, mapWidth, mapHeight){
  switch (direction.ordinal) {
    case 3:
      return get_0(floorMod(this$static.x_0 - 1, mapWidth), this$static.y_0);
    case 1:
      return get_0(floorMod(this$static.x_0 + 1, mapWidth), this$static.y_0);
    case 0:
      return get_0(this$static.x_0, floorMod(this$static.y_0 - 1, mapHeight));
    case 2:
      return get_0(this$static.x_0, floorMod(this$static.y_0 + 1, mapHeight));
    case 4:
    default:return this$static;
  }
}

function $equals(this$static, obj){
  var other;
  if (this$static === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (Lde_itdesign_codebattle_api_model_Position_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj)) {
    return false;
  }
  other = obj;
  if (this$static.x_0 != other.x_0) {
    return false;
  }
  if (this$static.y_0 != other.y_0) {
    return false;
  }
  return true;
}

function $toString_1(this$static){
  return '{' + this$static.x_0 + ',' + this$static.y_0 + '}';
}

function Position_0(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function get_0(x_0, y_0){
  $clinit_Position();
  var key, res;
  key = x_0 + '_' + y_0;
  res = $getStringValue(positionsFlyweight, key);
  if (!res) {
    res = new Position_0(x_0, y_0);
    $putStringValue(positionsFlyweight, key, res);
  }
  return res;
}

defineClass(90, 1, {90:1, 3:1}, Position_0);
_.equals = function equals_2(obj){
  return $equals(this, obj);
}
;
_.hashCode = function hashCode_4(){
  var result;
  result = 31 + this.x_0;
  result = 31 * result + this.y_0;
  return result;
}
;
_.toString_0 = function toString_8(){
  return $toString_1(this);
}
;
_.x_0 = 0;
_.y_0 = 0;
var positionsFlyweight;
var Lde_itdesign_codebattle_api_model_Position_2_classLit = createForClass('de.itdesign.codebattle.api.model', 'Position', 90);
function $setHealth(this$static, health){
  this$static.health = health;
}

function $setResourceCount(this$static, resourceCount){
  this$static.resourceCount = resourceCount;
}

function Unit(){
}

function Unit_0(unitId, owner, unitType, position, health){
  this.unitId = unitId;
  this.owner = owner;
  this.unitType = unitType;
  this.position_0 = position;
  this.resourceCount = 0;
  this.health = health;
}

defineClass(56, 1, {56:1, 3:1, 4:1}, Unit, Unit_0);
_.equals = function equals_3(obj){
  var unit;
  if (instanceOf(obj, 56)) {
    unit = obj;
    return unit.unitId == this.unitId;
  }
  return false;
}
;
_.hashCode = function hashCode_5(){
  return this.unitId;
}
;
_.toString_0 = function toString_9(){
  return '{id: ' + this.unitId + ', type: ' + this.unitType + ', owner: ' + this.owner + ', position: ' + this.position_0 + ', resources: ' + this.resourceCount + '}';
}
;
_.health = 0;
_.resourceCount = 0;
_.unitId = 0;
var Lde_itdesign_codebattle_api_model_Unit_2_classLit = createForClass('de.itdesign.codebattle.api.model', 'Unit', 56);
function $clinit_UnitType(){
  $clinit_UnitType = emptyMethod;
  COLLECTOR = new UnitType('COLLECTOR', 0);
  WARRIOR = new UnitType('WARRIOR', 1);
  ARCHER = new UnitType('ARCHER', 2);
}

function UnitType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_UnitType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lde_itdesign_codebattle_api_model_UnitType_2_classLit, 1), $intern_5, 37, 0, [COLLECTOR, WARRIOR, ARCHER]);
}

defineClass(37, 7, {37:1, 3:1, 8:1, 7:1}, UnitType);
var ARCHER, COLLECTOR, WARRIOR;
var Lde_itdesign_codebattle_api_model_UnitType_2_classLit = createForEnum('de.itdesign.codebattle.api.model', 'UnitType', 37, values_6);
function $clinit_UnitType$Map(){
  $clinit_UnitType$Map = emptyMethod;
  $MAP_1 = createValueOfMap(($clinit_UnitType() , stampJavaTypeInfo(getClassLiteralForArray(Lde_itdesign_codebattle_api_model_UnitType_2_classLit, 1), $intern_5, 37, 0, [COLLECTOR, WARRIOR, ARCHER])));
}

var $MAP_1;
function $getUnitCost(this$static, unitType){
  return $get_0(this$static.unitCost, unitType).value_0;
}

function $getUnitInitialHealth(this$static, unitType){
  return $get_0(this$static.unitInitialHealth, unitType).value_0;
}

function $getUnitMaxResources(this$static, unitType){
  return $get_0(this$static.unitMaxResources, unitType).value_0;
}

function $setMaxNumberOfRounds(this$static, maxNumberOfRounds){
  this$static.maxNumberOfRounds = maxNumberOfRounds;
}

function $setMoveTimeInMillis(this$static, moveTimeInMillis){
  this$static.moveTimeInMillis = moveTimeInMillis;
}

function $setResourceFieldCreateInterval(this$static, resourceFieldCreateInterval){
  this$static.resourceFieldCreateInterval = resourceFieldCreateInterval;
}

function $setResourceFieldInitialAmount(this$static, resourceFieldInitialAmount){
  this$static.resourceFieldInitialAmount = resourceFieldInitialAmount;
}

function $setResourceFieldMaxLifetimeInRounds(this$static, resourceFieldMaxLifetimeInRounds){
  this$static.resourceFieldMaxLifetimeInRounds = resourceFieldMaxLifetimeInRounds;
}

function $setResourceFieldMinLifetimeInRounds(this$static, resourceFieldMinLifetimeInRounds){
  this$static.resourceFieldMinLifetimeInRounds = resourceFieldMinLifetimeInRounds;
}

function $setStartingResourceAmount(this$static, startingResourceAmount){
  this$static.startingResourceAmount = startingResourceAmount;
}

function GameEngineSettings(){
  this.unitStartAmount = new HashMap;
  this.unitCost = new HashMap;
  this.unitDamage = new HashMap;
  this.unitMaxResources = new HashMap;
  this.unitAttackDistance = new HashMap;
  this.unitInitialHealth = new HashMap;
  $put(this.unitStartAmount, ($clinit_UnitType() , COLLECTOR), valueOf_0(3));
  $put(this.unitCost, COLLECTOR, valueOf_0(50));
  $put(this.unitDamage, COLLECTOR, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_15, 29, 0, [valueOf_0(10)]));
  $put(this.unitMaxResources, COLLECTOR, valueOf_0(100));
  $put(this.unitAttackDistance, COLLECTOR, valueOf_0(1));
  $put(this.unitInitialHealth, COLLECTOR, valueOf_0(100));
  $put(this.unitStartAmount, WARRIOR, valueOf_0(0));
  $put(this.unitCost, WARRIOR, valueOf_0(100));
  $put(this.unitDamage, WARRIOR, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_15, 29, 0, [valueOf_0(50)]));
  $put(this.unitMaxResources, WARRIOR, valueOf_0(30));
  $put(this.unitAttackDistance, WARRIOR, valueOf_0(1));
  $put(this.unitInitialHealth, WARRIOR, valueOf_0(100));
  $put(this.unitStartAmount, ARCHER, valueOf_0(0));
  $put(this.unitCost, ARCHER, valueOf_0(120));
  $put(this.unitDamage, ARCHER, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_15, 29, 0, [valueOf_0(5), valueOf_0(10), valueOf_0(20), valueOf_0(10), valueOf_0(5)]));
  $put(this.unitMaxResources, ARCHER, valueOf_0(10));
  $put(this.unitAttackDistance, ARCHER, valueOf_0(5));
  $put(this.unitInitialHealth, ARCHER, valueOf_0(60));
}

defineClass(150, 1, {}, GameEngineSettings);
_.toString_0 = function toString_10(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'GameEngineSettings [maxNumberOfRounds=';
  $append(builder, this.maxNumberOfRounds);
  builder.string += ', mapFile=';
  $append_2(builder, this.mapFile);
  builder.string += ', startingResourceAmount=';
  $append(builder, this.startingResourceAmount);
  builder.string += ', resourceFieldCreateInterval=';
  $append(builder, this.resourceFieldCreateInterval);
  builder.string += ', resourceFieldInitialAmount=';
  $append(builder, this.resourceFieldInitialAmount);
  builder.string += ', resourceFieldMinLifetimeInRounds=';
  $append(builder, this.resourceFieldMinLifetimeInRounds);
  builder.string += ', resourceFieldMaxLifetimeInRounds=';
  $append(builder, this.resourceFieldMaxLifetimeInRounds);
  builder.string += ', moveTimeInMillis=';
  $append(builder, this.moveTimeInMillis);
  builder.string += ', unitCost=';
  $append_1(builder, this.unitCost);
  builder.string += ', unitStrength=';
  $append_1(builder, this.unitDamage);
  builder.string += ', unitMaxResources=';
  $append_1(builder, this.unitMaxResources);
  builder.string += ', unitAttackDistance=';
  $append_1(builder, this.unitAttackDistance);
  builder.string += ']';
  return builder.string;
}
;
_.maxNumberOfRounds = 1000;
_.moveTimeInMillis = 500;
_.resourceFieldCreateInterval = 10;
_.resourceFieldInitialAmount = 133;
_.resourceFieldMaxLifetimeInRounds = 500;
_.resourceFieldMinLifetimeInRounds = 100;
_.startingResourceAmount = 0;
var Lde_itdesign_codebattle_engine_configs_GameEngineSettings_2_classLit = createForClass('de.itdesign.codebattle.engine.configs', 'GameEngineSettings', 150);
function $createState(this$static, newRound){
  var action, action$iterator, newState, roundBefore, stateRoundBefore;
  roundBefore = newRound - 1;
  roundBefore == 1?(stateRoundBefore = this$static.initialState):(stateRoundBefore = $get_0(this$static.states, valueOf_0(roundBefore)));
  newState = $copy(stateRoundBefore);
  for (action$iterator = $get_0(this$static.actions, valueOf_0(roundBefore)).iterator(); action$iterator.hasNext_0();) {
    action = action$iterator.next_1();
    action.apply_0(stateRoundBefore, newState, this$static.settings, this$static.map_0);
  }
  $decreaseResourceLifetimeAndRemoveExpired(newState);
  $put(this$static.states, valueOf_0(newRound), newState);
}

function $flatCopyMap(map_0){
  var flatMap, x_0, y_0;
  flatMap = initMultidimensionalArray(Lde_itdesign_codebattle_api_model_Field_2_classLit, [$intern_20, $intern_21], [98, 47], 0, [map_0.length, map_0[0].length], 2);
  for (x_0 = 0; x_0 < map_0.length; x_0++) {
    for (y_0 = 0; y_0 < map_0[0].length; y_0++) {
      flatMap[x_0][y_0] = new Field(map_0[x_0][y_0].type_0);
    }
  }
  return flatMap;
}

function $getActionsAfterRound(this$static, round_0){
  return $get_0(this$static.actions, valueOf_0(round_0));
}

function $getActionsBeforeRound(this$static, round_0){
  return $get_0(this$static.actions, valueOf_0(round_0 - 1));
}

function $getStateInRound(this$static, round_0){
  return $get_0(this$static.states, valueOf_0(round_0));
}

function GameReplay(settings, map_0, initialState){
  this.states = new HashMap;
  this.actions = new HashMap;
  this.settings = settings;
  this.map_0 = $flatCopyMap(map_0);
  this.initialState = initialState;
  $put(this.states, valueOf_0(1), initialState);
  $put(this.actions, valueOf_0(1), new ArrayList);
}

defineClass(120, 1, {}, GameReplay);
var Lde_itdesign_codebattle_engine_replay_GameReplay_2_classLit = createForClass('de.itdesign.codebattle.engine.replay', 'GameReplay', 120);
function $makeBase(jsonBase){
  var hiddenUnits, jsonHiddenUnits, position, storedResources, x_0, y_0;
  storedResources = round_int($valueProd(jsonBase['storedResources']));
  jsonHiddenUnits = jsonBase['hiddenUnits'];
  if (jsonHiddenUnits.length > 0) {
    throw toJs(new UnsupportedOperationException_0('Initial hidden units not yet implemented.'));
  }
  hiddenUnits = new HashSet;
  position = (x_0 = round_int($valueProd(jsonBase['position']['x'])) , y_0 = round_int($valueProd(jsonBase['position']['y'])) , get_0(x_0, y_0));
  return new Base_0(storedResources, hiddenUnits, position);
}

function $makeInitialState(this$static){
  var base, clientName, clientName$iterator, clientNames, gameState, i, infoSet, jsonBase, jsonClientNames, jsonState, jsonUnits, playerIndex, resources, str, str0, thisPlayerIndex, unitById, usedResources;
  jsonState = this$static.json['initialState'];
  jsonClientNames = jsonState['clientNames'];
  clientNames = new ArrayList;
  for (i = 0; i < jsonClientNames.length; i++) {
    $add_1(clientNames, jsonClientNames[i]);
  }
  gameState = new GameState(clientNames);
  playerIndex = jsonState['playerNameIndex'];
  for (clientName$iterator = new ArrayList$1(clientNames); clientName$iterator.i < clientName$iterator.this$01.array.length;) {
    clientName = $next_0(clientName$iterator);
    thisPlayerIndex = playerIndex[clientName];
    jsonUnits = thisPlayerIndex['units'];
    if (jsonUnits.length > 0) {
      throw toJs(new UnsupportedOperationException_0('Initial units not yet implemented.'));
    }
    usedResources = round_int($valueProd(thisPlayerIndex['usedResources']));
    usedResources > 0 && (infoSet = $getStringValue(gameState.playerNameIndex, clientName) , $setUsedResources(infoSet, infoSet.usedResources + usedResources));
    jsonBase = thisPlayerIndex['base'];
    base = $makeBase(jsonBase);
    $setBase($getStringValue(gameState.playerNameIndex, clientName), base);
  }
  resources = jsonState['resources'];
  unitById = jsonState['unitById'];
  if ((str0 = $keys0(resources) , str0).length > 0 || (str = $keys0(unitById) , str).length > 0) {
    throw toJs(new UnsupportedOperationException_0('Initial resources/units not yet implemented.'));
  }
  return gameState;
}

function $makeMap(this$static){
  var height, jsonField, jsonFieldType, jsonMap, map_0, width_0, x_0, y_0;
  jsonMap = this$static.json['map'];
  width_0 = jsonMap.length;
  height = jsonMap[0].length;
  map_0 = initMultidimensionalArray(Lde_itdesign_codebattle_api_model_Field_2_classLit, [$intern_20, $intern_21], [98, 47], 0, [width_0, height], 2);
  for (x_0 = 0; x_0 < width_0; x_0++) {
    for (y_0 = 0; y_0 < height; y_0++) {
      jsonField = jsonMap[x_0][y_0];
      jsonFieldType = jsonField['type'];
      map_0[x_0][y_0] = new Field(($clinit_FieldType() , valueOf(($clinit_FieldType$Map() , $MAP_0), jsonFieldType)));
    }
  }
  return map_0;
}

function $makeRecording(this$static, jsonRecording){
  var className, recordingProvider;
  className = jsonRecording['@c'];
  recordingProvider = $get(this$static.providerRegistry, className);
  if (recordingProvider) {
    return recordingProvider.get_0(jsonRecording);
  }
  return null;
}

function $makeReplay(this$static){
  var actionsThisRound, i, initialState, map_0, object, recording, result, round_0, settings;
  settings = $makeSettings(this$static);
  map_0 = $makeMap(this$static);
  initialState = $makeInitialState(this$static);
  result = new GameReplay(settings, map_0, initialState);
  for (round_0 = 1; round_0 <= settings.maxNumberOfRounds; round_0++) {
    actionsThisRound = this$static.json['actions'][$clinit_String() , '' + round_0];
    for (i = 0; i < actionsThisRound.length; i++) {
      object = actionsThisRound[i];
      recording = $makeRecording(this$static, object);
      if (!recording) {
        $error(this$static.console_0, 'In round ' + round_0 + ' the action ' + i + ' could not be recreated!');
        $debug(this$static.console_0, object);
      }
       else {
        $get_0(result.actions, valueOf_0(round_0)).add_1(recording);
      }
    }
    $createState(result, round_0 + 1);
    $put(result.actions, valueOf_0(round_0 + 1), new ArrayList);
  }
  return result;
}

function $makeSettings(this$static){
  var i, jsonSettings, settings, type_0, type$array, type$index, type$max, unitAttackDistance, unitCost, unitDamage, unitDamageArray, unitInitialHealth, unitMaxResources, unitStartAmount;
  jsonSettings = this$static.json['settings'];
  settings = new GameEngineSettings;
  settings.mapFile = jsonSettings['mapFile'];
  $setMaxNumberOfRounds(settings, round_int($valueProd(jsonSettings['maxNumberOfRounds'])));
  $setMoveTimeInMillis(settings, round_int($valueProd(jsonSettings['moveTimeInMillis'])));
  $setResourceFieldCreateInterval(settings, round_int($valueProd(jsonSettings['resourceFieldCreateInterval'])));
  $setResourceFieldInitialAmount(settings, round_int($valueProd(jsonSettings['resourceFieldInitialAmount'])));
  $setResourceFieldMaxLifetimeInRounds(settings, round_int($valueProd(jsonSettings['resourceFieldMaxLifetimeInRounds'])));
  $setResourceFieldMinLifetimeInRounds(settings, round_int($valueProd(jsonSettings['resourceFieldMinLifetimeInRounds'])));
  $setStartingResourceAmount(settings, round_int($valueProd(jsonSettings['startingResourceAmount'])));
  for (type$array = ($clinit_UnitType() , stampJavaTypeInfo(getClassLiteralForArray(Lde_itdesign_codebattle_api_model_UnitType_2_classLit, 1), $intern_5, 37, 0, [COLLECTOR, WARRIOR, ARCHER])) , type$index = 0 , type$max = type$array.length; type$index < type$max; ++type$index) {
    type_0 = type$array[type$index];
    unitAttackDistance = round_int($valueProd(jsonSettings['unitAttackDistance'][type_0.name_0 != null?type_0.name_0:'' + type_0.ordinal]));
    unitCost = round_int($valueProd(jsonSettings['unitCost'][type_0.name_0 != null?type_0.name_0:'' + type_0.ordinal]));
    unitDamage = jsonSettings['unitDamage'][type_0.name_0 != null?type_0.name_0:'' + type_0.ordinal];
    unitInitialHealth = round_int($valueProd(jsonSettings['unitInitialHealth'][type_0.name_0 != null?type_0.name_0:'' + type_0.ordinal]));
    unitMaxResources = round_int($valueProd(jsonSettings['unitMaxResources'][type_0.name_0 != null?type_0.name_0:'' + type_0.ordinal]));
    unitStartAmount = round_int($valueProd(jsonSettings['unitStartAmount'][type_0.name_0 != null?type_0.name_0:'' + type_0.ordinal]));
    unitDamageArray = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_15, 29, unitAttackDistance, 0, 1);
    for (i = 0; i < unitAttackDistance; i++) {
      unitDamageArray[i] = valueOf_0(round_int($valueProd(unitDamage[i])));
    }
    $put(settings.unitAttackDistance, type_0, valueOf_0(unitAttackDistance));
    $put(settings.unitCost, type_0, valueOf_0(unitCost));
    $put(settings.unitDamage, type_0, unitDamageArray);
    $put(settings.unitInitialHealth, type_0, valueOf_0(unitInitialHealth));
    $put(settings.unitMaxResources, type_0, valueOf_0(unitMaxResources));
    $put(settings.unitStartAmount, type_0, valueOf_0(unitStartAmount));
  }
  return settings;
}

function GameReplayReconstructor(parsedJson, providerRegistry, console_0){
  this.json = parsedJson;
  this.providerRegistry = providerRegistry;
  this.console_0 = console_0;
}

defineClass(121, 1, {}, GameReplayReconstructor);
var Lde_itdesign_codebattle_engine_replay_GameReplayReconstructor_2_classLit = createForClass('de.itdesign.codebattle.engine.replay', 'GameReplayReconstructor', 121);
function $create(this$static, parsedJson){
  var result;
  return new GameReplayReconstructor(parsedJson, $get_Key$type$de$itdesign$codebattle$engine$replay$RecordingProviderRegistry$_annotation$$none$$(this$static.providerRegistryProvider.this$01), (result = ($getFragment_elemental_gin(this$static.consoleProvider.this$01.injector) , $wnd.console) , result));
}

function GameReplayReconstructorFactory(providerRegistryProvider, consoleProvider){
  this.providerRegistryProvider = providerRegistryProvider;
  this.consoleProvider = consoleProvider;
}

defineClass(122, 1, {}, GameReplayReconstructorFactory);
var Lde_itdesign_codebattle_engine_replay_GameReplayReconstructorFactory_2_classLit = createForClass('de.itdesign.codebattle.engine.replay', 'GameReplayReconstructorFactory', 122);
function $get(this$static, jsonClassName){
  return $getStringValue(this$static.registry, jsonClassName);
}

function $register(this$static, string, provider){
  $putStringValue(this$static.registry, string, provider);
}

function RecordingProviderRegistry(){
  this.registry = new HashMap;
  $register(this, '.AttackRecording', new AttackRecordingProvider);
  $register(this, '.CreateUnitRecording', new CreateUnitRecordingProvider);
  $register(this, '.DeathRecording', new DeathRecordingProvider);
  $register(this, '.MovementRecording', new MovementRecordingProvider);
  $register(this, '.SetFieldResourcesRecording', new SetFieldResourcesRecordingProvider);
  $register(this, '.SetHealthRecording', new SetHealthRecordingProvider);
  $register(this, '.PickupResourcesRecording', new PickupResourcesRecordingProvider);
  $register(this, '.silent.TimeOutRecording', new TimeOutRecordingProvider);
  $register(this, '.silent.ExceptionRecording', new ExceptionRecordingProvider);
}

defineClass(149, 1, {}, RecordingProviderRegistry);
var Lde_itdesign_codebattle_engine_replay_RecordingProviderRegistry_2_classLit = createForClass('de.itdesign.codebattle.engine.replay', 'RecordingProviderRegistry', 149);
function $get_Key$type$de$itdesign$codebattle$engine$replay$GameReplayReconstructorFactory$_annotation$$none$$(this$static){
  var result, result0, result1;
  result0 = new GameReplayReconstructorFactory((result1 = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment$1(this$static) , result1), (result = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment$1_0($getFragment_elemental_html(this$static.injector)) , result));
  return result0;
}

function $get_Key$type$de$itdesign$codebattle$engine$replay$RecordingProviderRegistry$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$engine$replay$RecordingProviderRegistry$_annotation$$none$$) {
    created = new RecordingProviderRegistry;
    this$static.singleton_Key$type$de$itdesign$codebattle$engine$replay$RecordingProviderRegistry$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$engine$replay$RecordingProviderRegistry$_annotation$$none$$;
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_0(injector){
  this.injector = injector;
}

defineClass(145, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_0);
_.singleton_Key$type$de$itdesign$codebattle$engine$replay$RecordingProviderRegistry$_annotation$$none$$ = null;
var Lde_itdesign_codebattle_engine_replay_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.engine.replay', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 145);
function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment$1(this$0){
  this.this$01 = this$0;
}

defineClass(146, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment$1);
var Lde_itdesign_codebattle_engine_replay_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment$1_2_classLit = createForClass('de.itdesign.codebattle.engine.replay', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment/1', 146);
function ReplayRecording(client){
  this.client = client;
}

defineClass(16, 1, $intern_22);
var Lde_itdesign_codebattle_engine_replay_recording_ReplayRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'ReplayRecording', 16);
function AttackRecording(client, unitId, unitIdDefender, newDefenderHealth){
  ReplayRecording.call(this, client);
  this.unitId = unitId;
  this.unitIdDefender = unitIdDefender;
  this.newDefenderHealth = newDefenderHealth;
}

defineClass(73, 16, {73:1, 16:1}, AttackRecording);
_.apply_0 = function apply_1(oldState, newState, settings, map_0){
  $setHealth($getUnitById(newState, valueOf_0(this.unitIdDefender)), this.newDefenderHealth);
}
;
_.newDefenderHealth = 0;
_.unitId = 0;
_.unitIdDefender = 0;
var Lde_itdesign_codebattle_engine_replay_recording_AttackRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'AttackRecording', 73);
defineClass(27, 1, $intern_23);
var Lde_itdesign_codebattle_engine_replay_recording_ReplayRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'ReplayRecordingProvider', 27);
function AttackRecordingProvider(){
}

defineClass(218, 27, $intern_23, AttackRecordingProvider);
_.get_0 = function get_1(o){
  var client, unitId, unitIdDefender, newDefenderHealth;
  return client = o['client'] , unitId = round_int($valueProd(o['unitId'])) , unitIdDefender = round_int($valueProd(o['unitIdDefender'])) , newDefenderHealth = round_int($valueProd(o['newDefenderHealth'])) , new AttackRecording(client, unitId, unitIdDefender, newDefenderHealth);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_AttackRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'AttackRecordingProvider', 218);
function CreateUnitRecording(client, newUnitId, newUnitType, cost){
  ReplayRecording.call(this, client);
  this.newUnitId = newUnitId;
  this.newUnitType = newUnitType;
  this.cost = cost;
}

defineClass(227, 16, $intern_22, CreateUnitRecording);
_.apply_0 = function apply_2(oldState, newState, settings, map_0){
  var base, newUnit;
  base = $getBaseOfPlayer(newState, this.client);
  newUnit = new Unit_0(this.newUnitId, this.client, this.newUnitType, base.position_0, $getUnitInitialHealth(settings, this.newUnitType));
  $setStoredResources(base, base.storedResources - this.cost);
  $put(newState.unitById, valueOf_0(newUnit.unitId), newUnit);
  $add_2($getUnitsOfPlayer(newState, newUnit.owner), newUnit);
  $add_2($getBaseOfPlayer(newState, this.client).hiddenUnits, newUnit);
}
;
_.cost = 0;
_.newUnitId = 0;
var Lde_itdesign_codebattle_engine_replay_recording_CreateUnitRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'CreateUnitRecording', 227);
function CreateUnitRecordingProvider(){
}

defineClass(219, 27, $intern_23, CreateUnitRecordingProvider);
_.get_0 = function get_2(o){
  var client, newUnitId, newUnitType, cost;
  return client = o['client'] , newUnitId = round_int($valueProd(o['newUnitId'])) , newUnitType = ($clinit_UnitType() , valueOf(($clinit_UnitType$Map() , $MAP_1), o['newUnitType'])) , cost = round_int($valueProd(o['cost'])) , new CreateUnitRecording(client, newUnitId, newUnitType, cost);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_CreateUnitRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'CreateUnitRecordingProvider', 219);
function DeathRecording(client, unitId, droppedResources){
  ReplayRecording.call(this, client);
  this.unitId = unitId;
  this.droppedResources = droppedResources;
}

defineClass(228, 16, $intern_22, DeathRecording);
_.apply_0 = function apply_3(oldState, newState, settings, map_0){
  var base, deadUnit;
  deadUnit = $getUnitById(newState, valueOf_0(this.unitId));
  $remove(newState.unitById, valueOf_0(deadUnit.unitId));
  $remove_3($getUnitsOfPlayer(newState, deadUnit.owner), deadUnit);
  base = $getBaseOfPlayer(newState, this.client);
  $contains_1(base.hiddenUnits, deadUnit) && $remove_3(base.hiddenUnits, deadUnit);
  this.droppedResources > 0 && $addResourcesToField(newState, deadUnit.position_0, this.droppedResources, settings.resourceFieldMaxLifetimeInRounds);
}
;
_.droppedResources = 0;
_.unitId = 0;
var Lde_itdesign_codebattle_engine_replay_recording_DeathRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'DeathRecording', 228);
function DeathRecordingProvider(){
}

defineClass(220, 27, $intern_23, DeathRecordingProvider);
_.get_0 = function get_3(o){
  var client, unitId, droppedResources;
  return client = o['client'] , unitId = round_int($valueProd(o['unitId'])) , droppedResources = round_int($valueProd(o['droppedResources'])) , new DeathRecording(client, unitId, droppedResources);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_DeathRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'DeathRecordingProvider', 220);
function MovementRecording(client, unitId, direction){
  ReplayRecording.call(this, client);
  this.unitId = unitId;
  this.direction_0 = direction;
}

defineClass(74, 16, {74:1, 16:1}, MovementRecording);
_.apply_0 = function apply_4(oldState, newState, settings, map_0){
  var base, basePosition, newPosition, oldPosition, unit;
  unit = $getUnitById(newState, valueOf_0(this.unitId));
  oldPosition = unit.position_0;
  newPosition = $addDirection(oldPosition, this.direction_0, map_0.length, map_0[0].length);
  unit.position_0 = newPosition;
  base = $getBaseOfPlayer(newState, this.client);
  basePosition = base.position_0;
  if ($equals(basePosition, newPosition)) {
    $setStoredResources(base, base.storedResources + unit.resourceCount);
    unit.resourceCount = 0;
    $add_2(base.hiddenUnits, unit);
  }
   else 
    $equals(basePosition, oldPosition) && !$equals(newPosition, oldPosition) && $remove_3(base.hiddenUnits, unit);
}
;
_.unitId = 0;
var Lde_itdesign_codebattle_engine_replay_recording_MovementRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'MovementRecording', 74);
function MovementRecordingProvider(){
}

defineClass(221, 27, $intern_23, MovementRecordingProvider);
_.get_0 = function get_4(o){
  var client, unitId, direction;
  return client = o['client'] , unitId = round_int($valueProd(o['unitId'])) , direction = ($clinit_Direction() , valueOf(($clinit_Direction$Map() , $MAP), o['direction'])) , new MovementRecording(client, unitId, direction);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_MovementRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'MovementRecordingProvider', 221);
function PickupResourcesRecording(client, unitId, resourcesTaken){
  ReplayRecording.call(this, client);
  this.unitId = unitId;
  this.resourcesTaken = resourcesTaken;
}

defineClass(231, 16, $intern_22, PickupResourcesRecording);
_.apply_0 = function apply_5(oldState, newState, settings, map_0){
  var unit;
  unit = $getUnitById(newState, valueOf_0(this.unitId));
  $setResourceCount(unit, unit.resourceCount + this.resourcesTaken);
  $decreaseResources(newState, unit.position_0, this.resourcesTaken);
}
;
_.resourcesTaken = 0;
_.unitId = 0;
var Lde_itdesign_codebattle_engine_replay_recording_PickupResourcesRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'PickupResourcesRecording', 231);
function PickupResourcesRecordingProvider(){
}

defineClass(224, 27, $intern_23, PickupResourcesRecordingProvider);
_.get_0 = function get_5(o){
  var client, unitId, resourcesTaken;
  return client = o['client'] , unitId = round_int($valueProd(o['unitId'])) , resourcesTaken = round_int($valueProd(o['resourcesTaken'])) , new PickupResourcesRecording(client, unitId, resourcesTaken);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_PickupResourcesRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'PickupResourcesRecordingProvider', 224);
function SetFieldResourcesRecording(position, newResourceAmount, newResourceLifetime){
  ReplayRecording.call(this, null);
  this.position_0 = position;
  this.newResourceLifetime = newResourceLifetime;
  this.newResourceAmount = newResourceAmount;
}

defineClass(229, 16, $intern_22, SetFieldResourcesRecording);
_.apply_0 = function apply_6(oldState, newState, settings, map_0){
  $addResourcesToField(newState, this.position_0, this.newResourceAmount, this.newResourceLifetime);
}
;
_.newResourceAmount = 0;
_.newResourceLifetime = 0;
var Lde_itdesign_codebattle_engine_replay_recording_SetFieldResourcesRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'SetFieldResourcesRecording', 229);
function SetFieldResourcesRecordingProvider(){
}

defineClass(222, 27, $intern_23, SetFieldResourcesRecordingProvider);
_.get_0 = function get_6(o){
  var oPosition, position, newResourceAmount, newResourceLifetime;
  return oPosition = o['position'] , position = get_0(round_int($valueProd(oPosition['x'])), round_int($valueProd(oPosition['y']))) , newResourceAmount = round_int($valueProd(o['newResourceAmount'])) , newResourceLifetime = round_int($valueProd(o['newResourceLifetime'])) , new SetFieldResourcesRecording(position, newResourceAmount, newResourceLifetime);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_SetFieldResourcesRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'SetFieldResourcesRecordingProvider', 222);
function SetHealthRecording(client, unitId, newHealth){
  ReplayRecording.call(this, client);
  this.unitId = unitId;
  this.newHealth = newHealth;
}

defineClass(230, 16, $intern_22, SetHealthRecording);
_.apply_0 = function apply_7(oldState, newState, settings, map_0){
  var base, unit, unitCost, unitHealCost;
  unit = $getUnitById(newState, valueOf_0(this.unitId));
  $setHealth(unit, this.newHealth);
  unitCost = $getUnitCost(settings, unit.unitType);
  unitHealCost = unitCost / 2 | 0;
  base = $getBaseOfPlayer(newState, this.client);
  $setStoredResources(base, base.storedResources - unitHealCost);
}
;
_.newHealth = 0;
_.unitId = 0;
var Lde_itdesign_codebattle_engine_replay_recording_SetHealthRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'SetHealthRecording', 230);
function SetHealthRecordingProvider(){
}

defineClass(223, 27, $intern_23, SetHealthRecordingProvider);
_.get_0 = function get_7(o){
  var client, unitId, newHealth;
  return client = o['client'] , unitId = round_int($valueProd(o['unitId'])) , newHealth = round_int($valueProd(o['newHealth'])) , new SetHealthRecording(client, unitId, newHealth);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_SetHealthRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording', 'SetHealthRecordingProvider', 223);
function SilentRecording(client){
  ReplayRecording.call(this, client);
}

defineClass(95, 16, $intern_22);
_.apply_0 = function apply_8(oldState, newState, settings, map_0){
}
;
var Lde_itdesign_codebattle_engine_replay_recording_silent_SilentRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording.silent', 'SilentRecording', 95);
function ExceptionRecording(client){
  SilentRecording.call(this, client);
}

defineClass(233, 95, $intern_22, ExceptionRecording);
var Lde_itdesign_codebattle_engine_replay_recording_silent_ExceptionRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording.silent', 'ExceptionRecording', 233);
function ExceptionRecordingProvider(){
}

defineClass(226, 27, $intern_23, ExceptionRecordingProvider);
_.get_0 = function get_8(o){
  var client;
  return client = o['client'] , o['thrown'] , new ExceptionRecording(client);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_silent_ExceptionRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording.silent', 'ExceptionRecordingProvider', 226);
function TimeOutRecording(client){
  SilentRecording.call(this, client);
}

defineClass(232, 95, $intern_22, TimeOutRecording);
var Lde_itdesign_codebattle_engine_replay_recording_silent_TimeOutRecording_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording.silent', 'TimeOutRecording', 232);
function TimeOutRecordingProvider(){
}

defineClass(225, 27, $intern_23, TimeOutRecordingProvider);
_.get_0 = function get_9(o){
  var client;
  return client = o['client'] , new TimeOutRecording(client);
}
;
var Lde_itdesign_codebattle_engine_replay_recording_silent_TimeOutRecordingProvider_2_classLit = createForClass('de.itdesign.codebattle.engine.replay.recording.silent', 'TimeOutRecordingProvider', 225);
function $addResourcesToField(this$static, position, addedResources, lifetimeInRounds){
  var resource;
  resource = $getOrCreateResourceInfoSet(this$static, position);
  $setAmount(resource, resource.amount + addedResources);
  resource.lifetime = lifetimeInRounds;
}

function $copy(this$static){
  var base, clone, clonedBase, clonedResource, clonedUnitReference, entry, entry$iterator, entry$iterator0, entry0, infoSet, infoSetClone, outerIter, outerIter0, playerUnit, playerUnit$iterator, resource, unit, unit$iterator, unitByIdEntry, unitByIdEntry$iterator, clone_0, clone_1;
  clone = new GameState(this$static.clientNames);
  for (unitByIdEntry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.unitById)).this$01); unitByIdEntry$iterator.hasNext;) {
    unitByIdEntry = $next(unitByIdEntry$iterator);
    unit = unitByIdEntry.getValue();
    $put(clone.unitById, unitByIdEntry.getKey(), (clone_0 = new Unit , clone_0.unitId = unit.unitId , clone_0.unitType = unit.unitType , clone_0.owner = unit.owner , clone_0.position_0 = unit.position_0 , clone_0.resourceCount = unit.resourceCount , clone_0.health = unit.health , clone_0));
  }
  for (entry$iterator0 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.playerNameIndex)).this$01); entry$iterator0.hasNext;) {
    entry0 = $next(entry$iterator0);
    infoSet = entry0.getValue();
    infoSetClone = new GameState$PlayerInfoSet;
    $setUsedResources(infoSetClone, infoSet.usedResources);
    base = infoSet.base;
    clonedBase = (clone_1 = new Base , clone_1.storedResources = base.storedResources , clone_1.position_0 = base.position_0 , clone_1.hiddenUnits = new HashSet , clone_1);
    for (unit$iterator = (outerIter0 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(base.hiddenUnits.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter0)); unit$iterator.val$outerIter2.hasNext;) {
      unit = (entry = $next(unit$iterator.val$outerIter2) , entry.getKey());
      clonedUnitReference = $getUnitById(clone, valueOf_0(unit.unitId));
      $add_2(clonedBase.hiddenUnits, clonedUnitReference);
    }
    infoSetClone.base = clonedBase;
    for (playerUnit$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(infoSet.units.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); playerUnit$iterator.val$outerIter2.hasNext;) {
      playerUnit = (entry = $next(playerUnit$iterator.val$outerIter2) , entry.getKey());
      clonedUnitReference = $getUnitById(clone, valueOf_0(playerUnit.unitId));
      $add_2(infoSetClone.units, clonedUnitReference);
    }
    $putStringValue(clone.playerNameIndex, entry0.getKey(), infoSetClone);
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.resources)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    resource = entry.getValue();
    clonedResource = new GameState$ResourceInfoSet;
    $setAmount(clonedResource, resource.amount);
    $setLifetime(clonedResource, resource.lifetime);
    $put(clone.resources, entry.getKey(), clonedResource);
  }
  return clone;
}

function $decreaseResourceLifetimeAndRemoveExpired(this$static){
  var entry, iterator, newLifetime, outerIter, resource;
  for (iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.resources)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); iterator.val$outerIter2.hasNext;) {
    resource = (entry = $next(iterator.val$outerIter2) , entry.getValue());
    if (resource.lifetime > 0) {
      newLifetime = resource.lifetime - 1;
      resource.lifetime = newLifetime;
    }
    (resource.lifetime <= 0 || resource.amount <= 0) && $remove_0(iterator.val$outerIter2);
  }
}

function $decreaseResources(this$static, position, decreaseBy){
  var resource;
  resource = $getOrCreateResourceInfoSet(this$static, position);
  $setAmount(resource, resource.amount - decreaseBy);
}

function $getBaseOfPlayer(this$static, playerName){
  return $getStringValue(this$static.playerNameIndex, playerName).base;
}

function $getCurrentStats(this$static){
  var base, clientName, clientName$iterator, hiddenUnitCount, playerStats, resCount, stats, unitCount;
  stats = new ArrayList;
  for (clientName$iterator = this$static.clientNames.iterator(); clientName$iterator.hasNext_0();) {
    clientName = clientName$iterator.next_1();
    base = $getStringValue(this$static.playerNameIndex, clientName).base;
    resCount = base.storedResources;
    unitCount = $size($getStringValue(this$static.playerNameIndex, clientName).units.map_0);
    hiddenUnitCount = $size(base.hiddenUnits.map_0);
    playerStats = new PlayerStats(clientName, resCount, unitCount, hiddenUnitCount);
    stats.array[stats.array.length] = playerStats;
  }
  return stats;
}

function $getOrCreateResourceInfoSet(this$static, position){
  var result;
  result = $get_0(this$static.resources, position);
  if (!result) {
    result = new GameState$ResourceInfoSet;
    $put(this$static.resources, position, result);
  }
  return result;
}

function $getUnitById(this$static, unitId){
  return $get_0(this$static.unitById, unitId);
}

function $getUnitsOfPlayer(this$static, playerName){
  return $getStringValue(this$static.playerNameIndex, playerName).units;
}

function GameState(clientNames){
  var clientName, clientName$iterator;
  this.playerNameIndex = new HashMap;
  this.unitById = new HashMap;
  this.resources = new HashMap;
  this.clientNames = clientNames;
  for (clientName$iterator = clientNames.iterator(); clientName$iterator.hasNext_0();) {
    clientName = clientName$iterator.next_1();
    $putStringValue(this.playerNameIndex, clientName, new GameState$PlayerInfoSet);
  }
}

defineClass(65, 1, {65:1, 4:1}, GameState);
var Lde_itdesign_codebattle_engine_state_GameState_2_classLit = createForClass('de.itdesign.codebattle.engine.state', 'GameState', 65);
function $setBase(this$static, base){
  this$static.base = base;
}

function $setUsedResources(this$static, usedResources){
  this$static.usedResources = usedResources;
}

function GameState$PlayerInfoSet(){
  this.base = null;
  this.usedResources = 0;
  this.units = new HashSet;
}

defineClass(66, 1, {66:1}, GameState$PlayerInfoSet);
_.usedResources = 0;
var Lde_itdesign_codebattle_engine_state_GameState$PlayerInfoSet_2_classLit = createForClass('de.itdesign.codebattle.engine.state', 'GameState/PlayerInfoSet', 66);
function $setAmount(this$static, amount){
  this$static.amount = amount;
}

function $setLifetime(this$static, lifetime){
  this$static.lifetime = lifetime;
}

function GameState$ResourceInfoSet(){
  this.amount = 0;
  this.lifetime = 0;
}

defineClass(67, 1, {67:1}, GameState$ResourceInfoSet);
_.amount = 0;
_.lifetime = 0;
var Lde_itdesign_codebattle_engine_state_GameState$ResourceInfoSet_2_classLit = createForClass('de.itdesign.codebattle.engine.state', 'GameState/ResourceInfoSet', 67);
function PlayerStats(playerName, resourceCount, unitCount, hiddenUnitCount){
  this.playerName = playerName;
  this.resourceCount = resourceCount;
  this.unitCount = unitCount;
  this.hiddenUnitCount = hiddenUnitCount;
}

defineClass(96, 1, {96:1}, PlayerStats);
_.toString_0 = function toString_11(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'PlayerStats [playerName=';
  $append_2(builder, this.playerName);
  builder.string += ', resourceCount=';
  $append(builder, this.resourceCount);
  builder.string += ', unitCount=';
  $append(builder, this.unitCount);
  builder.string += ', hiddenUnitCount=';
  $append(builder, this.hiddenUnitCount);
  builder.string += ']';
  return builder.string;
}
;
_.hiddenUnitCount = 0;
_.resourceCount = 0;
_.unitCount = 0;
var Lde_itdesign_codebattle_engine_state_PlayerStats_2_classLit = createForClass('de.itdesign.codebattle.engine.state', 'PlayerStats', 96);
function $initReplay(this$static, config){
  var gameReplay, replay;
  replay = $parse(config.replayFile);
  gameReplay = $makeReplay($create(this$static.reconstructorFactory, replay));
  $removeAllChildren(config.map);
  $appendChild(config.map, this$static.mapView.canvas);
  $appendChild(config.controls, this$static.control.div);
  $appendChild(config.stats, this$static.infoBoardView.table.table);
  $appendChild(config.ranks, this$static.scoreBoardView.table.table);
  $doFire(this$static.eventBus, new SwitchReplayEvent(gameReplay));
}

function $lambda$0(this$static, config_1, result_1){
  $ifPresent(ofNullable(result_1.result), new Bootstrapper$lambda$1$Type(this$static, config_1));
}

function $lambda$1(this$static, config_1, replay_1){
  config_1.replayFile = replay_1;
  $initReplay(this$static, config_1);
}

function Bootstrapper(eventBus, reconstructorFactory, mapView, infoBoardView, scoreBoardView, control){
  this.eventBus = eventBus;
  this.reconstructorFactory = reconstructorFactory;
  this.mapView = mapView;
  this.infoBoardView = infoBoardView;
  this.scoreBoardView = scoreBoardView;
  this.control = control;
}

defineClass(105, 1, {}, Bootstrapper);
var Lde_itdesign_codebattle_visualizer_client_Bootstrapper_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'Bootstrapper', 105);
function $onFinished(this$static, arg0){
  $lambda$0(this$static.$$outer_0, this$static.config_1, arg0);
}

function Bootstrapper$lambda$0$Type($$outer_0, config_1){
  this.$$outer_0 = $$outer_0;
  this.config_1 = config_1;
}

defineClass(107, 1, {}, Bootstrapper$lambda$0$Type);
var Lde_itdesign_codebattle_visualizer_client_Bootstrapper$lambda$0$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'Bootstrapper/lambda$0$Type', 107);
function $accept(this$static, arg0){
  $lambda$1(this$static.$$outer_0, this$static.config_1, arg0);
}

function Bootstrapper$lambda$1$Type($$outer_0, config_1){
  this.$$outer_0 = $$outer_0;
  this.config_1 = config_1;
}

defineClass(106, 1, {}, Bootstrapper$lambda$1$Type);
var Lde_itdesign_codebattle_visualizer_client_Bootstrapper$lambda$1$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'Bootstrapper/lambda$1$Type', 106);
function Controller(eventBus){
  this.eventBus = eventBus;
  addNativePreviewHandler(new Controller$lambda$0$Type(eventBus));
  scheduleFixedPeriodImpl(($clinit_SchedulerImpl() , new Controller$1(this)), 83);
  scheduleFixedPeriodImpl(new Controller$2(this), 33);
}

function lambda$0(eventBus_0, e_1){
  if (!$equals_0(e_1.nativeEvent.type, 'keydown'))
    return;
  switch (e_1.nativeEvent.keyCode | 0) {
    case 37:
      $doFire(eventBus_0, new PreviousRoundEvent);
      e_1.nativeEvent.preventDefault();
      break;
    case 39:
      $doFire(eventBus_0, new NextRoundEvent);
      e_1.nativeEvent.preventDefault();
      break;
    case 32:
      $doFire(eventBus_0, new TogglePlayModeEvent);
      e_1.nativeEvent.preventDefault();
  }
}

defineClass(124, 1, {}, Controller);
var Lde_itdesign_codebattle_visualizer_client_Controller_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'Controller', 124);
function Controller$1(this$0){
  this.this$01 = this$0;
}

defineClass(126, 1, {}, Controller$1);
_.execute = function execute_0(){
  $doFire(this.this$01.eventBus, new TickEvent);
  return true;
}
;
var Lde_itdesign_codebattle_visualizer_client_Controller$1_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'Controller/1', 126);
function Controller$2(this$0){
  this.this$01 = this$0;
}

defineClass(127, 1, {}, Controller$2);
_.execute = function execute_1(){
  $doFire(this.this$01.eventBus, new FrameEvent);
  return true;
}
;
var Lde_itdesign_codebattle_visualizer_client_Controller$2_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'Controller/2', 127);
function Controller$lambda$0$Type(eventBus_0){
  this.eventBus_0 = eventBus_0;
}

defineClass(125, 1, {36:1, 261:1}, Controller$lambda$0$Type);
var Lde_itdesign_codebattle_visualizer_client_Controller$lambda$0$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'Controller/lambda$0$Type', 125);
function de_itdesign_codebattle_visualizer_client_ClientModule_InjectorImpl(){
  this.fieldde_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector;
  $initializeEagerSingletons(this.fieldde_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector);
}

defineClass(109, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_InjectorImpl);
var Lde_itdesign_codebattle_visualizer_client_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1InjectorImpl_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'de_itdesign_codebattle_visualizer_client_ClientModule_InjectorImpl', 109);
function $getFragment_com_google_web_bindery_event_shared(this$static){
  !this$static.fieldFragment_com$google$web$bindery$event$shared && (this$static.fieldFragment_com$google$web$bindery$event$shared = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment);
  return this$static.fieldFragment_com$google$web$bindery$event$shared;
}

function $getFragment_de_itdesign_codebattle_engine_replay(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$engine$replay && (this$static.fieldFragment_de$itdesign$codebattle$engine$replay = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_0(this$static));
  return this$static.fieldFragment_de$itdesign$codebattle$engine$replay;
}

function $getFragment_de_itdesign_codebattle_visualizer_client(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_1(this$static));
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client;
}

function $getFragment_de_itdesign_codebattle_visualizer_client_html(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$html && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$html = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_2);
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$html;
}

function $getFragment_de_itdesign_codebattle_visualizer_client_resources(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$resources && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$resources = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_4);
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$resources;
}

function $getFragment_de_itdesign_codebattle_visualizer_client_rest(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$rest && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$rest = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_5);
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$rest;
}

function $getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_6(this$static));
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores;
}

function $getFragment_de_itdesign_codebattle_visualizer_client_stores_provider(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores$provider && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores$provider = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_7);
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores$provider;
}

function $getFragment_de_itdesign_codebattle_visualizer_client_util(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$util && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$util = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_8(this$static));
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$util;
}

function $getFragment_de_itdesign_codebattle_visualizer_client_view(this$static){
  !this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$view && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$view = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_9(this$static));
  return this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$view;
}

function $getFragment_elemental_gin(this$static){
  !this$static.fieldFragment_elemental$gin && (this$static.fieldFragment_elemental$gin = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_10);
  return this$static.fieldFragment_elemental$gin;
}

function $getFragment_elemental_html(this$static){
  !this$static.fieldFragment_elemental$html && (this$static.fieldFragment_elemental$html = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_11(this$static));
  return this$static.fieldFragment_elemental$html;
}

function $initializeEagerSingletons(this$static){
  $get_Key$type$de$itdesign$codebattle$visualizer$client$Controller$_annotation$$none$$((!this$static.fieldFragment_de$itdesign$codebattle$visualizer$client && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_1(this$static)) , this$static.fieldFragment_de$itdesign$codebattle$visualizer$client));
  $initializeEagerSingletons_1((!this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_6(this$static)) , this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$stores));
  $initializeEagerSingletons_0((!this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$presenter && (this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$presenter = new de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_3(this$static)) , this$static.fieldFragment_de$itdesign$codebattle$visualizer$client$presenter));
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector(){
}

defineClass(115, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector);
_.fieldFragment_com$google$web$bindery$event$shared = null;
_.fieldFragment_de$itdesign$codebattle$engine$replay = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$html = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$presenter = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$resources = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$rest = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$stores = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$stores$provider = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$util = null;
_.fieldFragment_de$itdesign$codebattle$visualizer$client$view = null;
_.fieldFragment_elemental$gin = null;
_.fieldFragment_elemental$html = null;
var Lde_itdesign_codebattle_visualizer_client_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector', 115);
function $get_Key$type$de$itdesign$codebattle$visualizer$client$Bootstrapper$_annotation$$none$$(this$static){
  var result, result0, result1, result2, result3;
  result0 = new Bootstrapper($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), ($getFragment_de_itdesign_codebattle_visualizer_client_rest(this$static.injector) , $get_Key$type$de$itdesign$codebattle$engine$replay$GameReplayReconstructorFactory$_annotation$$none$$($getFragment_de_itdesign_codebattle_engine_replay(this$static.injector))), (result1 = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$MapViewCanvas$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result1), (result2 = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$InfoBoardViewHtml$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result2), (result3 = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$ScoreBoardViewHtml$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result3), (result = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$ControlViewHtml$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result));
  return result0;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$Controller$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$Controller$_annotation$$none$$) {
    result = new Controller($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$Controller$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$Controller$_annotation$$none$$;
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_1(injector){
  this.injector = injector;
}

defineClass(81, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_1);
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$Controller$_annotation$$none$$ = null;
var Lde_itdesign_codebattle_visualizer_client_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 81);
function $clinit_FrameEvent(){
  $clinit_FrameEvent = emptyMethod;
  TYPE_0 = new Event$Type;
}

function FrameEvent(){
  $clinit_FrameEvent();
}

defineClass(138, 250, {}, FrameEvent);
_.dispatch = function dispatch_0(handler){
  handler.onFrame(this);
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lde_itdesign_codebattle_visualizer_client_events_FrameEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'FrameEvent', 138);
function $clinit_HoverEvent(){
  $clinit_HoverEvent = emptyMethod;
  TYPE_1 = new Event$Type;
}

function HoverEvent(x_0, y_0){
  $clinit_HoverEvent();
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(87, 250, {}, HoverEvent);
_.dispatch = function dispatch_1(handler){
  handler.mouseX = this.x_0;
  handler.mouseY = this.y_0;
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
_.x_0 = 0;
_.y_0 = 0;
var TYPE_1;
var Lde_itdesign_codebattle_visualizer_client_events_HoverEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'HoverEvent', 87);
function $clinit_NextRoundEvent(){
  $clinit_NextRoundEvent = emptyMethod;
  TYPE_2 = new Event$Type;
}

function NextRoundEvent(){
  $clinit_NextRoundEvent();
}

defineClass(85, 250, {}, NextRoundEvent);
_.dispatch = function dispatch_2(handler){
  $onNextRound(handler);
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_2;
}
;
var TYPE_2;
var Lde_itdesign_codebattle_visualizer_client_events_NextRoundEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'NextRoundEvent', 85);
function $clinit_PreviousRoundEvent(){
  $clinit_PreviousRoundEvent = emptyMethod;
  TYPE_3 = new Event$Type;
}

function PreviousRoundEvent(){
  $clinit_PreviousRoundEvent();
}

defineClass(86, 250, {}, PreviousRoundEvent);
_.dispatch = function dispatch_3(handler){
  $onPreviousRound(handler);
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_3;
}
;
var TYPE_3;
var Lde_itdesign_codebattle_visualizer_client_events_PreviousRoundEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'PreviousRoundEvent', 86);
function $clinit_SeekEvent(){
  $clinit_SeekEvent = emptyMethod;
  TYPE_4 = new Event$Type;
}

function SeekEvent(round_0){
  $clinit_SeekEvent();
  this.round_0 = round_0;
}

defineClass(134, 250, {}, SeekEvent);
_.dispatch = function dispatch_4(handler){
  $onSeek(handler, this);
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_4;
}
;
_.round_0 = 0;
var TYPE_4;
var Lde_itdesign_codebattle_visualizer_client_events_SeekEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'SeekEvent', 134);
function $clinit_SwitchReplayEvent(){
  $clinit_SwitchReplayEvent = emptyMethod;
  TYPE_5 = new Event$Type;
}

function SwitchReplayEvent(replay){
  $clinit_SwitchReplayEvent();
  this.replay = replay;
}

defineClass(123, 250, {}, SwitchReplayEvent);
_.dispatch = function dispatch_5(handler){
  handler.onSwitchReplay(this);
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_5;
}
;
var TYPE_5;
var Lde_itdesign_codebattle_visualizer_client_events_SwitchReplayEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'SwitchReplayEvent', 123);
function $clinit_TickEvent(){
  $clinit_TickEvent = emptyMethod;
  TYPE_6 = new Event$Type;
}

function TickEvent(){
  $clinit_TickEvent();
}

defineClass(133, 250, {}, TickEvent);
_.dispatch = function dispatch_6(handler){
  $onTick(handler);
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_6;
}
;
var TYPE_6;
var Lde_itdesign_codebattle_visualizer_client_events_TickEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'TickEvent', 133);
function $clinit_TogglePlayModeEvent(){
  $clinit_TogglePlayModeEvent = emptyMethod;
  TYPE_7 = new Event$Type;
}

function TogglePlayModeEvent(){
  $clinit_TogglePlayModeEvent();
}

defineClass(84, 250, {}, TogglePlayModeEvent);
_.dispatch = function dispatch_7(handler){
  handler.mode = handler.mode == 1?0:1;
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_7;
}
;
var TYPE_7;
var Lde_itdesign_codebattle_visualizer_client_events_TogglePlayModeEvent_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.events', 'TogglePlayModeEvent', 84);
function $setDimension(this$static, size_0){
  if (!!this$static.cachedSize && this$static.cachedSize.x_0 == size_0.x_0 && this$static.cachedSize.y_0 == size_0.y_0)
    return;
  this$static.cachedSize = size_0;
  $setWidth(this$static.canvas, round_int(size_0.x_0));
  $setHeight(this$static.canvas, round_int(size_0.y_0));
  $drawImage_1(this$static.canvas.getContext('2d'), this$static.element, 0, 0, round_int(size_0.x_0), round_int(size_0.y_0));
}

function CanvasImage(image){
  this.element = $doc.createElement('img');
  $setSrc(this.element, image.url_0.uri_0);
  this.canvas = $doc.createElement('canvas');
}

defineClass(32, 1, {32:1}, CanvasImage);
var Lde_itdesign_codebattle_visualizer_client_html_CanvasImage_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.html', 'CanvasImage', 32);
function $addRow(this$static, color_0, values){
  var cell, i, row;
  if (values.length != this$static.columns)
    throw toJs(new IllegalArgumentException_0('Expected ' + this$static.columns + ' values, but got ' + values.length + ' values.'));
  row = $doc.createElement('tr');
  row.style['backgroundColor'] = color_0;
  for (i = 0; i < this$static.columns; i++) {
    cell = $doc.createElement('td');
    cell.textContent = values[i] || '';
    row.appendChild(cell);
  }
  $appendChild(this$static.tbody, row);
}

function $clear(this$static){
  while (this$static.tbody.childNodes.length > 1) {
    $removeChild(this$static.tbody, this$static.tbody.childNodes[1]);
  }
}

function $createHeaderRow(this$static){
  var cell, header, i;
  header = $doc.createElement('tr');
  for (i = 0; i < this$static.columns; i++) {
    cell = $doc.createElement('th');
    header.appendChild(cell);
  }
  $appendChild(this$static.tbody, header);
}

function $updateHeader(this$static, headers){
  var headerRow, i;
  if (headers.length != this$static.columns)
    throw toJs(new IllegalArgumentException_0('Expected ' + this$static.columns + ' headers, but got ' + headers.length + ' headers.'));
  headerRow = this$static.tbody.childNodes[0];
  for (i = 0; i < this$static.columns; i++) {
    $setInnerText(headerRow.childNodes[i], headers[i]);
  }
}

function Table_0(columns){
  this.columns = columns;
  this.table = $doc.createElement('table');
  this.tbody = $doc.createElement('tbody');
  this.table.className = 'table';
  $appendChild(this.table, this.tbody);
  $createHeaderRow(this);
}

defineClass(91, 1, {}, Table_0);
_.columns = 0;
var Lde_itdesign_codebattle_visualizer_client_html_Table_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.html', 'Table', 91);
function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_2(){
}

defineClass(154, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_2);
var Lde_itdesign_codebattle_visualizer_client_html_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.html', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 154);
function Visualizer(){
}

defineClass(247, 1, {}, Visualizer);
_.load = function load(config){
  var bootstrapper, injector;
  config_0 = config;
  injector = new de_itdesign_codebattle_visualizer_client_ClientModule_InjectorImpl;
  bootstrapper = $get_Key$type$de$itdesign$codebattle$visualizer$client$Bootstrapper$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client(injector.fieldde_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector));
  config.replayFile != null?$initReplay(bootstrapper, config):get_10(config.replayPath, new ReplayService$1(new Bootstrapper$lambda$0$Type(bootstrapper, config)));
}
;
var Lde_itdesign_codebattle_visualizer_client_js_Visualizer_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.js', 'Visualizer', 247);
function $drawFrame(this$static){
  var base, base$iterator, baseMap, basePos, fieldType, gridPos, playerColor, x_0, y_0;
  $setFieldSize(this$static.baseMapView, $getGridSize(this$static.positionConverter));
  if (this$static.baseMapStore.baseMap === this$static.baseMapCache && this$static.baseMapStore.bases == this$static.basesCache)
    return;
  this$static.baseMapCache = this$static.baseMapStore.baseMap;
  this$static.basesCache = this$static.baseMapStore.bases;
  baseMap = this$static.baseMapStore.baseMap;
  for (x_0 = 0; x_0 < baseMap.length; x_0++) {
    for (y_0 = 0; y_0 < baseMap[0].length; y_0++) {
      fieldType = baseMap[x_0][y_0];
      gridPos = $getGridSize_0(this$static.positionConverter, x_0, y_0);
      fieldType != ($clinit_FieldType() , BASE) && $drawField(this$static.baseMapView, gridPos, fieldType);
    }
  }
  for (base$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.baseMapStore.bases)).this$01); base$iterator.hasNext;) {
    base = $next(base$iterator);
    basePos = $getGridSize_1(this$static.positionConverter, base.getValue().position_0);
    playerColor = $getPlayerColor(this$static.playerStore, base.getKey());
    $drawBaseField(this$static.baseMapView, basePos, playerColor);
  }
}

function BaseMapPresenter(baseMapStore, playerStore, sizeStore, baseMapView, positionConverter){
  this.baseMapStore = baseMapStore;
  this.playerStore = playerStore;
  this.baseMapView = baseMapView;
  this.positionConverter = positionConverter;
  $setSize(baseMapView, sizeStore.width_0, sizeStore.height_0);
}

defineClass(161, 1, {}, BaseMapPresenter);
var Lde_itdesign_codebattle_visualizer_client_presenter_BaseMapPresenter_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'BaseMapPresenter', 161);
function FramePresenter(eventBus){
  $doAdd(eventBus, ($clinit_FrameEvent() , TYPE_0), this);
}

defineClass(53, 1, $intern_24);
_.onFrame = function onFrame(event_0){
  this.drawFrame();
}
;
var Lde_itdesign_codebattle_visualizer_client_presenter_FramePresenter_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'FramePresenter', 53);
function ControlPresenter(eventBus, controlStore, replayStore, view){
  FramePresenter.call(this, eventBus);
  this.controlStore = controlStore;
  this.replayStore = replayStore;
  this.view = view;
}

defineClass(137, 53, $intern_24, ControlPresenter);
_.drawFrame = function drawFrame(){
  $setPlayMode(this.view, this.controlStore.mode);
  if (!this.replayStore.replay)
    return;
  $setAttribute(this.view.slider, 'min', ($clinit_String() , '1'));
  $setMaxSeek(this.view, $size((new AbstractMap$1(this.replayStore.replay.actions)).this$01));
  $setSeekPosition(this.view, this.replayStore.currentRound);
  $setCurrentRoundLabel(this.view, this.replayStore.currentRound - 1);
}
;
var Lde_itdesign_codebattle_visualizer_client_presenter_ControlPresenter_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'ControlPresenter', 137);
function HintString(color_0, text_0){
  this.color_0 = color_0;
  this.text_0 = text_0;
}

defineClass(35, 1, {35:1}, HintString);
var Lde_itdesign_codebattle_visualizer_client_presenter_HintString_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'HintString', 35);
function InfoBoardPresenter(eventBus, store, playerStore, view){
  FramePresenter.call(this, eventBus);
  this.store = store;
  this.playerStore = playerStore;
  this.view = view;
}

defineClass(139, 53, $intern_24, InfoBoardPresenter);
_.drawFrame = function drawFrame_0(){
  var allUnits, currentState, hiddenUnits, playerColor, playerId, playerId$iterator, playerName, rank;
  if (!this.store.replay)
    return;
  currentState = $getCurrentState(this.store);
  $clear(this.view.table);
  rank = 1;
  for (playerId$iterator = currentState.clientNames.iterator(); playerId$iterator.hasNext_0();) {
    playerId = playerId$iterator.next_1();
    playerColor = $getPlayerColor(this.playerStore, playerId);
    allUnits = $size($getStringValue(currentState.playerNameIndex, playerId).units.map_0);
    hiddenUnits = $size($getStringValue(currentState.playerNameIndex, playerId).base.hiddenUnits.map_0);
    playerName = $getPlayerName(this.playerStore, playerId);
    $addPlayer(this.view, (++rank , playerName), playerColor, allUnits, hiddenUnits, allUnits - hiddenUnits);
  }
}
;
var Lde_itdesign_codebattle_visualizer_client_presenter_InfoBoardPresenter_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'InfoBoardPresenter', 139);
function $drawActionAttack(this$static, from, to, damage, prominent, active){
  var arrowStyle, color_0, fromPos, text_0, toPos, width_0;
  color_0 = active?'#ff4136':'#a5346b';
  width_0 = prominent?3:1;
  arrowStyle = active?1:2;
  fromPos = $getGridSize_1(this$static.positionConverter, from);
  toPos = $getGridSize_1(this$static.positionConverter, to);
  $drawArrow(this$static.mapView, color_0, width_0, fromPos, toPos, arrowStyle);
  text_0 = active?($clinit_String() , 'deals ' + ('' + damage) + ' damage'):($clinit_String() , 'takes ' + ('' + damage) + ' damage');
  $add_1(this$static.hintStrings, new HintString(color_0, text_0));
}

function $drawActionsForUnit(this$static, unitId, recs, baseState, isCurrentRound){
  var attRec, attacker, damage, defender, from, mapHeight, mapWidth, moveRec, rec, rec$iterator, to, unit, width_0;
  if (!recs)
    return;
  mapWidth = this$static.store.replay.map_0.length;
  mapHeight = this$static.store.replay.map_0[0].length;
  for (rec$iterator = recs.iterator(); rec$iterator.hasNext_0();) {
    rec = rec$iterator.next_1();
    if (instanceOf(rec, 74)) {
      moveRec = rec;
      if (moveRec.unitId == unitId) {
        unit = $getUnitById(baseState, valueOf_0(unitId));
        !unit?(from = $getBaseOfPlayer(baseState, rec.client).position_0):(from = unit.position_0);
        to = $addDirection(from, moveRec.direction_0, mapWidth, mapHeight);
        width_0 = isCurrentRound?3:1;
        $drawArrow(this$static.mapView, '#ffffff', width_0, $getGridSize_1(this$static.positionConverter, from), $getGridSize_1(this$static.positionConverter, to), 0);
      }
    }
     else if (instanceOf(rec, 73) && isCurrentRound) {
      attRec = rec;
      attacker = $getUnitById(baseState, valueOf_0(attRec.unitId));
      defender = $getUnitById(baseState, valueOf_0(attRec.unitIdDefender));
      from = attacker.position_0;
      to = defender.position_0;
      damage = defender.health - attRec.newDefenderHealth;
      attRec.unitId == unitId?$drawActionAttack(this$static, from, to, damage, true, true):attRec.unitIdDefender == unitId && $drawActionAttack(this$static, from, to, damage, true, false);
    }
  }
}

function $drawHintStrings(this$static){
  var hs, hs$iterator, i, position, width_0;
  if (this$static.hintStrings.array.length == 0)
    return;
  position = new Vector2d(this$static.mouseStore.mouseX + 12, this$static.mouseStore.mouseY);
  width_0 = 0;
  for (hs$iterator = new ArrayList$1(this$static.hintStrings); hs$iterator.i < hs$iterator.this$01.array.length;) {
    hs = $next_0(hs$iterator);
    width_0 = $wnd.Math.max(width_0, $getTextWidth(this$static.mapView, hs.text_0));
  }
  $drawHintBox(this$static.mapView, position, 2 + width_0, this$static.hintStrings.array.length + 1 + this$static.hintStrings.array.length * 12);
  for (i = 0; i < this$static.hintStrings.array.length; i++) {
    hs = $get_1(this$static.hintStrings, i);
    $drawText(this$static.mapView, hs.color_0, new Vector2d(position.x_0 + 1, position.y_0 + i * 12), hs.text_0);
  }
}

function $drawHover(this$static, hoverPosition){
  var after, amount, basePosition, before, entry, lifetime, map_0, outerIter, result, result0, unit, unitId, unitId$iterator, unitIsInBase, x_0, y_0, hpString, resString;
  if (hoverPosition.x_0 < 0 || hoverPosition.y_0 < 0) {
    return;
  }
  this$static.hintStrings.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  map_0 = this$static.store.replay.map_0;
  x_0 = hoverPosition.x_0;
  y_0 = hoverPosition.y_0;
  if (map_0 == null || x_0 < 0 || y_0 < 0 || x_0 >= map_0.length || y_0 >= map_0.length)
    return;
  $drawHoverLocation(this$static.mapView, $getGridSize_0(this$static.positionConverter, x_0, y_0));
  for (unitId$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1($getCurrentState(this$static.store).unitById)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); unitId$iterator.val$outerIter2.hasNext;) {
    unitId = (entry = $next(unitId$iterator.val$outerIter2) , entry.getKey());
    unit = $getUnitById($getCurrentState(this$static.store), unitId);
    if ($equals(unit.position_0, hoverPosition)) {
      basePosition = $getBaseOfPlayer($getCurrentState(this$static.store), unit.owner).position_0;
      unitIsInBase = $equals(unit.position_0, basePosition);
      hpString = unit.health + ' / ' + $getUnitInitialHealth(this$static.store.replay.settings, unit.unitType);
      resString = unit.resourceCount + ' / ' + $getUnitMaxResources(this$static.store.replay.settings, unit.unitType);
      $add_1(this$static.hintStrings, new HintString($getPlayerColor(this$static.playerStore, unit.owner), toCamelCase($name(unit.unitType))));
      $add_1(this$static.hintStrings, new HintString('#2ecc40', '   ' + hpString));
      !unitIsInBase && $add_1(this$static.hintStrings, new HintString('#ffdc00', '   ' + resString));
      before = $getActionsBeforeCurrentState(this$static.store);
      after = $getActionsAfterCurrentState(this$static.store);
      $drawActionsForUnit(this$static, unitId.value_0, before, $getStateBefore(this$static.store), false);
      $drawActionsForUnit(this$static, unitId.value_0, after, $getCurrentState(this$static.store), true);
      if (!unitIsInBase) {
        break;
      }
    }
  }
  if ($contains_0(new AbstractMap$1($getCurrentState(this$static.store).resources), hoverPosition)) {
    amount = (result0 = $getOrCreateResourceInfoSet($getCurrentState(this$static.store), hoverPosition) , result0.amount);
    lifetime = (result = $getOrCreateResourceInfoSet($getCurrentState(this$static.store), hoverPosition) , result.lifetime);
    $add_1(this$static.hintStrings, new HintString('#ffdc00', 'Resources'));
    $add_1(this$static.hintStrings, new HintString('#ffdc00', '   ' + amount + ' available'));
    $add_1(this$static.hintStrings, new HintString('#ffdc00', '   remaining for ' + lifetime + ' rounds'));
  }
  $drawHintStrings(this$static);
}

function $drawResources(this$static){
  var entry, lastArg, outerIter, pos, pos$iterator;
  for (pos$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1($getCurrentState(this$static.store).resources)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); pos$iterator.val$outerIter2.hasNext;) {
    pos = (entry = $next(pos$iterator.val$outerIter2) , entry.getKey());
    $drawResource(this$static.mapView, (lastArg = $getGridSize_1(this$static.positionConverter, pos) , $getOrCreateResourceInfoSet($getCurrentState(this$static.store), pos) , lastArg));
  }
}

function $drawUnit(this$static, playerName, unit){
  var barHeightPx, fieldSize, greenPartSize, hp, hpSplit, maxHP, maxRes, redPart, redPartStart, res, resSplit, unitPos, yellowPartSize, yellowPartStart;
  unitPos = $getGridSize_1(this$static.positionConverter, unit.position_0);
  fieldSize = $getGridSize(this$static.positionConverter);
  $drawUnit_0(this$static.mapView, unitPos, unit.unitType, $getPlayerColor(this$static.playerStore, playerName));
  hp = unit.health;
  maxHP = $getUnitInitialHealth(this$static.store.replay.settings, unit.unitType);
  res = unit.resourceCount;
  maxRes = $getUnitMaxResources(this$static.store.replay.settings, unit.unitType);
  hpSplit = hp / maxHP;
  resSplit = res / maxRes;
  barHeightPx = $wnd.Math.max(1, toDouble_0(fromDouble_0($wnd.Math.round(0.1 * fieldSize.y_0))));
  greenPartSize = new Vector2d(fieldSize.x_0 * hpSplit, barHeightPx);
  $drawBar(this$static.mapView, unitPos, greenPartSize, '#2ecc40');
  if (hpSplit < 1) {
    redPartStart = $add(unitPos, fieldSize.x_0 * hpSplit);
    redPart = new Vector2d(fieldSize.x_0 * (1 - hpSplit), barHeightPx);
    $drawBar(this$static.mapView, redPartStart, redPart, '#ff4136');
  }
  if (resSplit > 0) {
    yellowPartStart = new Vector2d(unitPos.x_0, unitPos.y_0 + barHeightPx);
    yellowPartSize = new Vector2d(fieldSize.x_0 * resSplit, barHeightPx);
    $drawBar(this$static.mapView, yellowPartStart, yellowPartSize, '#ffdc00');
  }
}

function $drawUnits(this$static){
  var entry, outerIter, playerName, playerName$iterator, unit, unit$iterator;
  for (playerName$iterator = $getCurrentState(this$static.store).clientNames.iterator(); playerName$iterator.hasNext_0();) {
    playerName = playerName$iterator.next_1();
    for (unit$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1($getUnitsOfPlayer($getCurrentState(this$static.store), playerName).map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); unit$iterator.val$outerIter2.hasNext;) {
      unit = (entry = $next(unit$iterator.val$outerIter2) , entry.getKey());
      $equals(unit.position_0, $getBaseOfPlayer($getCurrentState(this$static.store), playerName).position_0) || $drawUnit(this$static, playerName, unit);
    }
  }
}

function MapPresenter(eventBus, store, playerStore, mouseStore, sizeStore, baseMapPresenter, mapView, positionConverter){
  FramePresenter.call(this, eventBus);
  this.store = store;
  this.playerStore = playerStore;
  this.mouseStore = mouseStore;
  this.baseMapPresenter = baseMapPresenter;
  this.mapView = mapView;
  this.positionConverter = positionConverter;
  this.hintStrings = new ArrayList;
  $setSize_0(mapView, sizeStore.width_0, sizeStore.height_0);
}

function toCamelCase(name_0){
  return toNative(($clinit_String() , name_0).substr(0, 1)).toLocaleUpperCase() + ('' + toNative(name_0.substr(1, name_0.length - 1)).toLowerCase());
}

defineClass(140, 53, $intern_24, MapPresenter);
_.drawFrame = function drawFrame_1(){
  if (!this.store.replay)
    return;
  $clear_0(this.mapView);
  $setFieldSize_0(this.mapView, $getGridSize(this.positionConverter));
  $drawFrame(this.baseMapPresenter);
  $drawBaseMap(this.mapView);
  $drawResources(this);
  $drawUnits(this);
  this.mouseStore.mouseX >= 0 && this.mouseStore.mouseY >= 0 && $drawHover(this, $convertPixelToGridCoordinates(this.positionConverter, this.mouseStore.mouseX, this.mouseStore.mouseY));
}
;
var Lde_itdesign_codebattle_visualizer_client_presenter_MapPresenter_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'MapPresenter', 140);
function ScoreBoardPresenter(eventBus, store, playerStore, view){
  FramePresenter.call(this, eventBus);
  this.store = store;
  this.playerStore = playerStore;
  this.view = view;
}

defineClass(141, 53, $intern_24, ScoreBoardPresenter);
_.drawFrame = function drawFrame_2(){
  var currentState, playerColor, playerName, rank, resources, stats, stats$iterator, statsList;
  if (!this.store.replay)
    return;
  $clear(this.view.table);
  currentState = $getCurrentState(this.store);
  rank = 1;
  statsList = $getCurrentStats(currentState);
  sort_0(statsList, new ScoreBoardPresenter$lambda$0$Type);
  for (stats$iterator = new ArrayList$1(statsList); stats$iterator.i < stats$iterator.this$01.array.length;) {
    stats = $next_0(stats$iterator);
    playerColor = $getPlayerColor(this.playerStore, stats.playerName);
    resources = stats.resourceCount;
    playerName = $getPlayerName(this.playerStore, stats.playerName);
    $addPlayer_0(this.view, rank++, playerName, playerColor, resources);
  }
}
;
var Lde_itdesign_codebattle_visualizer_client_presenter_ScoreBoardPresenter_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'ScoreBoardPresenter', 141);
function ScoreBoardPresenter$lambda$0$Type(){
}

defineClass(142, 1, {}, ScoreBoardPresenter$lambda$0$Type);
_.equals = function equals_4(other){
  return this === other;
}
;
_.compare = function compare_0(arg0, arg1){
  return arg1.resourceCount - arg0.resourceCount;
}
;
var Lde_itdesign_codebattle_visualizer_client_presenter_ScoreBoardPresenter$lambda$0$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'ScoreBoardPresenter/lambda$0$Type', 142);
function $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ControlPresenter$_annotation$$none$$(this$static){
  var result, result0;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ControlPresenter$_annotation$$none$$) {
    result0 = new ControlPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), (result = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$ControlViewHtml$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ControlPresenter$_annotation$$none$$ = result0;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ControlPresenter$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$InfoBoardPresenter$_annotation$$none$$(this$static){
  var result, result0;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$InfoBoardPresenter$_annotation$$none$$) {
    result0 = new InfoBoardPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), (result = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$InfoBoardViewHtml$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$InfoBoardPresenter$_annotation$$none$$ = result0;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$InfoBoardPresenter$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$MapPresenter$_annotation$$none$$(this$static){
  var result, result0, result1, result2;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$MapPresenter$_annotation$$none$$) {
    result0 = new MapPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$MouseStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), (result1 = new BaseMapPresenter($get_Key$type$de$itdesign$codebattle$visualizer$client$stores$BaseMapStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), (result2 = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$BaseMapViewCanvas$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result2), $get_Key$type$de$itdesign$codebattle$visualizer$client$util$PositionConverter$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_util(this$static.injector))) , result1), (result = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$MapViewCanvas$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result), $get_Key$type$de$itdesign$codebattle$visualizer$client$util$PositionConverter$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_util(this$static.injector)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$MapPresenter$_annotation$$none$$ = result0;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$MapPresenter$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ScoreBoardPresenter$_annotation$$none$$(this$static){
  var result, result0;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ScoreBoardPresenter$_annotation$$none$$) {
    result0 = new ScoreBoardPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), (result = $get_Key$type$de$itdesign$codebattle$visualizer$client$view$ScoreBoardViewHtml$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_view(this$static.injector)) , result));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ScoreBoardPresenter$_annotation$$none$$ = result0;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ScoreBoardPresenter$_annotation$$none$$;
}

function $initializeEagerSingletons_0(this$static){
  $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ControlPresenter$_annotation$$none$$(this$static);
  $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$InfoBoardPresenter$_annotation$$none$$(this$static);
  $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$MapPresenter$_annotation$$none$$(this$static);
  $get_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ScoreBoardPresenter$_annotation$$none$$(this$static);
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_3(injector){
  this.injector = injector;
}

defineClass(119, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_3);
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ControlPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$InfoBoardPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$MapPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$presenter$ScoreBoardPresenter$_annotation$$none$$ = null;
var Lde_itdesign_codebattle_visualizer_client_presenter_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.presenter', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 119);
var archer, base_0, collector_0, land, resource_0, wall, warrior, water;
function $clinit_ViewResources_default_InlineClientBundleGenerator$archerInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$archerInitializer = emptyMethod;
  archer = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,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')));
}

function $clinit_ViewResources_default_InlineClientBundleGenerator$baseInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$baseInitializer = emptyMethod;
  base_0 = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADKklEQVR42u2aa4hMYRjHz87adW2tQiJRbmml3L5I+CCXENYq2rBfNjXyQSmUFFqXJMq1EFlsif2yJZdPiNiEXPNBIYmSUIzBzPF/Os9bp2Nn7Ow57znnmXn/9Wu32Z3Z/f9nzvs+53kfyzIyMjIyikxTwYhSNb8MvAJXwKxSMz8F3AE2cx/UlYr5AeCMy7ziJVhZ7OZ7gX0dmFe8AY3Far472AWyeQIgPoB1xWa+B2gCmf+YV3wBG0BZMZjvDXYXYF7xA2wFlZLN9+NrPlugecUfsAf0lWh+MDjsw7yCnn+IX0+MRoFTAZh3h3AajJZgfgK4EJBxLxfBpDibn8Glra2Rq2BmHM0v8pS3OqG/szBO5hvAi5DMK56A+qiNJ8B6rt7sCHgLklGZ7wO2g1RE5hVfwWZQEab5IeBggNucX35ztVkdhvlxoDlG5t21whEwVKf5aaAtZsa9UK9hrA7z88GtmJtXtILJQZqv523HFgQVZNODMJ/k7cYWyE0wu6vGy8FGbk5IM+5eoNu7UjX2BDtAWqB56iE84K/qsYegtrPmq8BeTwfnPfguKIA17CHrKZ3rOvPOe5/4jNeBdkEBNHA36qjrkiAeg8X5AtiU46NTLTAA0jBwjj/N6k29zY//o+HgueeWcwH/TGoApBquXH9yCJfBwFwNzFZe+C559lDJAaj/v5bXhon5LgFKay7o38ELSA7At0wAJgATgKgAVusI4K6QAKg7FPicQVWILW+//AIrdDRAbwgJIF3IjU8hd4fXhASQ4u5VoKrkKlFCAN/4iC7wA5CTQgL4pOsAdaeQAGjQaqSOAJJW4WMuUfAo192eX82znLmduAfQxot24KLpjNcCmqFNuk6FaCc4EcMjMe+M4RydR2O0uND8Xgu4ZznDzh9560lxFZZx9eCCfGczXOenuUH7GbwDT8F1cAAsDet0uII7SNRbG89nhlR8LLecUVeaGdjCO8d+PrQ8bjmDTs3cpzvPQbbw92f5XI+222N8+kwN2m18PrEWrAJLLGe6nAaux4BBljOLGNuhyjIXCT5wIbq5KHeRcP2+kZGRkZGRkZGRkSb9BS+yU43IA9V/AAAAAElFTkSuQmCC')));
}

function $clinit_ViewResources_default_InlineClientBundleGenerator$collectorInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$collectorInitializer = emptyMethod;
  collector_0 = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD30lEQVR42u2ae2hOYRzHH5tmLjH3NlrIZRst5RIyIbFcirnlkkW51EqEJf8sNNubS3JJTIjl2pAyJK35C8XINbnEXHJZbrOFefn+Or8/1nHO877v2d4953jOtz5/sO287+97nuf5Xc4RwpcvX758+fLlS52agTYgCfQG/UAv0BW04p//l0Eng5lgK7gMHoAX4BV4Du6AC2A7WAQGg/ZeN6Q5GAEKQAWoBUHwRwL9/Bd4B8pBAEzhFeMZM2LAKLALVIYRdChDqsFNNmM0iHNz8On8RV82MHA7M2hl7AFD3RZ4IlgNbjsIPFiPcH//OpjkluWeBc6DugiD/gCugN1gPcgHB3jvvwY/Q5hyDLRWGXxPUAjeRxj4M7CF93Nb0+EWC9rxVloI9oJrnC2+gho+E+gaa/kGKNFkUBrhcqf9uxMMj+BEJ0M6glQ+WDPBWJCiKvgWYDl4GkHg38FRMJFTo2eVyEu3JszAKZ9fAgu4+vO00sDhCJb8b1DCpnleVJaedZC3b7BxntYQTnFOC5dCL9fzaXzngyGClJlA+Xy8F4PvBA6FCPAbKOZiRmZCsdcOQcqvG/kgswuqCqzktEZFyxnJ79Zyi+sZUQX2SRLQF7DCtLepOSmT/E05V46uF/XvtySB/ADrbKowak4eSdJintuDTwBHQuT2zSBeco2lfDZY/f0TkOFmA1Zx9WZ32tOh2CWM2j1gc3jS/xVxOe3Kpf9QcvcvggFhXqs7V4FWJlBHN8dtwdMd2SdJefcd5HJqde9KzHRViTwdfJac+IsdXncZd4Lma9LgZI1bgqeJynHJvi/gfe1Ecdz/W62se2CQGwzIlOR82sfdGnj9VEl9sEP1fIBy+TabO/QYjGukz5nN8z/zZ3wEU1Ua0FkY09Vo71EyepON0adBB1UG9AdvLb7UOW6GGlM9+PQ3m0CT3xxVBgy0WJrUuGRH6fOm2RhOU98UFQYkWWyBKp4ARUPUPG2wWAX073xVgxPK1W/4S1Ctf1IYY+hoKZm3gnkV0JPiMaq2wgTu8Gjc3aeJCi+rrHAQtBQaKMamYaIucp7QRH3BVS/0CdFUtsXsoI7bci0Ub9OF0iP2dF1MGCaM94XMaTEgFD75bWrlin/fLahUmRabWnTolVociPuFS8dn0dAsHr7UN4Da9CxdDLAby50SxlskWmikMEbn9Q2gdxHm62IANUN5FquA2vMEXUyguUGZxSqYKzQSVYjVJhNOCONlai1EHWGRyQB6FS9Dp1VAT5srTNVhrtBMS0zNEr18HauTAfTMgEZoNKekJ0w5QkPR06UZwpgixQlfvnz58uVcfwGqakJLqF1ypgAAAABJRU5ErkJggg==')));
}

function $clinit_ViewResources_default_InlineClientBundleGenerator$landInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$landInitializer = emptyMethod;
  land = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AQVDiUcvrsR7QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAgAElEQVR42jy7yZZs2Zae9c25ql2YmbufiLjKQkKZQEpCDYoGPIMYDAqhgcZQgwZvEI/FW/AgNJAGUirvjYjjhZntYlWTxgrSu8f9uJvZXnP9xTfl//g///f/i0P+6p6/oAhNKuvLyhffKWSg4yQiKjgctTX+LP1DcjupVLo2vCW+ju8475nChNdAJPB9+w27C5f1RlsOPs8PimUu4cpb/4lHvrO7BzShS2eXB9/ST0RJ3OsXZ9/J/eAbPxFl4t4/IRi3/I1n3ki3iGwO5xXJDiqUy0kJBzRDinLqwRQnLu7GR/7OoivSFe8T4oTcTxAj58zMheg9KDwfT+6PTxa/IpeOBejWCRKZ/EJuB/k8sCyoc3y63wgaePHf+CofiArdOi/uFS3Kn/iPLHElHSv13qhvhYutKAEVx/l5ogn0Rai9cNSNw3Y8nj/z/5C9PXmy4U2JfiK4xL1+8hp/wOH5PD4QDxe9kL9X3r9+pc6F1/WNQ5+46Cgtc4vfmONKqZm/2//9v/VB0l8d5fwrtwX8q3Lkxvv5K0VO/ORZ5AUVz7/b/28WXbn4Fx72CUURUdb5iorjuTuWsOB9ZKsP3tsvZD25vbyRNGE54M/E1jbkELJVHJ60zAQfqFrZ2h0RUBRnytKveCJTvFDsZMkrzSo5HkQLzG6maoWH4ielUMnbSV8qXTpJZ676ymf7ld/yn8Cg+Mxr+JHeO4mJJAvf8x8x7cQYIXeqFNpyok7otYMZc1motdJaJ2uB6pnjhe4NRdldpFpBBLb2YJYVFaVYZeXGVd4IPSCTsJ4XKpnkJx4fTwon2h2ue3xXaitYgWt85egbv+VfyP1EozK7K5hwL58sYQWEX8//yIU3PA5USD8E1rDQimFidNc5z4OznixypZSMnXDtL7i/+Z//+mdx8trPRlfj6l45bCPZDLHjxXONr5g1qhVe4w9EmZAmBBdJbgKD+/aFM89Rdxa/YgbP+sktfaNbo2jGa8A6XOWN7HZcCIiH/gDvA7EnXPNYBxc8s11Z7MKzf2LaCTVReuFwGzd9I5J4tC/oytPuxDjhmidzcok3JjexciPrSe4nV/9KkIR1Y7cnk19IFmmlongmFijCwz75Xn5h8SvXcMO0k8LE2Q9iXkhtAmfEaYIsSFOaFiITkyw4VZKfSTJzspPriTPHZAsHO6lPRE0UyWhTpCpcjd477/YLgnDhxpv/idlfeJQ75cx031F1KIo6xzW8AMZWH1zclckWmlWe7c5+bITJ45zy6n5gZsWViCuB2hpOlajzh/vn/+M//7mU/DqnBXWKVWhPI0ji4GDvG5VCp1PJvPkfONrG5OfxRraNVhq9dUw7e3vQtRIkETSBGGaG0ek75M+CE4dhWHYETfSt0bWPUdwy3iUe/ROyMbuVoIHUZ2qtVKkY0Kzg8NTWiCGgOIoULAt0JUjksX+x9ydOAmc7WOKFyc1MfsaZw8woPVN6pVmjn42z7qg4IjPOBZw6qhR6g+N5QhNInSyZS7jhNs+2PUl+op4VT6S5xtYfLOU6rieD5BeynViH3htiyllPJAhmnVNOFrtRWkFM6a5xtp3oI/0c781r/IFZF0w6wQdyO7HWedYHwQJ73saVXAN0WNKV3A+aa5z95Gwnq14o4aTFyjW+fGiKCZ88MitePbObkWi05eQfTv+Yv/D/mDVckCYseqXRuedPPvsHpsaVV/qjE5kJGpGmzLoy94WpzLjmiJpQ5+hLgWvFYsU9PW2v2AN6hYmVy3yD1NnlTrBIx9jyg1AjUSeadLwEtDjECzFEzDqmxlv8iQtXkIb4zjov/Lj8A6YwQwWpysXfqLXwfv6CJ+C6Zz838pmZw8wZdggQJJDKzNRnFIfDgzSuesVoUEE/HOf3QisdT2DWFbxR4wEGrnooMOeVyETvDecU55SmFe88sSUsCz9Of86r/oDVzlqvXPRKiAGjU9pJk4r3Ht8Dj+Nz6JA6c5aDfBYWWXm6L3Z/J/mIeiW4xFlOAokggVt+JTwTpRbSNhO+L+zPA/dP/sV//rN099q70bQQfCT5CYkw64pUpVLInKgqj/JFYOKwJ2c7xomo4PGkMBPdRLETK0ZqM7vcubdPprCQ7eD0B3NaiWFiek20UBAVrAotFIIPBJ/QY7yB7qpogmwnX/Udp4HJTdCFdnQiCyKep92Z/IR3kTKfiELqC0EmspzMcUFFOevBsz3Y2Qg9EvdELx28oaqc/WBiZSozMQU2exJ1omjhXX8hLQlnATcrbc60ISyIcyJNAXUOb5F6Nko88d4jHu79g2f/ondDdXyPJxBiRJwDDFXh4e9Yqrz5H/ASyXJytoNreMW7yNbuqHdgynQubPcnMUw0X8j9pNPRrKx6JYWEU4cE4fBPWsyYdLQ4emg0rR/ur/63v/x5d/fXHgtFTw73pJZKk4oE4VE/KLVQQ0EQbvLGwo3dnqx65ewHkpSFK7nsuFlx3vHon5zHwakHTTtRI9Y6Hk+zijjFBB584WelSyW7kyw7MUzkesIJlo0OuMlxdS/sfaOdDT09WQ8O/+TJB/hO1Yz1RrdGDxUtjpYLuz6oLtNqI9hMdHE8vAZVMut0pedxz1/cC2c/2OqD2jPv/IJpw5rhTJl0QUSZ1oXv/Y+IgghkOdjcF6iCQvtqaAcXPZqU4CKH7TQa6/FKz40qla09efR3mhtX4+IXWijMttDOzqN/UaUg6Jgi4rm3D+7tkygBc4ZWhxPPLb5SyLSz47Ljrh/s7kHQyFd5R3UI93m50NbC0z4/fHKRi/sDMUR+O//Is9654Nnti0ahaBnjUobNQgxnwsyC846j7BxfJ3L9BGeYBKQKc77RpTKHhU2exJbodL7sg8Wv5HKQ5RMfPdElcFDqwWv4kdxPYpiYf5g5toPvv7zTqcRrQL2gNk5fdRmnjlf3DRXHfmxEP/GwO9qE2j8oVrimG1u7EyQwkzis8xZ/IPWJsjf6pVNjHVomNJoWVAWaMIWZSWdab5h0aBBc4N7eUXVMuuBnBwjWKs0KooH0lnDF8/zTjknHfxNEFfs0dp7YrWBqWIc1XqiW2VsfH2aO9GT80v+WpDOLrFTJXP2NM59MOhN9gmNYwtVfKf2gWKZj4BrHsdG0ghqlZmZZAcO7SHcVXyIv7hv+cT5IfoUsRJupNBzKwQ6H8Af/F9z7J/t9R71y6smP8uc0GiIQp4g7Ell3VrugX57aC7FM7LLRMU7bqbkSUxgfNnCyUzi51D/Qs+F8IJSJrsa9fjLbDbxwfbuSLpHP9w/OcrCGV9pcqG28iCUsiDnOulNaIZMxMR7nnTf9CTcJ78evaFeaNkKJtNB4cicxM8uVWiuSjLQtnLLjdg+nEL8FDCMfJ2c/qL6g5scHlguTTdSa6c7RaiXKjCqcz4wLilzgNb7w+LpTn5nZX9BZOaYn1juLXbmkF7Qp78evVKuI6+z5gYXOdXrjfn6CGYdshDMQ+0ynIV3ovbOfG2XNTLIwyxWtnrpVSjzQoNjvVrC0AsCabnzU77juWeIF/2P9S1xxtNZQH1i4cZkvCOAINKskJia/0Hwnh43aCmSBh+e0B69h5ao/Yd04j4phuKj03Hj0L5x6JpmZ8krphT+V/0Dww3ZlCiKVxQLf4h9o2nj4T67uhlRh+9q5l3dIsKYLwSJrvQ71/hzuwU2OiZWoM1ObwUBFSSERe4QmiFecBIKfadp5CW9IUfCdcCacm8b3PQUXlELj8/zA4egY07KQdOb+/ORvv/8HSs28Lm/EmGi1c5FXQoh8ne849VzTjeoyFgxdQXbFVU8IHs3KeZx0E845E5+JJVzpa8UzFHzb2hCWZVjiyRakezQ4VnlFsuASJJ1Qp7jq2P+4c/QnnjB0RenUWqh+42pvPNoXH/E7lYq3hGTFqziYOhY7t3jj+Ng59oOUFtrWQRQXlexPUlso/uCL7yzLhWAeaUaWg9gmSs9oEsqz8UgPLuGFXA785NFZQYzVLSzbAsBLfEVy5ChPBDj9jtXO0TYOnmDCel3ZjztbufOahlLeyxMnnhoLq13JfkcXR6yJ8iz4yTPXFV8TXTurc2jzGMYf+/+Lt8ikiaYZf/Gs7Uq1wu43nAvssjP7lXY29nBnTRcmJlKY6dfGV3nnpi/03qlSaVJQLrgiWOnDduWTaplTdh76xevrN1x3tN54ca/cuSOPSDg8OZ2od7gtYnNnihOiAhirX0l+xrqw7XeO/UnSBSeOvWys7sKiKz0ZoQXODLoARfko30l9ZuVCijPihPf8K6fbiClxyI77p//93/ys4l77Zkj20Ix2VMLF8+SLnhoW//8POXKNL0RJmBhNOic7pkbQAF2H11yukMbYkSY4GYKtWCb3k0bFqWcJC1VOQgh479nkAWp4DWQ72e1J8JFuneQXqha88xQymh0lF8x38CAlECVRt4qo0Ch0MyQoD3mnlMLr/IZGx5pWRIWDDRNDzdHamFwpJYL3ZJdxbcTMLXR2eXLYPuLw3+NsJ45LuAFGl8bBBk6oLoOAuY6YkHRiCjPN2riTe6UeFTPDzUINhXW+4KrjcT6Z3EQvHW+R4gulZea+ogHMGet0Hb8jQQiBWiq5HaQ0DdvojYmZTse5ofhryPgYKJJxqryFH5l0/tD4zeHFIQ1OeVK1YjjEBZZlQYNw2oZUR9VKqYVZV3I7edYvAKzZsIr+wE0OTcqsC8klJEJcPX82/SWv+g0nimHMLFSrfLTfOGyjSSOVheOjENvMHFe6NEo76bUxtZlQA1UKPjnqfKIXo/mC+/Kwwbmd5JIRHGmZ0AhPPlHnfz8xTyQLap5ihcmvlJ558EkPFfvdogU3McmwsxqVNS18Cz9x9S9kOyktg8HRN76OdxQPwHEc5Dw0yJMvRCD5BE3IR+a0ETI5U4xO1ZN2VPQ98Px+UI/K0i9ocOzuwUM/aFSkKPnMhB6ZudCo7PakWydbZkozYspzf3BJr9zkBTsMKkSX8N7RrbG1O90aF/9CsZPfyh9x/9W//i9/FvQ1XCP38B1VoZwnrVX28CCExMTK8X7gvCOsDheUrT44bKfTWNsNvQdoQuuds59jLIoyxZnsTlKP1KPxsC8qmWCR49xBYLM7W31ANbQqYvL7yTdab+ipzH0m94OdJ955vvo7WQ/UO+a04F6E7DZqHalkDZkkiSgTtkNrHbkYPVQO2/mq74iMgkuKYgdMthL6xC7PobIVzrjRrTL3FQy2ficQqFLJNXOWg9JOAgHZHL12qiuIU0o/CTUQzkhKia09mHRFTLiHd/zsoYPFyjk9MIFeQJPDOQUv+OZhVyw0fHIUPfmo33n0TwQBAa0KXYlxQnT0KB7PMW3UcHL1L0hz3O0TozG5lWqFj+P9w9d6ohKYWmBqK8u8Ij8J/TTMN3I/cMEha4PW2X85KanzuvzIwpXH4w4oRU7OtPO0Oy/plbM3UOHaX2i90KRTcubm38jzTq/GN/kHnHLwYb+MTIGTdZ1IdUIOeHHfQDtf8slWHpxyUlzGNWViRkWxLvjZDfUPrOuKNKW7wFafXMMrTR+46uhfIJNjWWbWeOV5fqFfkdAiFhtbuHMv76gKh3wxuQXXHRoUulFzJhDpDVa7cpPApl+Ultn0gUzKRV44dmG+LLjgKKVQjkLvjRYaPRRqaQSJtN6Y0oqfRsK3rCtVTlqBbIXr/II5Yzs2XFf6ZGjw3Pwr9SyIwbxfcC1izTg5IBgheZIuXLjxya/4HujVEBNiSpR+EMvCD/XPcX/1r/7Rz7OfX4+2ozr8rJrjWR9j3DqPNUGTJyyBVjvvn7+x708UHSMudMQBaqzzhdkvNGsjqwbu/ZNGpdFBhK4Ny4Z0KP3kkI0lrViFmhtlOjlsaAuawxWPNB2KmwLOOPtB1446R+4HW3uAGJfpBt4okln1hVIPNtmIlwANnt83HtudJ1/Uc9zDskCOJ955JjdU9bv9RtKFzEmTxrM/2OtOChMmnSiJaIlcTpJPGEY9+sgEVCguUyjsZcdKJ7hEC5UkE7VUTjvovuGd5+Sg0Zjjik8eUyOGSGNoBlGgKe+/fbA/dnwahVB9NErPPKcPDr9DMJZ5Hg6pZY620cLIL+7lk6gT5ozaCis31PTD/bP/5Z/8fMr+urcns1uJGrAieOfxGnmWO8EHkhsed5kW1usoNnwLxCViDbbzCaakumAHSBcMI5JoVulSeQs/8qifIxLOJ601Vn/jsA0vHq+BchRCiqztQi+NchbkVHBgcdx553GiTvEaEQelF5LNRImIKQaICL02HvmLSVeiT8zLzPV6YWt30rnwNv1AWXdyHangi38bkXRu9NyJJA42tn7nGt4IRD76r7ReOerGJBNbfZBt3Ps+J7o21I8JGiwRt5nSCrYaJh1pwrPcMYFk8+gg+kGUiHVjkpWHfZDchFmnNUNMSUtiXS6c+aDlysIVmxppmfB4XBCu4QXpSjkzpRS8CzyPO847Jr/wtDuVjDSHmCHKh/eqvJ/viBOKntCgUHgNP3ANL9R+oE6JPZLt5L3/ypl3bBKu3FAT3vw3vEYsgzqluJNLuhFywlJl6SviYOeOqnALr3QdrZhJZ7aVJBPZMtfpSnBxdOzPEeuGxXGUkyNvOK+s/koKE0EDf7v9O3Z58up/JEri2R/c3Dde4zcOPTg5eI1vIJDZ2eqDsHpcGzbrVr9RLFPPRi4FLZ7JL6OejpHFTXy1T2zEoCQS2RW8evDK7JcxYntDZ4e6MRX37eB47sQYwBnP/jk6D4zJL0SfuOdP/pT/I0kmopvo2ke162+od3zm37j4F9ZwwQxMG5dvK61XUp1QhVoq9Wx0hRIq7vBMcYYoqFMyB6JwcVce5yfZV2qvTG6ma8ebA5rx4r/h1Y0iqIGq417fwSDnE2zQQo2KiGOJM9KFnSelF7KvrPaCJqN4Q5Kgu3K/77io6OmJbqKFJ4XC3K8UPdn7k+givfVhA72xbxvqHLIIdcs8XObCKwc7k16I0dOtU3T4Z9qYWJMu0ADf2Wwo3tIKuWRaLzAZu+1UhkirUkbO7pTcy4AlppMwLYQaed7vlOVAm6eXETpNceXSI6ds/G39t8yycO1vHJykGHEtctaT7A+27cEpniksWBWe/otv8Sdmt4xU0At/Ordh06SSW6ZJ4Uf3Z0Q8TSqZg1gHZXXvXzzzF8u00FyBcYpx5kk5Ik040s4UJvThQYXX+I3cTj7bB0u8EGWmSOHBJ61VvKBEZhZ34dE+OWznUl6580GVk4OdQOI7f2R1F1a90ovgm/t7H00FvuCuH0TnyfeKnzraHFOd8cvoDLpvPPt92JNzJqSI80pxmWe+k92JV881vtFPQxDW+cYXHxznjmuBPJ08/QetVWKf8Op41TdWvYCNJ/2sJ89+J5UZgA/5E911pj4TXWKVK5WCl4hvkfIo9P1kSw8MQ7onhkA5Kz4O6xmZECfs7YEenmW+oKpMfWHrD86w0zSRS0C64vC8XX8YkTmOKa9YM7IVjv4Lvn0nxECh8KJveBe4+VFE9dI55RjWrt7HFRgMAszTSmf8++Rn7BRsy3hJSGoUMhe50atxr18s68x+bizxSp52LBuv8gM1ZErPuL/4n378+Sqvr5Nf+Gy/cdYDRyCGRHxOcAjLvGLWcc0N+uUcrFuTirk+sv2w41ZYy5VeDQ1Kax2aI1wjHkW9jvu+phHXBiH5iVJG2+XFj59VpVphdpdRl2JIEXLakWvnH8a/JlgCjLOcXN0bmYPHcSe5GVEl5Inj6yRefqeOSmPVK1KEWCcQKH1wAOYaWU+0C/4ZyJbxPVFzZZ1vSBj391f/TmgT3uKoXatHxHH45whcspH8RHSRtndSmnE9MPXEXp8wddZwYXITFju9GtYbr+EH7ucHvY0QzNdAPgpdOt4PQZ6WODKE05NsQhS8eaQJ5SgjyylKfwj9YFhqL6QpcciGSaf0jC8Rq52pLyx6/XD/9H/9z352zb9KV+Z2G5QPD6QK0tzImqsjMeO8o/WKz5HeG1/1kyiJ3juHPIk2EVlYvg3PLgJnH+7iaDtrvDGXK/0T3CzDByOcfadaxRVH0gXbjFQv4yTkwSEkN+Gjp9oomrQ5aqn03nFB6R2sQKVQcyPVgX5ZMzwRJx41wT8j0cdh2xDUAvfyCQ6im4iXBLPRaXQ6vkw0n4lT4hZ/oH0aQSJ+doTo2XnwcX5Hig6ANDvcwxPChIgbKaZOqDpKzEQJRBJU5cgba7riauLMB9lvGELKE27zSNZBafnOWQ7CmVjrhSlMnMf4m053cLqDFGd8D0gS2nTQtGHZEeNESpGJFS0e60ZcI8ECXeqH++/+zX/7c7H8OuvK2m9sfWTuURL17KRpphcbT2PwWDByPgAQD0E8XgJRI5FR+ao4Si1MYWG5LOMEufF/dK20nnEt0J5Gz8Y8zWjz5K+CVg9LJ887u97RKGROzDUUwXmP4jj2HWcR1Ohq3NxQ6ZWCt4FLrevg5KQo0UecRZ75QS2FFisWOoFxigIBr4F5Hgllt5HJKwoqbPIgTpH9eOKKoxxDO8zTyiXeBg62J1wONGkjOg53NEF3Fe1Cs8oaL+jvEE2VRm/GZBdmu9Jco8q427s3kk5YNl7SG0u8UM9KPQvVKvd6x2ugSyNqxOHxLuAnz2k7yzxjvWMYW3twjW9Yhvps4DouBlpoH/5hd07Z8H50/oc+UYWkM63Bs97xyaNOASHs04h/F8NFx96e5HbixLP6G5HAXu+Q4JSNJa5s5YGPgeQTuWR4haiR/mW8f39HT1jmlXBzaDSab0QXuM0vIMb34xdKO5ll5Ww7Zz0Qp7jYqO5ERcm20bShQZjDxOfHB3veiEuE0+gC0ebRxpkDP1Ayk07Wg9oyF/fCs99pNDpGmAJ9Ns7+4BJulJaxa2cKif3T+O3X3wiTI9wcLnuqZdxV2P2DmRWNAe8C9/zJZbqRbech0HRAqEknsh30mHHVo06Y/TJ0yKnIDco5Hv7JzTj1dBqqgkwNH5RMxWQcMFXl2e+YGDFNJC+cObNy4a7fsYsRF0/ZC+9/eqdpx/3Nv/zrn03stfbKJOvvpzoOTNrHEfWul9Exn+eoKnvnjBsINGuM4DFw6s4udw52lnDBqRJkwqlHnHLPHyiO4AJTmHCT4l7s720JS6fT2MuGww1Fv41o2FlARTnck+YKt+mVh31wsNMxzITkZnZ7Dn2hClmwqRAsUHOlt0YrnZ4aPXa6NL7qB85Glp/cxNlG8hnUo+LpOh6U4CJbGYBp8jNxiizXidoKPcNymSnL8Xs72LhMV+iOehSe7UHqE0/ulFa4+heqL3zwK00aJztJZorLNBlTwJ2Rkx3vHKFM1F6x08jtwL96sg5WcG8booKIDQq57SxcaL3hY+TDfh22UI3ejRQn5nVhmiaOun34l/hGIPFef+U3+ztoxo/8GR/9NywY0SZaK3RfqXvDLkayma/8na3euU0v3PhGkMRv9nfcyydBI4dtWIe97/ww/4HFrdzPd4ocXLghWfho7zz7F252QMc3zypXYptxOdC1cvYDt7iRKUgjWUKdkO1AgMWtiI3WrtigZGsrNG18C3/Ai6MHY/vaEFdwybGVJ6WcLGElysTChVN3vm+/UFthXkYu8exPVndlcZeBkGnnNf5I6Zmjb5x9w6VIMEVFubU3znKgpXMcJ8kWljDCoaCBVVccHuuNZoUkiSaNLkPVG7+3eK6jyUCEJSzYXTnLTlgC3TU+yq/Dkkvl4l6ILvGn89/zvf+GVzew/GZj8vgr3nm+H39kciuqSqcjyfCvoGffyVvhpX9jtoXVXcktI1042TlkYz8PnnbHzVB7pWtnyTfW/MLULjz6F0d5MtkAL1d/JWoiuWlYFTPuxycu+yHUcmUvT3wPYzkkzODhSz54yoNDd8aXQIRbfEOKcN4L07nCwyOHR0QprXCx2+AJys7UVlwPo53Tje258VXeYe7stvHFB1f3huse1zypzfRmzHJBnSOSuHBj0pVuDdPOVu94cVjvlL2Q73k4gQ7FRoRcXWbzd8qU2Xky60pLGVuMtb5wfmXk9NihsDlCH5DNwgsqyn/I/89oH7twnIMdTH2CKuQwGsi7fOKcp5bKV/lgDguTjh2Dq32DAoteKVYppdKtEl3CrFOtkNuBFcOZ43E+eDyeuL/+l//o53hOr6FFprYMfp1MbZVdnzj1rP5CPjIpziNBKp26NVZ/QYOOhKuMfv1hX/xh+gtyP6m9EBibQr0M2zO5mZ3n6P1boIsRNA7W3UVCiZT7GNcOjzw8wWYkC3Z2+tR4yMfoBbTSciW1CYdj1gvalWIFp45GZWZly0+iJl7i28jpjzJWx3BUK9BtnEwxYp9wzpFl5+peCUQe9Y5ZJ7dM7YXexomOkvASx7UYKr5H9OGxk8E49pNQZ5JN1HvhMl3p1nEtUF3hw35lyVde07eBlruVR7uDgLeAt9HD9D7Ge/GZIJHQ0iil6Nz7WLdzzSOm/JT+bIhZG3X61p8DbJdA+f3v3+1BtMhk64f7L/6Hf/4zyqtMRvCB0w62/UG1Uee2XrFmBD/hNCKiBAk0V8nTwRxnXvobrbWxnSPj1H/V9zG+NbD2K/mzYM3QJANJKh6rIyyK6jk5cc6NEsXnwRG0YeVqyOPubpBuE51Kd53SC9rGLl8k0aSw2UbpBQT62RGBJg3nBm7ucFjrlJBxk/Lj9AccnlMPzmNnkQtFCr8dvzC5GcHBqeRnxYfALg9MbKBi1ZjqTLVMF0OdDpfjKmJGuA/Ra4zI1l8iVQ4qhSdjJ9K1Ma2ky3j9vZDloFnFBILz1K2RpplIhAp7e6KTsM4X0u/gx2nb0DFh4mt/p5dG9BO9Nfb9GACPL5zsrO7C3jcw+XD/zb/4r38m89pDZZ6W0T6hnLZx7d8I+8zEjLPA1r/GipYGghsCaXYjJ8j5pFB+z5bhlZ84+86jfrLYSmc0X1KUS7yiOGorpDzTpFBc5qI39vrErDHrAh0YmIwAACAASURBVB7SLVJ0J4TAmQ+cc5h0bvMbt/ZtcAqzY1lWmivs8hwEjVtIZaHtjaW80Jph2pnciFVDCKiON76fDH5BBVB8j/Ta6X6kjZoFupFswXs/VHwT5rwyuYlN7sPbI4N98BOosqwreoHd3WmlM+lCT5XoJ179j9iXME2joDLXePYvaitUCiEEbIOpLjiJqDrElOgiaZqQaGMXo8w4cXzxzqwrQRLFysD1zbHUC+4c/GV3jS6N0MPIdnr6cH/1b/7y5zVdXp9fG9vXTrMBHrgjQhF8Uo71wakbLRROt5M56Gbs9kD8WBYRc9ymF5ABKiYSxU7msP5O0Dimeeyudd/Hw6BKyw11QvWZ6MI4AbbjJdC1I34sW05x4bJc8S6gbuziVZ+hw3kc7I8DEOZ5AWXE0f9/MJIqNRzYNBZcdp486xc+eBA460anj5Mtnhf5kSTT6NfFaK3h5zAWYMQTQ/r7100xmus470ku0HolEOh0emxkO0a9O8dRZSsUMlNcaEfFaufMGZFBUqkqvTbSvuJsaItTdrLshORQLzQbHUZ0ka086G2sqnVpBEvM/TpaSRyCjOtJAz57YpjG3kJr9MM+3D/7V//s5zjF13W5IAKf+zt9N5a00JaT83cKeJ0uo5UqxtYGsFm18OhfhBChKnc+2PRB6Rkx4SFfmDZEhHZA84Xq6th96w23j41als4hB4dt5D4myRwug07qBWR43CDDrbg0AM+97uisxDliJzweD/bjicfTpWJTQ7zgIkzTRLfGZ38fNlfgtIPTdozBKDRfx9azGdnvY6E1OMpZKa2ik2Bqg0SugZozmEJijHYt3OsnWc+xD1HvoIKJcZ1eyJLJerDKjdwPypwJc+D5fPD4ePA4vhBvaPEji1grT/0khUSKM9WdfPbv9G5s+oWo8lnfcURC9AiCiOJNqVZJYVyLNXdkgaqFrCdOB3lcc/nwr+kb0SLOKed1IyQlPSaqjqWLdnpaMc524nok2UKMwzp98Cvv/UHSxC4HO3eceI52cPNvREkjs3djOdIzAMXzK5OPSnON5hqlnyOrprDqFYdnzxuByCk70SV67hwchDTu/PftF67+DSeO2S0sPxpzTrSnkfuJzR074LN/Z9XLEGaHI7oJLwGTAUZc3BX1nr/N/xZXAtI2Wiys7kKtBd/8qHQPh6gRtwmVsZ5tRWip0Vymu8aRx+Qq/fcFz26sMupiyyOm1u5/ZwwezP6Cd563n95opfL4eiJPYVkWbGr86fxbECHpMsRnL9ReSaZs9Yl2x7f4E7kU8lk45eCzv/Pn9p/wtC9K2nF4tKWx9IpyKS/kmomPhWiGL3UwADoJZzs46sE6vyAOkk1je1fA7Z4aMjILrkZyLczzBUHR5mhaeAnfWOzG4Z8cdadZZ9bAd37hLXgmfcFoZFfoFdr1xB+RdgzyeOXGIhcWf+Uzv3MvH9zW1yGiauNw7/zgfmKRK1kPZllx1ZHl5LP/RjkL18uN1VZKHUCLt4D/SmMhRTveAtoUTYIzj9NAcIEX/4a3xBFGsHKWzCrXEe1qIbmEU8WFyHk/8CFgyXjUTx7lg0u9ceONq3/lM7/zW/7jYAs10aQjCLNbWP2VX+vfIQY3fQUbD+JeN9pciDb2Htd241ttHOdJdvn3oGoh6MQSVqQaokqngXWiJmJIHH2HLnj1TLZi3VjTdTSUUdnfD86+M7uV7hpeOhx5Q6sS28KrC6zpSuknFKWUjKthkDbOCC6x9Avfv37FF4+2QHfK6/oTj/JJORrzdeWseahQ31i5DmZt32kV8MKyzBzlGJGzVVwd5G7Wk+giq1452s58XunS8C7QfcOKsPXH4AH2QukFuzSu7nVUpH3FqlFpqO/09nuYFTPOe174xn7fxjo2V87HMXoCF1HxfPP/gHv5oLZCTCtyCN3buE6y5ygbosrxPPGL583/AavGxb2iUQDhqq8Uy/gQuMgLvRjHuROTo2hmYqbmSqudogfBIlaEMHtWt9L3zl72scffApf4wuHGEignlGcjyu/sQ+pEGe2p3xPFKr/ZH5nShFRlb0/CFFn261jTnztuCxRfiHnC/c2//k9/7qG+Xpbr3y8jnGzjCa+G7NCz0V2Dh1APQwR6bVxeL+zpTo+VpoVihbAPyFLxqHdU6rj7teKSJ8XI83xwmV+YwkI/Onk7mdw87J51shxUl+naeLt848kniJGY2etGPTqtVgiw2YMYBnUjOojlHiriINaJ/jR66UgFu3s6Y++hU2FpVF+IS2Tz9xGkcCFpIvWBWm/yHKLJKilO1FoJcxxQhlYsQ9RAL8JZd2otFM2c7SDGgA8eDQMtr1o5246IIghH3mmtoF4ImoaCdyc+OpzztK2PPCSMO/3/I+pNluTKuiu9b5/2Nu4eEQAyk2SRZaKpTFUSVdREGpQ01FQNi5JZmekp8onLTKWG/58JRON+29NqsIOpASYwAOFw93vv2Xut9S2fJ0w2HI8DNzm2smCMpcbKLgtDmxhHXQxd/JWznpRaMc3SQc8xxhBjoLqKtf7dGTGaxMk7kgxXf2NnAxFkFFZ7J5oRU/QU30JjryvlaLRmCXGkUfRRkD11LLSoB5D39spRd2qreBNI7aC3ThwHxFq1KM+RIzjqJXHxF8KnLft7/hPOekB4lM/XYCxP7oWPjw+GONOGRCkJ7EQrDVcj0UU+2qbWtPGkugNbPGbTR0AKG9IN3kyYWEn5pNpKOzvWWA67MduZ3WzkXqjhU5fnM7gSBbEjrnumMpNsIg+F4AIv9i+orfFhXrHFcItfeZQ3trzwV8Pf0huY5MglMz3NfOdPej7xlXwejHIh906zHWvBXqDmppL2Gtg/fQcmWvwccN0gBu7tDVs/J4+s8bLSKzZaqj0p4rDO0GpHksX5mbkFoGP/3f/23/96cdfn2ivHsdOLBhGTHAQb2fKDi71Se2OeLuxmBdcQ00j5IPsDbwJX98x2X5EM3TfG+dM4anTRMdYZWZRAIt2Qy0GxJ2INQQLVZc0jJs0pNqtMkpY7oY90GmfeNF1jG6YbXPcEN2DFIsVgs+FkY20LV/9ESolMIvhBf86z453veOepqai/wCaCGfE5IA+DHz1mhGwSe3tonl4MY77hj4grgVRUCxi87ki6b+A7JhukCu/th74mhIGZs+1qCGmdoUyY+rmt9EZ3J3j8ERj8QJGCNVZtXO2VcZhwPeIulnZJVKNQito7LRRGP/PsvpEfetdzsxB8ZC13PuornaYX0gE2eaKdCGagmYI19t2d7cB6oeYGVp0zxqoSl+xOs5VH/6BIQQBECCZir05HQtHs/FE32i0x1pnfX3/n/rogt8Z4mZDNkGqi+8riPwioQaFR2GXB4jk/Ldfv/Y2pX5nNzCOrmUKaYWuN2bywtZUughs7R9pUYzcXmi/kTQEJJejeW1qH2qiSyL7TCGROZIQpjiAgzVA4KfHExkB6TxyLBjrjMHHkje1jI9oLJZ5kkzUD6YXKicWT9oPBDzr2Vh1Zq6n03pjalbOdZHNQKax94RafdadgDdlbCpm3+p2n/YUUT4JETDN4PKYKlYR1kb1tdN8ZXibOvGBEOPquG8hWqEejFLBj4GqfMc7wOD40GNMryd/Z2TBdV/KmW+zf/y9//6sr/lkWSzgH7GzpTtM1D+6kqputi7/+MUrYapFkoAsd8CGQj0I3Qh8aXy4/Qe+s+8KQRoYhYqLQa2eQkW/zLwpryrD0O45ANiepnwx2oKImyXpWyJ2AZ7Pq16sUtn3HREv/NEQGGTGrQ6rV9JLxWGt55Ae9QxxUEKm9qRxtAsEHtroyyRVTHbV04nUg+sh5nPx4/KbQCFH7Vbxqrn4wI0/yhdleOfqG6Q6LZTV3KgUwygEwDYMQuqflhu1KUWsZSq20oZBIOOewJSBZ7XEtVmyz9AR0PTB7E8k50ZwCIi7DjUKhS2NweoEYa5XCsmaW+8J+bFRbqKnijKfOiUM2nsYnnPeYZtmO9d3+23/8L389l/Tce6PROfqmSdmyUak8+S+kfvKRX1VYMCqa1NYJNhKd0jzOtDOFC5imv4ZG9RmHegt670gxtCT6xXkIZGi2MshIt43SE1f/xFIePPK7Ahm6YfQXeu+YbMGCJ+CcYw4z+ZE5j52cE+nz6i69cvaTWAdKLSztTuonlczsrrTeSTVTKRgxvJ8/GMMViyVIwI+GOiVCHYh20A+rJu7HO4LR3cbnVeVK4Ky73q7tzOBGPsoPctelUK1NFTwSGINvgboXTWSf+n+qZ6OlRhkzySRSP3RBhqFSCS3ySO/Yz1yhk6huZqN2uvv5gRHLNFyZLhMhOspRMMliLwYZOmfZdRR1F3IunOdB7undCQ6xesv0YyS2gR/pz8xhJtjxkw0w8qMWznYn9gHXIysfjGYkyEDrkaNvelvLkRwOjrarQ3W0TP2itBEytlgNgfYVP3hu9Su1FAYzE2Uk5cTMlafwhU7nKDv3+gOHx3TPmhZmrgxtVFOkE/oK4Rbo58mS9Up8Hl4Y7ZWrf+K3/E/c0xvP0wu1q/d+tle+hl9oprCcHxhg6CNH3XjUOyllpjEQzYBtBtMt1/aFvGWwUCiMn2AN42ac+StqUz3hZl5IkriaJ6KMbP2BL5Gai4ZswkC06gVYlwU3WWoQ1nNBOnTTuLonRq4csvHb45/oNIaubqGtLFzCDbGG7Vyw1jOGkVR3Wq96J5obIxf6WQkEQhpJJVFKI+YJHzLeBuzf/U//5lfrzXMzDQzYEqBDMCO5n6R2EL06d2d/UQ3ajiAdZz1H0R/amooTuSW6q1zNMx6lcTYKrXe2c8UWi3UaiR79hbFN7OtOHALsgq0BPOx9xaXAMGhCZvB60sehUSnpmvmXRpVC7onRzMo4ZMC7SObE2YBHiVvfpp8ZmfAmYpxRfb8dbG3FdUfNld4rwUakG6ZJ00ZFCrtsnGVn4soRVwjw4r+SV428ze0KpzD6i3r1myNIZGsPGpVo1QndLdiuvIKzHXTf1NjqHFY8qR/M7kp3XX2WJnD2g8nN3Own59BVJnul1szRV91YdtUajBGOcvwRv2+mUWPBWMGmAWOF7A/GaUayebd/+w//8lcR83zxzxiEkhLNV+bxwhxnDHqyvrdXLv6Jj/LKWh4Eo97AM5+cKRFiJHFi/ScQqe4YLPf6g+6A3jCnJZWkGcSH0HenEa5U8bPlbl8pLvPRfkAHnwNOHHQBA01UsBErGGPIPXEeiRjVdtZzVxRNCBRXaK1qcBXFwQ5+5L1+x4rlrAepnuRaaFS6VTxdcGq/9mag9swqD0QM7JCWTAdonbZZeoe2q9BSQ6KYTHWZ9/4Kp2C6rnGDHagUHnJHDLSm6aCeG857jb3ROTZNSzcae1v+yF2kdnLzL4gFa0Xf936SysGjKIFl70ocFQPeRIKJNFH6qSmG5WOFCsVpXnHkguv23T2Zr1g8rXesdbSh4U1na3eNfomw5M83AQiMpKrBTMESjoHjOBAMJSSWvjLmGXcGLuNMbVnJok5Y5g/qnDhPw3V85vQLp1TaaWgpEEYd6WIbqIfSQ401ik/Ld3LKurixAZMtvgWm+UpkonbNFDZX2eKdJ//M0C/c+zvvfGf2V/ay8yP9zlcvRDMz5xvbfSOMI+v4zlF3Qh2gnYx2wnZLq0ooY+64YAjV4/fIQ+6sXZF5pRb8CKVkdRH1jjNB0TgMlJ7JPVG7evhyL2qsHdTo4XogInSvbuhLuDKYf8F7+cHSH1CF7jqv/TdqLdzsF42G75ap3oi3yFI+GP7Z05gqpmtewYdAbw3GSgeGPOK2SCkVrMP+zf/8l7+Wnp6LO0n2oPemDpchMcuNvjcsupkyxXHpLwp37o3CSSLhXUCSEELgq/+F3hr1aLRS2WUjoSvaWjPRDgiGcZhY/BtiOx6P7Y7mCk4Co7uwvj4Y2kCPDTs6BTmZTjGJl/IzZneEMlJL5ag7yRxEBkY76m6iR+QQijnpruFqINTIhWdyVRhzq1W/TN1gumGSqxpIamXMCoyq7ROIkU6VcZmIcYBb49HfcWIpLak+L46X8BNuj7AYZAQJghhlIBxdMbExjZDhUl9otStUywRGc6G4hO0OXzU+vtQPHJ7qskK8SlF+Qg34FDFNLfiXcCVz0ltj2GZlHJoHV/NM6ZmzH0SvXzZ3NbRQMM6827/7D//Fr9EMz3OcOdMJIhQ5MRhSyax55eJvSNWwYTT6wrw4jTrvDfGCjZZUE0ascoWSZvbaUHW8KQ3o9KK7hOYKdIhMXKcnoh/0FiV6K8Xp6vfj9c7+cSoebhDqO8hpMZNQbCGbAzsDtrOXjd5Uv/fG81a/azzNTNDhZl4Y8kiyB2OYkGKQrpi6Wgs4tbqXWqhr0w+vKSsU1/HikWoQq7/feydOkSGMSDM0qRjjaKVgxbAfK30zGNHAKUXId8XjFKvqXYn6vC49c5qV2ivBREorlENNNM0VbPfc8ledBMSpJmAScYq47PFEnPEIhnV/0Cgcbcd1h7eekCO+BZovzOOVx/6BdebdjX7CNk85KvlU+5L3Xk+acmPyM6/7Dz1dugJBM2qP+sHEVQ9+e8a/WKZyg7PD0ZHTIRcQYxUTR9VUikRmf+Eou3KFEqSeKLXR2yfHrjdCtDDCz9MvvL+/ci4HQx74Ml7JclJaIUjkOX6hmMxeV05RCfloGykfTP5KqZmzHOSaMe39E9h8MA0GCcLxsdOumt+LbcQUgz0i1Ra6VHoXamksbaX7xsvwjVISuRYcjkDERc/b8sbFXeknlNIJF8+L+8r6uvPjx+/44Agh4IeImTu1GKJRsipV+Njf8MFD6Cz9jhGrj1kxRFHPY28as6cJwQbK3sixYGcljEMnpAFjjDqnnCBdOPbj8+8YrHV81B+a9TAWd94z3ggDI08XvT165/XQVgQRsBaI4HrEBE+VwuQu6hl0ifEYmfxIT8Ljx4KPlhwKOytWDEc7sM7x4r6xtA/+r/QfCRL54n7CdavmhTDSfOVIG5mTp/hFn5O+Yn3HJYPPHiuGcgqmGk576EFnj1jvCC4wmZlqEvfyykv4QkmZnE8VgVyhxcrYZ6QJJhqmKdCD7vrT/aTtFZv1hG4RTr/z6CcXd2Nj4bX9TnDxcya3GiFphcEPdDof9TvjdcIbR7eNp7+4wl4U82IqJWZq7aR8KozDWFpriG84sSx14ZCNX4a/pobCPx3/JyOzTlkSEGMoPbHFxNSvnPnEXgOy6L9zpp1eOwwdWmc7F4VFRcshC8/uC0u+c3XPutT7d//wP/xa3PHcoxLCy6KBCYvD4EgtfVqxFA1/b680KRgEUy3NVAIRqYZk1LCQjSpsxhhOszMHVdgGmVVwqRtOPNY4qqls/c51vOGMpZhE7oXYR3I9SO1kLQ/VE/yICw4XdP53bSCaUXN9Q9RFkWZVP/cGliaFECP+E1j16O9gG7EPnOyICFO/YkQouerm7MWQemJ3C9jOHC7c3BdGrwnqLa//Pynt0zr+NL4gVskk3geC1dTPWu98lFemeGE0IyMTsQ34NtCqwq+xEKIuyIP3eKNCjTSwWAZ3Ua9mEDYezOHC2XdcsAQGpjhTayU/CiaCiKJ6k1cKyeQuPIUXTg62ulJpeBeovb67XBMuBPJeICqUyGyGGhNnVwjTR3uF0/ASvvJivuGNZ6kfrO2OWAUtmWJInITJUQpkTurZMcVj8BxmUb+81dHyRfR55n1kBVLTeFbtjd4arReOttGoDGbS7R+eQzbowpEObAl0p86iwWie8cfjd/yknv+BC33oHLIy5AsyqvliMAO1KNK+uMSSPqBADAO1ZLa8Kc627ki3HLJT5TtP8YWrfeKjvjK6SXf22dKkfkbWNo62YZIltR/44JnkwmkOjBGSOT5zi4mNVT0MYcV484c3oc+dud9Y8oMYB7wLDOekETNRZG7uSa92e+jkdnZ9r3xjrxvP4RuhDDzyzjU+0aVSpeAlsLeNW3jmIlcyFft3//Cvf7WLe24r+ubXjhGLTJ3DrWyyajVM6vgecN1hxHIk5f313mimaTCzZrBCMCPShfNQC9c8XhjNhBShkMn95GqfWcuDe33Doc/9+/5OL0KIgb0vuO6w4rDNIx22tKjw0TP1aOSakAZuifRkVfM/OvESFHotmaNtZLLO5WIVGO10C1fIkDXLb7rlTCezu+Gco5yZMx9EFxVMJbp0yiVjiiG6gaOt2GZptbG2B2dWMWrrD8TC4EY9q5RRxzNr6TTMw9F2ZQvmnDH7oBTxw+B9IMlBa6qIJtlhMwwy4MThbaBQeS1aaEHvOPHUrTP4gehGWu+URyOayMnBvb4rh6gVBOEpPNNqIzT3bv+r/+Nf/xpMfI7XQHYn0i296MaK0Lj4Z6Z0pSXBXQ02CHvfWNMd2xzRDopie/BpXzYY4xj9pJalsXCycm3P2KLE7GCiwiPPwkd/1a0VF4Z9pqWG9VZhRjkTaiTmgWu8kc6E8ZbiC91XwjTQayeEwDEsyto9PD4OSuuwFls8KWVCjExxxDrD2u5sTc2rrnts0cPcMMy4NqhF3Aom6oXw5L8wy8zaFs56cuEJJ45HviNisFXDGu3Rufgb1RdyOz6XXJ1LuzHIAGLwIZJr4gwb1VWe6he6bZxsn2tCwU8eqahLuXukWdSX1/Q97ZVuOrUXCpkun6KYGRnMRDCBdJ6c0844D/xF+Bu8CTzaB944vAmseWHd13f79//+v/61uPwszrCXjWkcFGkqKqJEN5LKgZxCTidW9MB1iRdSTbSzE7eRWivJnjzqK8keCkHsBRE96EgTSkmcn8whkxyxTUr5rhu1Z2XWeIc79Tk4h6uyB9JOTZl7fcc4AxXOcmgXkenMlytbfZDsjphGa5VkD3xXd0x6L0iD6htucKqkdcg1Mdcn3OmprVFSZk962v9nD352J65pVj+VxCoPDZ4WQ2Qkp5M1PzD6KegXUiKDm9QYuitmfmfTRyAz27HgnAZSffT0a+XOG87o7Xyzd3wITO6qh8cF7CSYwbK3laXfqV13JsMxY3aLZ9D3ip0gep5oodBbwxblAry17+pRLI3aCkXKu4tuYG8rKx9Y55jiTJZCaSff+EvOvOshKgbWbeHx20IxJ+ZLI5SoIYopc9aVaEe8eSaOkVYruWX2vnLlmQ/eqFKZ7U2R+sYySKQULY0aw0h+VOpQPwOMhdNmGqLyLg7vgwpGVW/Nk73waHce9Y3p86Dkp4Ccli5R53lTiDePqY7tx8JJgedO9AOyGVYe+Oiw/vMD6YHeK1vbtZiqzxQyr/07X+RncJ1KZeoTrjvutqrHf9eswxwv5Hqyy4qXACGx7ncEwXtHo2goBasshWgY5MppT+IYuIxPPLroWQdwgycWx3pfcY9IvM1cLjf2fWO5L5qtGBK/yXciAxd/Y+dByRWKYYpXiiR8iTybryQOvpgXTHO8m9+x//J//4tfBZ5z/zwcNV3xdjrRj+R+YETpVzYYhqtT69HRmfxMng6laUjnGp41w3ZmzakX2PrKW/2N2V3xJvDa/0xuibOd+K6iTLIH9ZNhv5YHe1gIWUOl/VCtwFx0GdOB2gonJ80WJjvzkdT5Ik1Nmas8MNZiRa/U4EbiJTKMAzmdbMdKK41xHGFuFJMxBp7DN5wJtNaV4Cnw0b/Tu5Y13fu7ppj6qcj2blj6g8GrRazkSp4OBKF3SPXE7QEMMHdyT9CFta1YqwUPa71zsBF6oEnXBREHl/BEo5Naxk+eKV7IW2HbF/ayMjBQTeWYHiDCJVyZ4pVOZ0kP/CfvUPe1B0kS3nj2vpHbocEdOd/dI73T6Ex25rAHa1+YeeLqn2imcdSdwU50q+rZ2h+0uSEB7QhqopyarbLtGuGigh8DQxgxwI7D2c9atOK0hMJoyOIwGxZDzpk2LFzyBesVDrm8PwgxsJmdNd/xJqiFylkmufBevvPeX0n1ZPIXRAy1VUY7g4Ul3XESuURPlUwyB3wtTOeIZItYQ0sdUz1HSzzCHb8NNN8wUYspuiiB88m9kJu2j4FwknDuxDaNuPWQcNWTa8Yagyz6RTXVsbsNj9baHOxc5YW9ruxmIZeEw/HkvtBbpYvyfXPLvJ6/MfsnuhnopjH9paeelnPt2n0wOFLWmhsAmzU+1x1IEe68kdzOt/Aza1v5KB9UGonEZG50ATfKlVYqP8d/QSKxtQURyKKxqLPuhD5wpoPJz2rJqpUv/hsAa38w+yvVFSZ7IfvPChnRscYPA75HfI4Ya7j4J3rXqrU/1f+Et56pXf5I2AYTMVk7AKPMpL4h3mCT52E+uFxnZnMhMkHvfD/+xNU8I1UPSsZqyNKJZW+GZHZqH6i1steNR33nap6JQ8R1x5N/YZE7277jUlBS2WSxp6dL48ozxWRs8VzMk5I97MBv7f/hvf0glEGXXW7nFp65dnXrtKYQKX/19H3ifvwgmZNnc9WxNnpe0+/sZePJvrDXDdMc0TuezDcwnbt5xRmLq54HHxTRWNvl8oyXwK29MLSJngz9UJUUd2hFHJZxGJiMUlt9d1ztE04Gzq7j7cCI/c/+8a9/tc0938YnKlkTqE1Y+11HpOp0QXNmxHQQwyCzLlh8wCD0Vdi3zxSKsYQ8asPYomNHNqeaO2NkMwt9g9lccN4x96vu19GfVXuldXRM8Rri7BbksLr1k4Ej7+oRYOYsJ1f7hLHCxT3rnl7gTAel6lVvk1eRxA6M9YK3Xm/LIuSaKaXiqkdsZ3crt/CC2x1pL8xyoe8d3wdOt1NKYegTLqh/IJqoaJpuNGjSPO3USaaQKRQmUXxtlFF3GGYlmpGeFTn7k/tLRrnoiOiMOoFNZW87Lgf1PrqkglYfeArPmpa2jZ1NXcb2Qp8LEoW5XVm3BQSGc0ZOyyxP+n9Omi9c0gcuuHfnJSgUYiv82L4zxytP4wtDnlk+FobrBTFdn9kyUPtO7APp3HUXIPqihynQW8W8DySTMfakZfCXiJ0MGqWLsgAAIABJREFUaU+8b6/kVonN0wXGNmsFqnwgaFBUItgglBVq68Q20wrsZWMeZgY3YbrGyI99x1SLvwSOuvFxvDL2C6UVzpIxznN1kaNuTIMmZ8kVI8Jm78zmRjpOZBGOejDViSndSI9O6Fa3iViqLRzDQhPN9qcl4XzgZr4gY2fvG610itNAZj/0i/U0fqHXzv7QWd4PA4yN2jLnedIrhKDYtrUu+NHju+dIB/vWMV17Fmww+kWsAsaw5R1PwGIIZ6TtQjKJujekRdoo+DNqrpGTHlDQREvY5rjxwkWekNxxxomWGPTEZC8aAc+N5/YVWw39UZHRIs6wpRUaWoYY5dP8MSr9I1h89xod93yWTnXM4ehzY7gMGv9+7Ap9vBi88azrxn17U5eRB8mG/TwY/VVlZgsjEyZY8rhrluC84Irnu/xZsfKlK2nTrRhnmdqEfIheidFgJLMsdxDBNMtorqzlThsb5mYocyZ2ByvEQUe//ZGQw9GuhsFr4tiI1S/8iyFYx1l3jn6oglkarji2rtGy6CaaAXGN8XnAeDic9hhJNbzV7+ScGOULuz34KG+8lK+YaJnMlT1vPF+/8Ca/qZAmnZoaowyIg8MeGBMp80mdGu6MXNKVhQcbBec8iCN6q1OJWaEKBs/Zd2KIZFtxTjylF154IfSBLCdBlPEjzxZX9Zt2Ha8YZ1jOBx/bKzlo961vardyxmO7Jc8HzgbojTh7OBQvu7eVL+EnspzYqmXJMhvC5Pk6/sRZDtrZCT2Cbdz5Qe6JZ/tVW0KdJoKdD5x1Q6rBBUMxGRFhri9YFjWrtAKDXjVtb1zjTU2YVTiOna1Dtkm7ipvguteTfhTCGDjTrs/96DlM4XAPnuNPGrXa9PFT54YbA7FCK4UWGyENhKapm1M2pClBPdioOHxZtOiyaAl1H+9Uk7AmMBnNXCzHBzd5wYxCOk7GMBPiQOknnUZCbWSnPYg+auGWWAg6AhsjHGmluUAsE4v54Da8cPFPvP94gyZ0V5FoVIsIViFQe31gutVGSxM5y0lNhToVpWz1TCwjIU0YA8nvnPVQ1YuutA6fqFWpV854PSNYh0EUupTu1FCYpwv1o/H2pw9yODHXphVuOeEmS3GZyY4UPCKdo6xc3YvWoDaNmfXSubpn7u1NkbLmQmorzgSdsQv0AbrpZKt08d6g9UItDmstV3fjkT442qrSqPVqFDGVaZoJU6Q3gV5JbSe4gfDF0vbG+5/elRP4HHHOU45G6idtyux903xjeMKIZckfrOmhbABJbHXDu8AUZlqrPMmVvVuSHLzEbxzH/hmYiVSsrrutp4w7aT2QqlpLMjtedGl29oPdaPfS5C+fjxbRJvb2BtJpY2I4I+dbYbUbcm3Yv/lff/61tvp85INotRGUglqmiyV5NRXUo5JTxiSj/b0DpH5oeXNRE2R3yvE/2kbskVTVulx6xhrHct4REZxVEnecPLkflL0Q48AxLoqf7bpSpSr6fGkPbHKkcnLnTfcPkvlR/sTeNmXkNEORxFZXkjnwaeDMO9VlTPEKt9o653lirqLgyt5Y0qKxbWuY5cp2LBgj1FooVN7rdzCiPUZZA6Y2WsL4uW5dDyQb/Kg1NkW0nfNp+IrDceZd/5443vsPaCq9L3xwysGjvNOaZhU3Fpyz9AzbdnCMi9bWVoEktL1TbaEMib0tWoPTNpDOZK/s5aEqYdGzRHX6b3oXFBXTDuJlIPqB/XFwf7+/u6t7RopXR2m3DG7WIoR2EAbPZNX6/f54h9Yxc9c8+npoQ0e8aVAhFf60/ye2vvA1/KIJmpqZ5crkZmppmOx4mb7inOVI+kVpl4LzSil37RutdGpunEfG54jrQRchw4U9r3Sj+YHRTOSetPvHjtpMXjuhjmqMmAL19ExuYj8O0uNgGEcOq33EJmq0+tJvuOZZ+wff5c/kUrhGnYhij9z8Fy2YKprLG8wTLTVEOvzcOJekXYQuYbKHYigtKSMgGYIfCG3EYigkjFeqYqmZva14E9XzKnpHooL1htv2hPROtAPbx0Zt+bO+OxEk0FCI58U9k8qJ1IVUEjGOjGH6xN40jHF4GXgtiomb3Ew1mS+/PGM/BPuv/v3f/hrb+IxrbGXF24BLmprJkpBiFBHv0Eyc2wl9ZGch2pEYlHsbJHB+tn98C78wmJmj7Xino13thbXciUykrCLMej50Lo83nHFkkxAvnCXppOF2whQJEjnup4ZDioUuGBxjmBhkQkT4c/q/1RouE7llmqsMWfPxa39oE4lPyuWXpq4Y6xmMZvbFCGtaGLpW0ShypWhDuFiWcqd0xc5YY1nrwj2/qyPoE+0+uglBCHnGGc8hKy1U5FSBzJmAaQZJogGToDH4LCdLuwOdmrVXabYXRjPT6JSHIu/73En9ZDN3zSvamdlc6dL5SG+qPPqRUispHVhrmMNFH9E9aRwM4SO/855/kDjeXaiBlhtzvDLYGZHO0pbPnlnBYJBqMFX+sF+bpPOudY7D7Lieqd3jCDzXnxSGROXmrlDVZFlF4Uh7WxADtersqjy+gjhDrBPL466g5GipoVCORvAD7mx0sXTTMZvDXixHW2g73MYnBjspDqVmbduWgaNv+BLxjPihaoQcx3HuPNmfiDLwQ/7MzsZoJwYGrv4GRnjiCwcrvTbOtmO7wzTL3leKPTBYvvhvtKK2LW+ihlFzZWwjpywYa3mxv7D1O9u6MQ8TNYuaRWymro3RX/Cjbk9HMwNCMUUJ31mJp2YEcwo0z1P/yqMYBjfw4E2LNO2NxX1gxXMxivR/L6/auL4V3Ww2FeSWdP8j19F8xfViPnVzGMzIUQ9tu+xWFS6jUGiXA6MNCo4wIK7Tp8xP/hda6aro5cLVP6ubJj8Y5QquE2pkW3fMRai2QFePfj06Yxu0JDIoEm0cRnUStw171/ZsvV0rBYOpkdLJIu/aEtoMx7nje8DHyGbeELru4aMn9Ig5hOAn9QGcmb2stFCIwfPCN5o0/T1Tsd79cbX76JV+skGxhegNa10Y7YjF44tOSMVktZEXjW7VlgjbQEmNNSgx1YtHIhSnnP4mldAjtRSmdMW3ga09SJ89AYdZGcJIPxoN4Wn6CnS2Y2WwI9EoUfTsB7Uo2XyIjiInHzX/MZWd5SCTmN2FvWwkexCMJzQN7dj//H/8219DdM9+drRQedR3cjuxEvRKXrpq6j1RWlWLt51w3pFtwnRDy53ctQw5+oFcM+dn8eNeVky19Nzx3YFXbl9rDZcig41kOcmSaLaxtAerUYFlGAfMrbO7h2bsWqCHzjROzO6m/Lsm9FkXSHtfuecfZCk4q/x8c3qcGz6r2A+MFcQalvBOsIGh63buvX8n2gEvgwIVTdYoegPZlJTSQlOfQkvYZnHZE0MklYwPmklY/R0ZwbWgwIsxaV1WUYe08aKP2R5U5w98upoKr/l3DtQF1XtX3L0I0Y94OyIWjAhn3Elh46v7SbnNcpD6wWSuHGx8lFcGO2MlMJYLaU0QOske7HXRgunSmfvl3f43//hvf7XZPdcNzpoIo/bUHssBtZPcyeYf3O0PJCi2TYyWRYpVz/uRdt002Z1kT6Z2xfdIM4UR1cWHOKm0WjMuKLfuI79xlJXNLRxtVwp261zNk3YPhKixrL4So9f6GrezmHesdezbSiienjuDmxnDxDU86Xx/OIZj5uRg9w8e/KCYxGl27Q2wgdEpcaPXzoqyAFxWrHx252eFfEa8cHFXfI5c7BMXf+UoO+d5IE14bd8haMVe/3wkOOe5XK/sbSM4D72TRGXiyV61eOqxq4rpBT9+Fmt3iG1iTjfaqb2JJWXW+kENJyIGg1GQBVellTVlCnjxtKqtb2feddll9fBYU2X0Mxd3w4ojbBFp5t3Va2HqF/Kj8PH+Rl0zk59wwcDQcN0wyIUv/is02NrKPb1/cnBOtpaprTHYCRMEVwL0imv209A4seeddBTkKtCh0qilE0SjXwqiqkSiBjOt1qBLRSPR1hLNiFjDKQsv9mfOcjBMA4MZ2T8OXv/fN8QJ4YslJA2MnMPKEVZmd2PoF6IZWModg6e2kyU//iCF3/wLx7krCUwsvQ1KNC+OcnSYDFXUixcJGOMo7SDXgoyd0Y3sx44xn/78Kmx5pbbCdfwJGYWl3HHZsbcFNzpmmSh7Yf9TZnE705dR7XH3TvONc1pJLX0moCYqsLeKqZaZG0dVw6wRy+xuiMBgZvZzo/hMDBGzW2zwDHUkZ819IJVsMlIE+9/+h//u18jwPIwBPzntr8dhR0MtlZqLJlWyotpyTVrv0gKP8gGtcwvPPHhTnT13MHDpeiX2Tygkm8GOgk8D5jTkdCCnpUnHDZbaG8e+65xrCoOdyDl/EjoHXeLYrsjVrt7/WLUOLlwcl4vyjOW0zP6KTI1TdnrTtK4n0o7GeehV9OCdVJVOmnvhnt+UAi4rsWgRdnMNqkEOy+4Wrbg5Z3prmEeA3DFPRn2OZyXXhBGHr8oGWuqHWrqz0lfv5UPhzbaS9oIzkfE6MbuLwi7T8odz2kzQK8zuymW8Yaph2zaFXItn2e/qXLLKUiy1sOcdU4Umjc09cE3xdrUp/EOqBd/wdaAv0Ex7d9FqqPPMO2t60GLlq/lFb5M9sOeNthm6NTQRpttVubbG8lS/KPQZz9U88zQ4ci5IR7dhfcQ3R/In02ViMCPddz4eG8Y63Oi0xHHbMd0xmJHZPFP8yXv+QW2VZ/vt03tfucqNp+GFoxz00pnCRX9WSxx2ob8UYpkx1XApz4ztoifzrSI4THeM7spgRvxgtVKtdULRKwQjWGeIbqKWjssKYA4x4jCMw0DaCsf7QYieaio1Z4xTT340I7YG3s8PeqnIgBZB5kZphSf7heAGfuR/YgozgxnoWZc708uILULwQXuFU6EdndMk/DDg0sCMUbppNUizmGKZpol3flBKpndF3Q5uwDuPFKtO7yMo/TU71vsCdqf2TmoH7th3kj0YwkSx+ZOJI+RPYuded+b2RJkOxbsNN/Jd153eB3JKYA0uenoTxjaT7c7DvBFjpHdL6ic2OFxVyDTXRj4L+M4tvPCjHzpDT10TtXYgtoEUTmIM9K5qoHgoJVFLorXK0VZyP/XgWbISMOYv0JoSTCVixDLmC6db8XFW9M2WaLYTZNSYlctMcca2QJPC78c/IUV4sl9YzZ0yR+Z2o+TCEVakONKYtDoG1TpmfyUwMLoLdThZjjuTuVB7oxn9kEc7YwWoIAjlLFhv+TCvPOobz9M3DELuldvwhA+eY0sYDH2oSg/fwQ7CGEecOOUpuCt4XWw96hu9w8wFUzt723kOX3A+qG5yF7JU3M3iiscdTtHttWv7ZpfG1hai02KmtleKSfSq9qyUG5IMrTRsMBwmY63jbAnTRYMWTuf7apXj500k9YPYR+pZceIZBx3xTnakGqy3LPWDLCe+RHXbWotDq1SvTqvQTlaySzjj2UWz914cV/vMYCbOfuDFExioj0Y+K8SVxM7YbjgRctnwTTG1Jyc+eM76IOzCZbpgB6s83poQEXBQckaK1Vv86BUG4ywtNWhCjpl7f+NZvtF609Zxd9GyKmtordFq0wr6z71/NStBgo51btDC6qYm0iU/SHvC9/jHY/E5fmU/V3LOeDy1VaKfOdzKnh58MT/ray0Zi6OFBtJ0dC9CkYK/OnpS0PfQJ1ylMJmZfJ5I0dZLaUGrUmKjvWQyO2EfqbWR+oG3ASmO5viki3dKTlg8IlqQJGIUpypgP7l4mzzorhOZmLjh2k4yJ5uFOp784v+KXLIGKaowmoml3rnXN342f60mvWpJWyFcddOWWyK2gV7++c+/a9O20+auygLS8PfAw3/gvFMV7DMplMvCa3vDiGiZ5Z6VPRQDh9zJkjjSymwrs73CDt1B6AM9KdrFRBjjRCiBbipH3j5LHRXU2FsjyKggDQV50gclmzv7pFCNLLTa/qjSq6eml1M/mO9XWjHs00k5C+INbSratmYzVoyeEc4VFxyjzGxtYTF3DFp4NTvDuSWaiVzDjSaVx/HAXXhGCpSz4YtHrLC1laEMZJPYuiJIdr9ye3lmKw9M6fS9krYOA1jveEk/sT42eGrUIVOp7GklEPEMxDJS7k1R6g6Wdsc4wUXPZC4kdpbjg9gmilW/u2/qjfMMaps+vOJbmyFtGTPpAae3TkiRYANSLV1AvOEub7SonQHWeXqsfBxvxHIhHIXiEpNcmeyVbd1p0iAYnLe81x+8pt/xLmh8K4kyDmXCZMXLDXGALjysqpSuahHkR/7BT/GvKDWz5QVTLEU6N/NE3ssnwdtgzME9fzC2CZ8HLuHCWhdlNFpLu6rNzi4OGwrn8CDXiquR2g5GP2Kt9iH5c4QBhVz1g31Xe3u2jaMdyii0WsppxCFNmP0V+2/+8V/96p1/phrSfqix0hQ8kZNNqZP2SjV6Va31oTvseMVisM5jnaZjcj1J+cTuEWcCMQbdm99X3BkQgRIyp11pLlNbZrN3fWODrpnPtOnz0WRcDTy3bwwy001T02PbsZPl0m9EUUu5s57X83dIKFxJukbXW2GqM9lkhmFUU4VkpnGkiYKqS8sqkGwFV7y6aoJW1XyNP2tieVNy6MHOwc5ZN6wTJXu0Bv8fUe/WY1m2pmc94zxPa8WKzKzau7Vtyy26sWyBukEIcZDMHRItEG1hLOCOf5A/GWG3u/auzIx1modx5uJbu7iom1QpKypixZxjfN/7Pk8H5UBXjWmy0+hUPCNDnVFdRNYGGfz4Koc/7z1v7h2aIh5yA/qo3xi0vCp981g82mjcIInqEDyma7oRNV1wIy01+l3Ud8M4orz0No++02hc0k+MZaI2eR086ofkFHq4mr/5+7/9mvpxcVH6+XrU0rFvmbU8BexkLc5Y1vLAEcTf5wxbFcevqYoUM272GG8psfC4P3jGOw6P6548HuA7VhvOwzuhhxdQWtayh9oEAdc2vB6ktqW6rKLJ8r7TYiqPWShbTTeyFl2KiZbSC3oUkokxhnRIfU0bLd1DnVHKMIRR8oCIObQ2YQsOYWR7bKxXUcxnfUCE0gtMjag3um34ENBas/UVlyU803TnXq90FIMTEfbEjKli+JrcAkDb1av51DjU/hu7P6ckxlFVMVpTeyH3jLaC5YtNXA5LODGMoySUjGjkum7YILSx58dKXBPGyh7nuApvLs07T32j+yLrYFaqqVfzX/3df/k17sdFqNXyDay9SI68Da/2qmjP7/XK2VywzcoXinTknvmGUVYawHZkOokFo8SKU555ntnbzlFXTLMMaqKujdwTrnpZgNjEyMRgJ7b6oNYs07naOfk3Ihu1N1mFHg2zKOZ8psZGjpkhTeRwSAG0iRunNvmQTHrhKBujn5ianMyVkhBnNgdH2hjNTAijlDPmmRYrtnq+zD+RwsHeN2Z1YvavJvEuOw3THPf+Q4DRVsKfsQh4qvTCxMxVfaNRMUrSzYfaMcbgyyB4t/0ksfhTI6hAbAcrD2iSi9BotvZk5kyroqQ9yiqROcTX1H1nnEbmQQZB+7qzmDecN+iThHCDDtJS7jO3/J3S8tX81f/6l197VBc1dboSC8jeV2Z34s194hTe2PvKI13pCDS6d0VsB3M4MdqJvbwSLuZEp3IrP7jXD3CdYEZqzZzVBVcHSaU2I6AkPzGomWHwKK2wxtBaYW9PJncSzo7VclPoWirlznDSZwY/iuPgFoW/47IgWfVKIhL0wJsRrf1aHkIMs+IJeJQ7ysDZXUgtkTiY/CKRNjIZWUB541AGpnaS18tRxfNzCNzKWMtkFrwbGNxIcGIu1V28SJnEaBdxGil5qg16xFrHObzRNojbhnKd0jNPc2PrK0rJZlAZzVYfbEUA0+dwQRvhKQxmRGnDfzz+Hya3vDQ1nag39CCgrsFOBBcoJXPEA7ISUOVWcMYz2+VqbZAWUKzCkCm1ymm+aa7qGwMjNEXSkZ/9H2SPbT376wv9yL+y8YSkufUPCELjbF1WzLpCprGzykxBX9jtE+MNi/+J7WMVgrZWxJ6Z3MJkhU/gWuAwK3t9MOszLgVWnlRfsLvn0Ctq0uQj4sPIqb7zo/6R0S40U2VpgyNpaS/1Cs2I88ibQOmZ/tLE7mmVsKQaeeYH3VVme+Jgl3e9rtjuGdXC4Vf84KlH47Hf0UG/VDiGqjo4zZf+e57c+Zb/Uchd6gu3dkV5zSl+4igHcdhJd9HwuC6dvW4bgx0ZmDDG851f2NOdT/Znnk3QL432AklJWEehpEjrPB/lO7Ee/Bz+QGmJZgtDl8awLYGuCiporAuUtWLz2jiHN87mM2u6wa4Y/fxSuzW2Kpsp3Q2jnljrg4DnXC9iGCsbvQK6cbffmMwkjHt9gSpWUGc8fh8wD09Uh6DaN8e+RLnaJTCT5mgSpypN4mhTWxj8iGegV3i2G4QOVE7WY6I8OT4NP5N6hg0u/if2uvKod0qrOOdRTuQXg5Gdw6jfhNVfxf83qM69yG5dGdHL6JeTMJhAK436kMRyCx1rPUSL7Z1ji2ivaKrSq/QXb+U7IY68T184mwtKadZ6p1EFUNW2F1PYMI6DnLO05Zw/0VsX9Z3L7G0TIFT3BO/RVqPbSO2VmHa0Ehg1RWLfEWEkzuqM0pCdAL/350E5Cl6NqOCouvGmvpBrxKpRoZQBC4t+Y287adiZholTu7DXjWe781Y/0yvc0g+SypzMhZN+pz3lcVcuiVYbKhspk9SAMZpVPck2gVfU94TDoJ6eTGHvd0wLmDYwh0kyb7z4ftUQVWJWE1UVsX26iK4GVQ3ViERCYwhmoPeVpjttyMzDxGf1hRQTD/NBjYWL+0Jrjcf+4H0IUjaJhpwyy+c3jryhiyKZA5UMYz/JaFjJbMOFzmZWbDWYhyW7+rKMKYyTg2prhdQiIU0yHIpZghjBiHOxTZRc2MOD0CfqCsvwxqmLiOIoG4TGEC4YLQaydZdwTrON535nVm8Cr0iZPUeUF5HHpu988p8pqWKKaGmssVAGJmZs9cI8umpKazz9jioVa4sVfWvWOAJv+hPJ7rK7P4RwpbDYbsmp8En/ntQiP9ZfabT/H/22B4KZ0Shaq0IZGQvJi4AxH5mUEl4NWGuZ3mdu6TuOIDbOI6OxzO6ELYG8NpgqtTdyzaQeBRHfPHM90/bOUAeqqWzDyuACNnj2athXkTwMamBLAkZuvaKrgJnXskrUvb9TYib9mnFhpOkizaZ9YvQDN3XgswZl2IebiCI3h3WOrJ7kWtHWwm4xwTP4gXf1M7fbDTs5mAuuea7rdx6PB0VlTuNZxNDZEvSMwoq51M3UsZKGjaEF2godcS2+Te/oZGgJdrdBFveP2owktkaRT1zjDSrMZmScBta4Ypwjhp3SMkENEpzRhdqiLOj+6v/4Z1/bWC5m0BQXSexUVRj8wHX7gCSki109mc0Zz0CyB8twJthAMUUemV2DEVJILZU9blQlBE7rDZiOfZGyko0EL1clZzyjk2tZNLuQMc2OVuIJ0lXIWdM4EfRAfEbM7mTjNTzY9F2ECy6STaSbhp8sVWVabXIdrAUKLO0ddCP3TFOvreM8MukJYzVDGBnsyCPeqUclVmkta6XRTeGsp5vOdJo5zEo2kXmeX7CGTKoyon7sV0lUlwM7evzkOc8Xktrxx8jYZ6qSZNKeH1RXZM6CpfgkyDzVZapoNwmjqgmfJ8Ho5EpRke46VsnafZnOnGYhmOeUUR6e/UFoQj+32r4IcAF16qzqjh/91S5B3LWtVK7lB0GNFJW4lR/oUYBO3okDcNd35nYm9k0SruaNGCPVVZyTEWTsUiZVo6LOgkPPLbO1Fa00izlhlWGtD3lE6UYfxdwR/CDkquzQbxpfDO3W+P7rd/TYOU0n5mHhmDe8CgRvmc2EwXLN33EqYF/WMkHKaoIZMIOitgQqg6pYo5nsie2+s7YNM1rxJWtQbWQxJ3a34WePcYrMQW31NTeYudcraHDW40Oglkou0pGoqmB/Now68Pie+fYP32BoLJcFdRghmp+aFERaEy6w7lzzr5z7O7klNrNyqB3bHSf/Rm0VpcE6wdCf3YWU5VTvpsCen1RWKZRoI3X93hh8oHBgjKKZIrh944SAZgzeO8x//vf/2de61UuPHWXkHFBa4WDjEj4T28ZRNzKJ3jujXoRn9xrgBAJOCZg4b5m476iKMP+D6FYQij6lFmLd6HRSTvLqUEiT1mganUe+EvTA4Ca0ATdazNxxORAYqaP08/cipDHVNOwaoyyqaVI92PqD0UyMauJav5FJrPUhGXutORB0+qAnUjyoPmGjwyRL3Ss5FfpYqa7Ik6asaDRaG4IJ3OMHTjlJEL8GPWhoVGLZaR0mvzDOI6d5Zo8rfYdpHjGjJpUoivlwFv9iKnILY+TQ+wuvG4T/qxI5y8ExmMC9yxQv9QN9WLKTWLzOVvITu0Jj0LPi4CD3xNqeoGXLqtHULuGblOPV/O3/8rdfW68X7Y3QrHNH9S69fw2xHTjncQxgIClBv/ga5JtqNWNdJIbUDvKRKXMi18yNDzIigZjUiVHN3PsHa5IkTqdTVWXvG4s/YbRhryvBDgxKwEr38sG9XuXeyowCxj5DVtS9v1arWl4v3QlDRzesNqKUKzvBT6AVWMWjXnHao7tB2U5oA/OwSOf/GlFAt5VHu3FXP4jtEASs+0nMHvEbe9kxToNS7GnFKcsSTtzzjcjO6GZQYhaPbGSbGe0oqLsyY3ZHjTJ4a1sXM4SB2UoRVzKD9iWkkEYTL4Bn0QWn5JA36QVnxJtw3CJx3zFWU0ohqYNdrdLoMiO1Z76nP3G0Q1rDZiSXcrWdJu/pOrJw5n7csEH6/LkWpiC5dZMsfpyI7ZBgR1GENmGCoEzrUcEpuhdL1ewnYtuZmihQY90Z+8Jnfs/DfXDRX/A9EM2O6nKaPvKT2jM1CyJOdc3UT4DiPF5QUfCwRzvoDolFuSdYTF5yAAAgAElEQVR6CMxm4bgdNJAfli6vPYZcK089cPRV2DoIT7AYEVrUe5d/f/Gs2wPrHGOd6VRGM4k0SlvGPgrkqk681U9YZ3noO6MRLIxB07pFZSXfM2uIOeKLZ9ByyMRD7012I73DCD449GoouaKdhaLRzfHmv6ACgqrrK7+Wf8Qow6xOHOUg2wNfz+SUscaSd0OfFUGNXNOK0hofHGd1oSsJ7qqOIPBzwySL+eu/+8uv7dkvOkqnLh+Z4AZWbux2lVhV75hksdqiiqFqaahUKkoLN1dXw7EfhDEw2JmeG/u+M7iRTa2kniSL3hu5JU68IXSSIv/dFqm1USlUVbjV70LqwuC1rKJrFcq2ytAfSrZqvdJXQ21Qj4pGge+CiG/wrHdKFsjzqGehh2gk/dxF1DyYmZqrLLAYKVRSTALARPPsd3I/SE0+mCe3yEpcgy9C3n7WB7WLJje2XZgIvdHpGOXQWmHcC437ITKs6hK9NwILuir2dcN6I/4kM9J0Z2tP/DrirZdwrR0FNWNAGdlQ7lmAl954ugFbHe1oQgxXG6kfGG2IL0PrYmROMNrxagezoCaoNrKWiDaO1hTL+CYC5RZRWVKuSR2cwoWtPnn2m7Rc6iS9wAbTuGB7oFMY/cSq7qRh53f2L+gN9rbxSDcWf4YmGvSgRpSxnLiw3VaMzwzLIGrXVzNpxBHMyLM/flPWlPMhJs91pPQGpVF1xWgrMawu7GOLw3YBRg1Wbiu/5h94NaC7Ed8eIsG2ekY7g0GjqhRg52nmjYuIn5qYzZwNrOVJrZmlXzDK4feRLW8Mnxw70jecOEGW+v3Rd0LtYiAdFa11QpzoCfJQQHd0d0zmzKFXDvXkqAdBS8zeJSPOYRUlj8DAVgTMNTDwPJ58Cj/hunztf+5enPQbWUW0Eul00AMGx0f5E01fMP/yf/urr9O8XJ72SlEJqw29N7JNDHZidmfKKqVQvMJPXlqwL/rk0s+4KAp5hfTiipP3/qAmot2FOpIUR92ISiDRrXWZYtHZ8kNy/F3hmhCvg5EPQS8dWz3VZLa6soQ3UolkG5mMVLDUpXPnu7Rk8yHad+eYwxmTPGrV2MngT16Y/W3lYJcFVh3hkNeZ6loOY34g6Ik2Vpy22OQotfBoV6wWsbPMFtrLB2wY64QpWojqZhDpdW/4Y2D0sn3zNoASTmGYgqBhzxYzy8YxlYhSBuUlY3HSZ/pT4wePn6RQu9Y7h1oFLqE9ORZs8ZJbME7WvDaAUfRQWfRJDCXKcJQdb4Mkk8pGIV/NX/7bf/q123ZRaIw1jNNEcCMdRVXyOC72wDjL4+PJ9XoFC9YbWWbEKPfw8RCm3qgpOnHjB6VltvZAO801f8M2j/WycFn0mbGdSCayuPML6dYIfmTPT3AdY+Vate9Pmq40g/D9FWg0WWWaKa+D5EoYg1jPdeFQolOTFwXkI5P3QrWVcZjYy0p9domGucjDfXDYJ8oj/99aNordVyqVLa7y56bi8ExNiFydhm7ydYZpQGX1kmWPRA7W9KT1ysZT0jsodNPyBLIKPwR+1F9l3uCl9t1slduTURzrjipdzgXB4JzkA7byYNgXepH6+8aTvd9JVnT1FkO3MLmJmuTnEPVObAeekZETmXg1/93/9d9+TTleFIraqtxTG8S+owPkliitwdA5TWdMNeQ9oaLmNJ4pYxLTeLNMw4zxcvBZy4OgBwqRjpIqE52NJ1tfMdlCb1zNr3TXZWO1R3qoWOMZWARxvo9y1hgVvQsg4a4+iP2Q649R1FqZ9MKgpLF0ax8EN2CLY80r6tRwo+N5X7k+f5ByZFaL2Egn0FYLecwvuC6eAaxg7Pe20o2kjkY7oxFKuOqKXT0wOIzRHEnyBtUUkhZ1S6iTcPpxqCD7gtwyuWSyjijfueUPoDO6kVN4kyda1wQT5Hs/JBZ75vpx5Xb/YGtPCgLoRHfsomm6EnxgHk5Edtb6RFXNrh4ke/At/QlLYBxGTDcs+oyvXj4An/7n5WvL9TLaSXzBVWG6w47mdV+PvIefCHpAd9BjJ+koZC6nRNV+qBfYqOO2IA48IzPoQiX2jS/m90LPbncJSJbOMIzyNCmWYEfmtqDRTG4i3SP9EPbf3sWBl9VB1Dsn/S59/9YopVBbk3drsfSOHJC64sf+p9ehdMQqx+V0wQ4acziCHcheWsp7lQmkjo5+dNmg1ZlUxTOwqDNOD3wvfxQqOvElxhBiafNSg6+xEsZAOEZ6VNSjyBJmCTRfOdpOjPLhKDZy0u+s6cFZv6OLQTdL5MAibMGj7FLZdyPh4hjHkbpVxrIwzxPGG46601rni/8ddFjjU7xJKnA1vxLayGREBn6UnVwLsW2MfSHq/Wo1RuBDTdOjJreNaZwJBNa0ol/sYFVhNzv39oOuFNoBVXPRX4hup6aO3SyVRlgm9CHzdx/EfFVeTtvP6i8wxvI0N+71isqKxZzZysaiPE6NokTXUNaGOcsN5JmvokqtM2NfWMIbt/UHj3QjzIFEouSGw3ExPwlZxG947XFZnkT3emU/duzJYrXjXC+ootHRS/XbGJotjG0h1AE3WmruqNZpprCYE66OL5y+ozY5WJZUyLysanoSAfZ6F1O3N9zWD4m6GcVkFia/cI3f+dP2ywtLa2it8lBXlnBm7Au38h3bHOdwIfWDVA5qa+iTRO97qngLLcs/WzygwslfKCYTXGCpYm4bfKCnjsFy2A1nBkqqOAast57RTAQT8GqAIu+4VBI9d3oT5FptGTy8hc/gwTYnzaFaaVlSssYqIge6TfgWuD9vODXKFqppbBACidplwXH0DaO97MGr4tAHrgS0VrhZuoClVRbzRmsV3z0YOOrGmBccI0FlPpnPGGfJXe7DtRVSld8elZVQP7xGFYvpXg6PzlBUpsQqcMk6U/yOHwIzZ7YfG7lWhj5RaiHMI31UEIURfKvfqWTe7DtaZUoX+1h8Zo68g4OiCsM0MuWF2gujnmRwYxZssHwvf8K1EVMdpjuyyjjnKTnJFbI2aTsZCXjs6c7w2hNUVdHaYCaN3wMWQ/Ei3ujbSGuNs3kXg0nqDEYwdKM+s9s71/Kr+INi2zmFs2hX2hOMEtZ/qcQUcYMj9pXuKyf9RqoFg4Q/5nGm5gSxiTipePpDk12jD5GuKj4M3Lij1YGyGtUVJWbGPjCrNyqVqA9B0bkd1x29a2KMzNOZrhtx3eiF39R0Mcs0K/tEMRFc51F/4EwgmEBqG8/8RGmpo0cbJaegHC5YMomKxiqLLh0iHEYAmOoWyL7SDgE5HeP62w5gq09sCSzhhPe/51lvYAQnY6plbQ/ebKC9EjtOO5putFKYw1nE1v0me/jmpS0ULhQnZPGxjxz5pZR3Bu881/irRLn0zCW8U2kUlYUZkDTl1tGqU0b5ENouXKW0R4ZlkB6nv5CclEXf0hcmu2CsJfgRe3bvKDR7lrTrYCZqlUmVKULgssFyLw8ZjGTNPJxFjNAMg5+4zR9Y3enJ4oyh+8hRGz1rNIFTeCf1g9Ya/VAYj2y/jChSHuXKaGaqEjCCa4FhHOldJIvzcJZ3V9h4D18orgggsUaWcEIry1Ej3ShMi0z5RHwU3OxIdiO5HWMUYzf47rHOSqDTONK4Skqoedw6knomAXnIBDsyzCOqdYrKuBow2rGWJ2MfcVr8iFklis1UXWRyqAtYRegTuncOtaNc5224EPgL9raymw09gQteeASt8MX/HtMVeZfzjT9Z2aIa+6rfIyN6ayimYULHNQOt0pPCbp4cpChjcLgpgK0kvbOz4Y3g9W2xYmQpCfOv/t1/+tXiLyY7UNIXM0nWqS5Y+iEIuNmdoHdx0nbFVf0gdQEjt1wYmGiqMs0zq7mR9EF9mS2yi0xuxuLZr/LBGe2AGYSmWbvs++dyxu4eU2QWsNenCBM0LGoRWAQKnTWpRXbEh0NVeEYqmVv8ITFt1QlJxBXBT4JHj0XU7eYgIZ7iR7qRSTjnZAG1dG76m4CiciXalW46i31DHwZ2RZ8qelAkhKSWesTZgItBqls1QFfkHhn9hFFGlHy6EtJIL52P9itWS5K5V9jak9QStlmGMlCznCussTKDaRDiiHPCHPZ2oPTCyoN5OkHrqLlzDA+MsnLlNVV0dsbh+0h6ZvRg8KPDesNH+nY1/+rf/ouvvg+XsQgW3fuBQODYIwyA1r/12lXX6Ca8fpBBhFKy+aNIlTvqg9wzwQb8GJj9gtaaUgvUTneNwYzcvz943FZ6kMxAfXb2uGEGTRx2DrMKopZM1klcRCVjnOVH/pNwga3QLz+b3xGaCBoXLi8Vq0wPS0k0X0Arkoo8n3e0NSK4BszLM2S1BddR9VWhGi3GmpfT6MnoJiGIFEt+ZFpUhBAIVlx+ac3CSPAHv/If6S6jnSKpnZqkfzAO4vetR0VbQ9IR3Q1Ll3bQoCcBZ7fC6GZMNox+EcY/hXv6QW6JXa3sbSUouWKaZqBqhmFkq0+U64Lv041ot9+sq/tzwzePblYGR7ir+Sd///PXVI+LzZJ03fsqefwjcC8fqLExtRMaWbv22OlTl/VtbRK/1k06637ho3xjNidsd1QqWSX5DVGWfoAzA250TONM3gv34wNbPJfpHaZGMwUUnMO7AKEz1NbwZmSLT5KKL0iFAqPYyhODptbC2h8EFdBNk/ZKCQndDEXJu3E8BAalJnmk0ztbltzdyV+ovRBjkr9bK+awkIgif0CLLGoKjGYiPjKPx50trYxtIuodsyic8687/QVrDNf0QeijUEZ7pelOjsJEOtTKpGbGl2Dae09XjbaB0hrtzG8HPhu90MeNEfSNlr1+ZKeqxqDkkR7MyOBnmcFocRMO5sUdGAqTn/n4/sHz+qSlfjV/9ff//GtR+TLaha5kjGiSQ1nwPTCGCVst8RFpSu7cWxf6VawRtOLcLzzjg7XeeeQboxXJUW6ZwUw4FXiU64ukNeOME7jSUOkGGZQ4AUSXVOkZVBXbhm4aLIQaiHUXcpc5s9anLF16QmEZ9cKhNolIacXQRvRrpJzXTIqRlitJRdpQKa2yl+2VDpY/zylRS2FxJ0qtUjTRmqYa1/SNUYmUwjjDMA3ooDC7w1tPDYVcEntexfpVFH2D0jIWx9421v7gTV/orfGoH8QqdHaHJ6v8SikLczHXKMj6w9A3efWWVGESp0DpmaPtqG5pvRJc4J5uBBNQSVgASckQrvREbYKbnYeZ03Ki2Sx5gP/+f//XX7VSl4f6oNQklebcSPZg6gu6W5qp6Gg51EYY5L16Vb8y2xMX94nFnSVaXiKuO/kEMrKWO4MfuZhP7HWlGsnIOeXZ8oNbub4oIiNTmDjrdyoFn2fGNnHoHec940stg+oMZhI+j3V88j+/2rOSxc894ZRjq9JrGJhAi9yipUZ491Dgxg8UcDJvEkM3i1i/mgivtTZi5PaG34U/QBf+0Cf3RcTT6uCZb9SX/cNbz6m94Wtg7AsuDqgqDIXBjhitxSbiFtmItkpQA4Oecd7x5j8Tm9BVXQso23HKM/kJ3wbiI6JG0E0LTs41bBOyypv5RG6Rb+UXWquc/RtoxZbFDna27xysTGZmtDOpy6R30w9aKFfzT/6n330928vFGy/vQcVrKCLod6cctVcJGiBjTl8CvYFVMjbNLb1sVY338AmnHcEP0GVa/sxXqnBaab3JQVNpZnNmCie8le56bpnt2GhFuL3JiuK1p86+7RIZSxbfR6otLx3cjLIvaKI7obrg6ZWWp0hvCKdAdZJOLLyxteerPqbl4PWKSSng0/AzZ3cRW5k1FBK1Fq7pO1TIJaEUdMSvuLg3cSJ5JZavHpnUic09KEEIJPGe5JcoG3qE0S64EPAtYLTm1r+jO6guB1/lFA4xl8R+0LtoaubhLF/Tq2qmlayEnfZsZZXrHU7EX7pxDu+o1nnWu2Qasujp9/bkKDvBDlcb1EDMh5izvOPWfqCUsAGTiYKO2w+sdbyFz+LGKwc6GMYwiZalw5431vpgHEe28qDFb3LPr5WSG6klfPAiQ9Zy8FG50Uls6o5RjkbBVy9XutRhM2TfQVchaCrD3XygAiQiPXdM9gQ94FSgUkW5RufOVYqr0YsHMMx0YM9PAVANnkLiqE+RWbJhrEV1+JZ+kYFL5YXBUXgd5FDFzqQmyVH2zqNKWpgOfe/ER4LxjmoGs42UodNiZQgjDy184d4Va77jc2DRC0orumlsTa6kjc7Wn8z6zJ535rBguyeyk/aELo5He1B1RFXNqBfZ83sZ+Trj8DFwix80nWldJFFH22kUBj3z5j/R6WhV5Lf1PJ851MqtfCcXARF300h7YlRi6OgdRrfwNn7iNL6BaoxtZiwLW33iBiPJk1pIORHbTmgjy/7GdD9xrp8E7FA2aqyUHAnWo5qAkZ331KXgP1mMcbxN76ilsJo7uTVSq4TZ410QC0ka6K5jtMMbT4tVFC4tk1silciun/jFy2DFeEn+DiN9qPzO/4F/Zv8ajZHlVRvZ68r3/gsHO6U3zvkT+mZ5K19QGHQyDH2i5UqogaENZBJm0JQpoj41mi/MSa7NNVe8mujNYoNDodj7Q24hRjwFvgVUl2axQaro3gSxl9uMMiJ5GLwH3VBD5zJd+KfhrzibT8Jp6p+weH7kb/zYv9FUE5PpWmEzeB3IRBYjWQxzOE75DfMv/8e//toLF+8HTDBMRlBuqmjG/SQLFts40kYxiaQ3kTMpJVGmqmmpspmH9PtK4Nw+ERjZX4r2ZCLBjpgi/J3ZLtRaOfIhNK264oxFHYZaMtY4jLJMy0w0G80UdOtkFYlmY9ZnZnWmfsghUXsNIzI+NV3gyemM3p00cpNsG43RuDIQbCDZnVAHSGIeLzq/qCGFUS2UXKRu1QZUB7KSnqA9oQwQNSprot7Y9JOZEzFGggm4FgjDQD1n9v5EKyWxOCeDtnGYUatB7xY/OYYwcNSdZ3lI1k/NQkk5DKYGdNdsWgBSsz6hvcYWi8mW0jKPcsebgDEGmiaXyMYDV73MDqoT5rL2pBLpvTEeM8MYrua/+b//6689crn/8uT640pRmYEJlQTRksYday3eDIzjyKE3vBrZ0hOq4R5vxBJ5C9JzD21kNBMlZcGeBA9JOAJUKTAorSTZkzu2OnoQ2nUvHWUB29EYjnxQk4xkT/MbgxtR3VBrRTkkndMDz+eDtFYJQlQ4viXICjNBdlEwtZOlK8gtytzeVZz2fKzf0MmiukJ3xbv9giuB3gVC1SNo4wRaiRKEbtHsx0Y7isgllcI1YfX7PqCrlQ+l6bg/9/uRa1zqB95Ld8JXz7Hv9FXj/cC0TOhm6FcNUUqxm3rSg7CaW+skDuhKKGo9yUFUB1KOuDQy5Bmt5fZDgY5iHEf0Zgh2JEwBrQ37cyfndDX/xf/5N1/d4i7n9xPNFHLMvI3vMDdSkavTbM5006mxcm8fdCDbTHUZHxzWWA5WjrZzHBuuOqLZ2fqTbhBzVl/RS2dQM0Vl7BEgA0GiSiVnHv0mI0/bWIYTW1+ZB/EToSCriNJiDq+xg1PoUTMNM0fZ2JP4AqZlIM0HxhsGG1jMBVMNKWZ2VrQy3PguCDtn0UGRXeRoO145Wqs88x2vhMOz75E2VpSTK6YzTpzBrmIXSeG01Fnjk9oqbnAc9WBXT4yVe/s4j6z6zuSXF1hbzkSDnllXySnkknDGic38XUHohOB5mz7hjOO2fYiTqFc29ST3JKLIwdFsYwwDWsGhdiY/CezrXlFGU30Vha7uQiilY4O/Wm3kMXJwpS0Z70X/unDGsrO1nZIKyohZ45P7Ga89B7ssOnpGW0ur9bcAqLZGPoUICFLrxpxn6Q4chbwm7AuzdrDSnIicnTECOmwrv8R/T6qJ2S/Q+W26GMzAP5b/l2k4sQxvdCqqN8bRYw6Nqw7lZYVcU6eR6XpHRSVkc98YGJj1SaZzRujiW1lFk6cP3oZ3tAVUx0ya0XiM19hmSM9MIkJWFCutodwTyTwJbqBRWd2NZjpBC8mrVun0Gi2x7lv6wWX4IpTQofF+OdG3iD0CzliiO0glkWpktCPpSPRcX7bRF3HUPPl9+AOmGn7kXyVi3yoTE900aQW5AT1JQstNFrVrWmqU44XqPSlsPuS+e3+hRX8Kv0dXxaE39MmgnjAwseobNlh8D/RN0Vx/JVdGWutc/BcaYJXlT/U/4HUg9EFWqSHIN++IRBUxeFJNsplTlme98nmY0Dh5x2kjyFX98hQp6L1zVoJu99ZTZURIRYIWqR9oq+lKHudfws/EI1GTVNM2+8QFhzkseGS24DSlZLF2uHdsk4PSt/5Huv7zlXVn9AtjFxdy6oWcMv5kUVHz2G4o31nCQugTSiv+Mf57ifp7h9WOrTxAdT77L5RaKCpJs0hZ9rqSysGhNy6L4O+nPrPlJz6NSOvBUF0TLmIFZ0WKmZr0JT/733FUWdl312Wf0F9N7nHAVsdgBiKZ8qz4xRFT5dvzF+y9/GDSo3Dv/ScqRdgyRchfec2s/sGuNkwMzG4kp4TrXrJ3RTj06/Gklsp5EuGk7pqjSfBSdYQ/mB2FQpiC9NtaxjSDVyNJJ679Gxe3M5kTdDibN1nhWk+JiZoqq35IFLo9abnRjOjlRzXL2QKJQtfSpHBaLD1UkossVrKH63NlGiZ67Hg1U/1DMgbpjHWG1A8GN7ClJ5lE0wWVBYFnR4NuiqMfYh3LB6Zrkk7Efkh2oVe8lq7CaGYZKhm5afTUqamSWxRBl+uUWmmqCoC7R1nKlUTSibN6F/+QU4zMPJ43mLuMyJXMOJRt9KLpJvORf5XiTIOiBRLdWqMehYMDZz2xHJz8m3gbikqYfoa9MbhJsuoaAo4dWc4o3fH3QcDNww6pS1bfRYk865UWG657tmNj1At42PqGt4ajbHQmJhVw0eHGwIin5sRH/oEbHEuQvKHWWkwivTH0mS0+JchpZ3KSAubed+ZpEWaRFv8PWWGKJeaDMcxSOavQSqMfHbMHygC9amyz6AX2vkttOvUXg0Bs3Wf7ia09UEYqZ6knnHcSLM2VN/NZzN25yOpaj2zchZKuxeLptFhYnuXK2Gb0rkXhrgR+EbvQTD7bn0g9Y5slNjGrq6zxtwGVHcxA0Qz7mT6JfGIYR27qG95CVI1aCm4dOQ+fCHoC14nxeBFWRVejCFDgPL2ReqIXME+P+U/+zT//Wnu5uByY+kzSiZIKWlvu/YPkIkOYcC5g3zSrvhFr/A11Hnxg0gtqlZpzWzJDCER2fuQ/SVERYQzpZPF6wmgvzV1tKLpSR9GtzpxQSvNR5Z1mlSPWQxTpDUIZ0JujlCyffPPKzVUNEQYfyD3h7UC3fw62KkGkOUWfshwyq6YP0HTBGCPFlmLR1uCUperCrX1IkolOagnVobSC9R5vRrRSaKUpulBs5OI+idhaRXJLzO7EUXf+FP8Rpx1WBcayEG+R0cwcemfjSVDygxn6iNKyYtZWUW2lB9lYDvvEwc7eNnpThHHEjHItfdQbpVTJCaAl9t0aKUcykagOtNYCnqKhrX3lLDSxxKv51//uf/hqrb3s5Uk6It1W9rKLEbMWRkbh2jjHpp+yORvOUk9WjaOtnNyFfV1RSdMj4skJwqjJLTPvb9jkAUjqIL46a4WEQ7g93nlcDXK9RBP0IB22sshuvhRKyWAVg5rQ2TC5hcGKZFpHSyHxRHQqugs6xmnJzId5IJuIsZqt3hn0RNUZ5TS+DZRbxeMEsRaMUFKpGOUY04KPA77KfT33A3R/lSwM1cjVuUeJgf3Zwzi2hZGFTd1JKWK7xWlPSYVgBybOoBQuenprr5W7wRnHlp+CdbcB6x19rhQdhb3QDNFuaKv4bP8C+wzUVjGTwgdProlHvtEULO2MjQEfB1R36G6Fs+AsVrurjWyCQG1O2q9W6BlWy4GvUuhOYk26aaotOOvASvlx0ZIOUjNMbxPbVXH95Ybxin6WqFTMB260PO3KxMxgZlkIxRXfByGCqM6jyc5gtJPwhdGMLvBoB8twosVGTWCDpyrBn0mJ8qC0g1ADhI7SnUbBBPPqz8tNR1vNZE6Mn2dKrdC9AKFGjf7UUElx//UJDoa3QPeNei+02liXm1S/NKKLr5HSk+xEjHyI1/ZkVDIel4HSLB90lZjHhWM/OA1vYijvWejnNtFcpW2NairNHLiqUaZDa6A6agRTDSd/gaFjlMV2xVru7P5B8QWXHPEWwWnG08jn+XdscaU/QQfoY+WZry+F7YBXgW7B/Iu/++uvJZeLiZZoD9pYSTUSS6KoLJRNY9j6U3p4rQuVWilSF8vHXlccA84FxjkwLSOPeqMdTQyV80FUUgKd/CKdvliJRdDzB7IqNdbQaPyx/AdyL+L8aY6nvhHVDgps8hQt8KNWOoVCX6GUAifxBB59Z60PKg2nA955yQ1oS2oHKMW38ssLxAA5Fzk9TyKiikck54gn0EKhz42kpFP/Zx3cI9+praKVZasbXffXTmFlVQ9SjeQmWb8HV/H+5UJKmRYKWlmMkaFS3jPddtooqvdOFx2eSkxebGm1yyvTWkvVlSd3Jn8i1UjRFTNrnPbcHjfu241cE0EN8uqbG5t+MIUJ7wJNNe7lisFerd8Has+40fLIB7f4ZKgTVjVGLzm9X7Z/4GDjU/gdk5mptRL0wOwXnu1O7Dsn+05ViV1HjrLS5szQJiZm5n4m5UhMkT1GHI6xzLhQcV4TlBeiFQ1vPJf+mY5IoJ0dMazYZuVkGw6ZuLlA3gt9bQTnwTRKzuAEYaeVYWgTH+kb33um0vjUfxL/b3f8zv8TnPF8P35hsCPaGJndu4z+qVJypZSM0hpTwOWAUU66fkn4iMrK3OHZbjSVOPt3tuPJ3lascgxqYjAzZ9UwzVJDRGeATmuZtBZyTfQMfWrSY6RQiwzf7u1DGsHJ4fWAc4bcu4zqjSK3RKw7J/2JQQ+oGRgbz+cTu1n6UElh54iHbGzHEXuI2m4yJ0fsBMAAAAi0SURBVIY2YduYaWunmMobnznqhsXjRoNXHtMnum1sNXBu71jteZQrzjuM1qgGORZ5ejTBpq9FlKyjl+LorjaCH+hNyb5e32m+4ZQlbQXtHO/8hO4SHTuFd3pRWKP50f5IZGcpb2x9xQ+O9/wzPb+2hMWQbRFDaers3JnCIjYtdaKGxDMnpj6LxubVTl7GM7prBkQT10untsZaPniqG5/t77BKsKxBD+zqIKeCNwPZip+vbnINncOC0Zqe4bP5mWY7vcChNn7kX5mtUEIPNrwdGPVIMQW1ifJ+mAJbXnluT7rrXNQnZnPGWscf93+AojgtEJWjxco5XPjsf+YZ72SSqOoYuLcPPvI3Co3LMmCs5uf6B27lCkkLjQ1L95FTv8j+4G/+zd9+DWq4KJkh0rO8//e2klLGYOgNTLFMYaLpzKCED7DGlVoKSimayaJ+xTLY6bdsXncNrSz5XuhHlwKKblikh1DulWADVCXwJK95qB/oXSTKplnCn0nbtoosIWs09je1fbX/X0tnkuNIckTRZz5GBIfM6uoJaGghXUDQWaSD9JEbEAS1pK5KZpKMwd3NXQurJcFtkOFu9v77Fe8jY7M9uu+RTZ80V3Hd5Faf008kyZzlAr4bgdMqpVRqqfYAUIkhkvvCJDMhBAKZvew868N0+k7pofMSP8MKe9vJY6KvcJIXuu/oqmYziQVUyJgbeIjVwPU+qLUYOSTgJTD1hd2tnPwVVTsTZRZKM2D11X/HmRe7FYQTdSsm89Y7qS3s+84YBshGH5izzR8GgxEGrkayyxzLgzzPpGNivW+3IMERQyZop0lDPOQ58X36C2WrFHb2fecULlRt3McbL+EzXmGuZ27Pr5yvr6g/KP3Ai6dujYCRsSMOJA78Iqhr0B3u5tEwCJNABT8i6jbaMEwr+Ghx9HoQeybmbG5c59HWab4RutKKvaYufvpGFt9wwZFjtr5dF77h6w43PB/bjegyOc6IU2qzmto5zbyXN67hSvQRbdjiSjcWF4k9kWqm+p1QEuPu2VJBqx1YfcLOHeOdshdCjah2zuEVon3XXLPYtsfOGY+C6uDkrjBg3w7yOBFSpIZC6Qe1N/pQruEV5xyP450kE3Wr7GVHfWVZLpRu5PLFv+Kqt+JL3ZniCanCuKkNoPIADbiS6QPG0QmtVZ7Y39gcZo5+oseGjIFrZuQI0dHnCi0wVMxD3z2v/jPBO7RVXPKAsB0ruS6EybPKTnAJRLjHd/I0kUaizhWfB1VX9Oi00pGLI50dp/Ejj9XsFnIWkg+8lT+4la/mu3OJtla0J+KcGc7sn0Ei02VBT5XoA263Cpjn+GBJRjyrb1hBxicWPSNroMtATsIQ5WPcuLYXQp1IIaKjMHKjpIIuZgDzT0ecA+TKdn+S2mK5RjHTizSHiuHYLgjq1FjGrN8YxoPYk7WsSMaHSHcFJ8OYgrTzyf+ADGcN6ttuoq1Rubd3rsn0t5Of2dZBniJruFP1sAen7ixyZvITgw7eIddOlQMtjulY2PuDgRlN/Z//8adfNR6vTQpNGl0VQjd1e99RKpIdVQov7rP9WjHKhA55tvuxV888n5AEW3/SaqV+mxRObqJpJY4EXYg5UaRwyEY+RYps+Ox5ygfztLCvK6FEjraT40JIgSWc7bPOhB4ZvtvG0b3bCtlb3UwXxYu3DoTW2N1GDw0Qzu4T1R2mlB8DInjn8bvnlK4s4UxrSlflCCsP+bBT9zDVe5RkVO45cNd3YrQO4O6VLd5JeSKSOD4OfPT4KeBTsLVtN3H2crzgdquS3eRJZYfQyX5iCjM9dnLP6KGs+sR5hzNXLeLhwbsx+TJwXmjV1uDOeUQx2RUmvhhhQIBnv5NjJvrMcjkzTo3qDirlFj4t3+HF8XZ8MSGUJHzxPMLdPDcS6a4xeqey48HqZID9YdfFc76gagGP2DOxm4hBnNgkUEwl89Q7k59poxB7pksjTxPO2atm9gt7W5GzsPiF/cvK7//8nTFXlutM2BLP8SAt5v/1YtzicJ17f+McXnnqneaKxbnqhZf4ypM7QRx+wOjKKV7xPSCHh2wJaKVy5soYUJpJLIiW/6/DdvA4YYqBR3tHpXKaTnwKtrZ2Hrb+IOWMf7Vk8P3fNouQFzEjyn0juomSLBnkvWcJJ559ZZU70rwVUcrBrX01OZckcpvIsrDh6WLSitIOlulEbgkZ0Gk0aezuyblcaaNS3EGWjPdihdZUe8UNM5QdYcf/7e9//VVXfdVDASFI+FZpriz5zNf2X9b+4K18sZhWOHPvN6iWkZfi0Kng94hrjqMcdsePB5qrUbR60LQZvxYX2rANXOhm26hUi2T1w9zCkvHBs+QT05xoraL74BRP9LPJFrQ3TukCXQgtUHvBtcBWV+o4OMULrTfu+sbKk2f/IPbEH/q7iSMExiZUrSZz1ok+FPmwBjA9VwqFMnbe243krGgykNj2J9lNVh/noskvUjTNfq0UXzifL8xx4bF+cNwLmYk8JcbSGGrnjjmf0a681xulFZZwYusPm2z2YP/IrnPUHVGL5d+5EUJg3Z4MFcbc7OFsjlQn5DCMfvjBEKVK5a4fqChzmGm9Id+Kq7yGW3je199yn5hkwvtE9EYG++GMXpHIJf3Em3whhsiTB12HSRK8MMczOSY0Dr6+f7FsfZrMT1cf7LKRJPOd/4mtrrw9/qD7zuJNLbe1B8nP/Jx/4Uv9H7s+ucQEdFrvliW4zEhz+JKYy5lWrDtQNCK12hZwCixuwXkbBCUmcDvuMHuHl8h5euWlrUwyWf9x7uQWWcKJ9vhWEq2B7pRHvRvZ3GFxpn37z/4v8piR6rgGw6+1Nc680LqNX3/IvyAidvqeGtOPkf5uuLfzYvbR/WDvB7FafO379DPFH7RuTr/gExd54Wv5A+0N1UbSBRetcXWSBTd73BFAbDM4tkFtBdcDPSthZDZd2fTO4q8GkYwnqoXZX7jyCs399n9RkJJ75+w42gAAAABJRU5ErkJggg==')));
}

function $clinit_ViewResources_default_InlineClientBundleGenerator$resourceInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$resourceInitializer = emptyMethod;
  resource_0 = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,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')));
}

function $clinit_ViewResources_default_InlineClientBundleGenerator$wallInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$wallInitializer = emptyMethod;
  wall = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,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')));
}

function $clinit_ViewResources_default_InlineClientBundleGenerator$warriorInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$warriorInitializer = emptyMethod;
  warrior = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEgElEQVR42u2aaUgUYRjHx8ous4PsoiKLoMOgojApOuiS+hB2EXSRCEFfTPpU0UF03/RB6Y7IjA46CCqIiuiSLuwgsYiKboqk6DDN3f4P/oWXl1F3dsedmXX+8EOt2dl9nvd9n2vHMHz58uXLly9fDqkZaAM6gk4gCbQFzUFcrBrdDUwDG8BpcAc8Bk9AESgE58FmMBk0ihXD+4LV4AH4A4IhUApWxcJuWMCVDoRouMpnMMKrhsv2Xc6VDIaJOC3bqw5YBv5GYHw12714DOaDbzYYL+z1mgNSwG2bjBcOeykbyAfdZqPxwhnQ1CsOGA8+2uyAOyyQXK8mPK9Bm3kL+nnBAZKvP9WDAySTzPGCA9aGWeyEwj7Q2M3GJ9kc+WXVy5S/X4Ghbt/+pTYY/gsc4JafBfKUemIHmylXaiGojND4N2ARiNfSqpTCX0EFuAr6u9EBmyI0/gPINLlvGshXnCs7ZInb6oJGDFLhGi/t8WKT+2aAW0pglZ//6ISDYBJIdIsD9kTQ7a03KXXngmItq0iBdYJOqJ4XXAIr6Iw+nCy1o2OimjVWh5kCj4P22r0yGfXV6yo5RUowKbbkfX+Cd+ApuAeuc1fO5mvqXRkWJj3VfAdTTLrI1ybXypgsmdeMslBwldERPevbAR3ABYsOeK6ltRmgxOQ6OQrpynWyxe9bfK/caATOKRxwWqnxB/C1EzgvNNslC7X36U6nWN1tk6NxFMSQI+A9+M2KrqKG+CDneikYDC6b/H8FY4seIKVWKA8j3myJ1mClOVd2IpjKcy3jsUMMUN+VDyXn/YaJg8Q5u0Ar7d6p4G6YGeciaOFkumzMWCHneSd4qURxPapLOdxFe30ys0a49Uahm+YKcXTCXxPjC0Av7foeYH+E1aYUVa3d4gCJFc+01Zffr5kMPwaCozY0WmeNqq/jHFdP5nXd+CCzyDyuVAJT4xWbWuyNbjC+Kdta3fhCVnNB/rzJaq7UJuOlSJvuBgdkaxVjgGNvyRrH6mmaJDx0wywhQ4n81cbvZ4ATZTH32218gOM6R5XGba1+KGlquirXpLChsdsBEmwHOWm8pLRTWl9/gCWtqtYsiuxe/aVOD0t3a8bnK52dXigV2OyAk0bVEyiOqCXYqs0Kz9Qy04tj+WuX8ffYOjuW7tYoTUuA+Ty1jtett8l4abVnOmV8PMdUarorYnNUl3KMyL9cKTYc/CapGY3/pXygT6zuQlG6UhCFww2mW0ckj7yt01a+nK1wqH14W8YJq4aXMbMMcbK+z1Umtmqh08bivdItjLzKGVuynOr143i2z5mc3VsRFCBjOFn6YuJUWe03nA1kchQeNTXhakvtPpKj6lc1zODmR/hesqLDuLormVVyeMb7cvIUVSVyrvacge1rDRFb/i3P8NBjLaFqbIgR+gVXLuY03Kj70bdANKev0VYC6/jaHCBBa7QRwxLjHtXigCJOfmNac7XBhorM9DobDUCzOMcLmNTh3Y0GIily5KnQEmaHH/w73mhAku/teoNxjA+tDF++fPny5Q39B4RT86nJN0FXAAAAAElFTkSuQmCC')));
}

function $clinit_ViewResources_default_InlineClientBundleGenerator$waterInitializer(){
  $clinit_ViewResources_default_InlineClientBundleGenerator$waterInitializer = emptyMethod;
  water = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,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')));
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_4(){
}

defineClass(155, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_4);
var Lde_itdesign_codebattle_visualizer_client_resources_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.resources', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 155);
function $onSuccess(this$static, xhr){
  $onFinished(this$static.val$result2, new ServiceResult_0(xhr.responseText));
}

function ReplayService$1(val$result){
  this.val$result2 = val$result;
}

defineClass(116, 1, {}, ReplayService$1);
var Lde_itdesign_codebattle_visualizer_client_rest_ReplayService$1_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.rest', 'ReplayService/1', 116);
function ServiceResult(){
  this.result = null;
}

function ServiceResult_0(result){
  this.result = result;
}

defineClass(71, 1, {}, ServiceResult, ServiceResult_0);
var Lde_itdesign_codebattle_visualizer_client_rest_ServiceResult_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.rest', 'ServiceResult', 71);
function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_5(){
}

defineClass(144, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_5);
var Lde_itdesign_codebattle_visualizer_client_rest_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.rest', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 144);
function BaseMapStore(eventBus){
  this.baseMap = initMultidimensionalArray(Lde_itdesign_codebattle_api_model_FieldType_2_classLit, [$intern_20, $intern_19], [58, 31], 0, [1, 1], 2);
  this.bases = new HashMap;
  $doAdd(eventBus, ($clinit_SwitchReplayEvent() , TYPE_5), this);
}

defineClass(130, 1, {36:1, 259:1}, BaseMapStore);
_.onSwitchReplay = function onSwitchReplay(event_0){
  var base, map_0, playerId, playerId$iterator, state, x_0, y_0;
  map_0 = event_0.replay.map_0;
  this.baseMap = initMultidimensionalArray(Lde_itdesign_codebattle_api_model_FieldType_2_classLit, [$intern_20, $intern_19], [58, 31], 0, [map_0.length, map_0[0].length], 2);
  for (x_0 = 0; x_0 < map_0.length; x_0++) {
    for (y_0 = 0; y_0 < map_0[0].length; y_0++) {
      this.baseMap[x_0][y_0] = map_0[x_0][y_0].type_0;
    }
  }
  this.bases = new HashMap;
  state = $getStateInRound(event_0.replay, 1);
  for (playerId$iterator = state.clientNames.iterator(); playerId$iterator.hasNext_0();) {
    playerId = playerId$iterator.next_1();
    base = $getStringValue(state.playerNameIndex, playerId).base;
    $putStringValue(this.bases, playerId, base);
  }
}
;
var Lde_itdesign_codebattle_visualizer_client_stores_BaseMapStore_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores', 'BaseMapStore', 130);
function ControlStore(eventBus){
  $doAdd(eventBus, ($clinit_TogglePlayModeEvent() , TYPE_7), this);
}

defineClass(131, 1, {36:1, 262:1}, ControlStore);
_.mode = 1;
var Lde_itdesign_codebattle_visualizer_client_stores_ControlStore_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores', 'ControlStore', 131);
function MouseStore(eventBus){
  $doAdd(eventBus, ($clinit_HoverEvent() , TYPE_1), this);
}

defineClass(136, 1, {36:1, 267:1}, MouseStore);
_.mouseX = 0;
_.mouseY = 0;
var Lde_itdesign_codebattle_visualizer_client_stores_MouseStore_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores', 'MouseStore', 136);
function $createPlayerNameMap(config){
  var player, player$array, player$index, player$max, playerNames;
  if (config.playerNames == null)
    return new HashMap;
  playerNames = new HashMap;
  for (player$array = config.playerNames , player$index = 0 , player$max = player$array.length; player$index < player$max; ++player$index) {
    player = player$array[player$index];
    $putStringValue(playerNames, player.id, player.name);
  }
  return playerNames;
}

function $getPlayerColor(this$static, playerId){
  var color_0;
  color_0 = $getStringValue(this$static.playerColors, playerId);
  if (color_0 == null) {
    color_0 = $nextColor(this$static.colorProvider);
    $putStringValue(this$static.playerColors, playerId, color_0);
  }
  return color_0;
}

function $getPlayerName(this$static, playerId){
  var playerName;
  playerName = $getStringValue(this$static.playerNames, playerId);
  playerName == null && (playerName = playerId);
  return playerName;
}

function PlayerStore(config, colorProvider){
  this.playerColors = new HashMap;
  this.colorProvider = colorProvider;
  this.playerNames = $createPlayerNameMap(config);
}

defineClass(135, 1, {}, PlayerStore);
var Lde_itdesign_codebattle_visualizer_client_stores_PlayerStore_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores', 'PlayerStore', 135);
function $getActionsAfterCurrentState(this$static){
  return $getActionsAfterRound(this$static.replay, this$static.currentRound);
}

function $getActionsBeforeCurrentState(this$static){
  return $getActionsBeforeRound(this$static.replay, this$static.currentRound);
}

function $getCurrentState(this$static){
  return $getStateInRound(this$static.replay, this$static.currentRound);
}

function $getStateBefore(this$static){
  return $getStateInRound(this$static.replay, this$static.currentRound - 1);
}

function $onNextRound(this$static){
  if (!this$static.replay)
    return;
  if ($size((new AbstractMap$1(this$static.replay.actions)).this$01) <= this$static.currentRound)
    return;
  ++this$static.currentRound;
}

function $onPreviousRound(this$static){
  if (!this$static.replay)
    return;
  if (this$static.currentRound <= 1)
    return;
  --this$static.currentRound;
}

function $onSeek(this$static, event_0){
  if (!this$static.replay)
    return;
  if ($size((new AbstractMap$1(this$static.replay.actions)).this$01) < event_0.round_0 || event_0.round_0 < 1)
    return;
  this$static.currentRound = event_0.round_0;
}

function $onTick(this$static){
  if (!this$static.replay)
    return;
  if ($size((new AbstractMap$1(this$static.replay.actions)).this$01) <= this$static.currentRound || this$static.controlStore.mode == 1)
    return;
  ++this$static.currentRound;
}

function ReplayStore(eventBus, controlStore){
  $doAdd(eventBus, ($clinit_TickEvent() , TYPE_6), this);
  $doAdd(eventBus, ($clinit_SeekEvent() , TYPE_4), this);
  $doAdd(eventBus, ($clinit_NextRoundEvent() , TYPE_2), this);
  $doAdd(eventBus, ($clinit_PreviousRoundEvent() , TYPE_3), this);
  $doAdd(eventBus, ($clinit_SwitchReplayEvent() , TYPE_5), this);
  this.controlStore = controlStore;
}

defineClass(132, 1, {36:1, 265:1, 266:1, 264:1, 259:1, 263:1}, ReplayStore);
_.onSwitchReplay = function onSwitchReplay_0(event_0){
  this.replay = event_0.replay;
  this.currentRound = 1;
}
;
_.currentRound = 0;
var Lde_itdesign_codebattle_visualizer_client_stores_ReplayStore_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores', 'ReplayStore', 132);
function SizeStore(){
  var calculatedSize, viewPortHeight, viewPortWidth;
  viewPortHeight = $wnd.innerHeight - 200;
  viewPortWidth = $wnd.innerWidth - 50;
  calculatedSize = 1140 < (viewPortHeight < viewPortWidth?viewPortHeight:viewPortWidth)?1140:viewPortHeight < viewPortWidth?viewPortHeight:viewPortWidth;
  this.width_0 = calculatedSize;
  this.height_0 = calculatedSize;
}

defineClass(160, 1, {}, SizeStore);
_.height_0 = 0;
_.width_0 = 0;
var Lde_itdesign_codebattle_visualizer_client_stores_SizeStore_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores', 'SizeStore', 160);
function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$BaseMapStore$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$BaseMapStore$_annotation$$none$$) {
    result = new BaseMapStore($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$BaseMapStore$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$BaseMapStore$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$) {
    result = new ControlStore($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$MouseStore$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$MouseStore$_annotation$$none$$) {
    result = new MouseStore($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$MouseStore$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$MouseStore$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$(this$static){
  var result, result0;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$) {
    result0 = new PlayerStore(($getFragment_de_itdesign_codebattle_engine_replay(this$static.injector) , result = $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ConfigProvider$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores_provider(this$static.injector)).currentConfig , result), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ColorProvider$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores_provider(this$static.injector)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$ = result0;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$) {
    result = new ReplayStore($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$(this$static));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$) {
    created = new SizeStore;
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$;
}

function $initializeEagerSingletons_1(this$static){
  $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$BaseMapStore$_annotation$$none$$(this$static);
  $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$(this$static);
  $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$(this$static);
  $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$(this$static);
  $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$MouseStore$_annotation$$none$$(this$static);
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_6(injector){
  this.injector = injector;
}

defineClass(82, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_6);
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$BaseMapStore$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ControlStore$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$MouseStore$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$PlayerStore$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$ = null;
var Lde_itdesign_codebattle_visualizer_client_stores_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 82);
function $add(this$static, dx){
  return new Vector2d(this$static.x_0 + dx, this$static.y_0);
}

function $add_0(this$static, v){
  return new Vector2d(this$static.x_0 + v.x_0, this$static.y_0 + v.y_0);
}

function $rotate(this$static, phi){
  var a, b, c, d;
  a = $wnd.Math.cos(phi);
  b = -$wnd.Math.sin(phi);
  c = $wnd.Math.sin(phi);
  d = $wnd.Math.cos(phi);
  return new Vector2d(a * this$static.x_0 + b * this$static.y_0, c * this$static.x_0 + d * this$static.y_0);
}

function $scale(this$static){
  return new Vector2d(this$static.x_0 * 0.2, this$static.y_0 * 0.2);
}

function $stretch(this$static, mx, my){
  return new Vector2d(this$static.x_0 * mx, this$static.y_0 * my);
}

function Vector2d(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(22, 1, {}, Vector2d);
_.x_0 = 0;
_.y_0 = 0;
var Lde_itdesign_codebattle_visualizer_client_stores_model_Vector2d_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores.model', 'Vector2d', 22);
function $clinit_ColorProvider(){
  $clinit_ColorProvider = emptyMethod;
  COLORS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_15, 2, 6, ['#FFB347', '#4682B4']);
}

function $nextColor(this$static){
  this$static.nextColor - 1 > COLORS.length && (this$static.nextColor = 0);
  return COLORS[this$static.nextColor++];
}

function ColorProvider(){
  $clinit_ColorProvider();
}

defineClass(159, 1, {}, ColorProvider);
_.nextColor = 0;
var COLORS;
var Lde_itdesign_codebattle_visualizer_client_stores_provider_ColorProvider_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores.provider', 'ColorProvider', 159);
function ConfigProvider(){
  this.currentConfig = config_0;
}

defineClass(108, 1, {}, ConfigProvider);
var config_0;
var Lde_itdesign_codebattle_visualizer_client_stores_provider_ConfigProvider_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores.provider', 'ConfigProvider', 108);
function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ColorProvider$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ColorProvider$_annotation$$none$$) {
    created = new ColorProvider;
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ColorProvider$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ColorProvider$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ConfigProvider$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ConfigProvider$_annotation$$none$$) {
    created = new ConfigProvider;
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ConfigProvider$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ConfigProvider$_annotation$$none$$;
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_7(){
}

defineClass(152, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_7);
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ColorProvider$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$stores$provider$ConfigProvider$_annotation$$none$$ = null;
var Lde_itdesign_codebattle_visualizer_client_stores_provider_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.stores.provider', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 152);
function $convertPixelToGridCoordinates(this$static, pixelX, pixelY){
  var gridSize, x_0, y_0;
  gridSize = $getGridSize(this$static);
  x_0 = round_int(pixelX / gridSize.x_0);
  y_0 = round_int(pixelY / gridSize.y_0);
  return get_0(x_0, y_0);
}

function $getGridSize(this$static){
  var x_0, y_0;
  x_0 = this$static.sizeStore.width_0 / this$static.store.replay.map_0.length;
  y_0 = this$static.sizeStore.height_0 / this$static.store.replay.map_0[0].length;
  return new Vector2d(x_0, y_0);
}

function $getGridSize_0(this$static, gridX, gridY){
  return $stretch($getGridSize(this$static), gridX, gridY);
}

function $getGridSize_1(this$static, position){
  return $getGridSize_0(this$static, position.x_0, position.y_0);
}

function PositionConverter(store, sizeStore){
  this.store = store;
  this.sizeStore = sizeStore;
}

defineClass(162, 1, {}, PositionConverter);
var Lde_itdesign_codebattle_visualizer_client_util_PositionConverter_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.util', 'PositionConverter', 162);
function $get_Key$type$de$itdesign$codebattle$visualizer$client$util$PositionConverter$_annotation$$none$$(this$static){
  var result;
  result = new PositionConverter($get_Key$type$de$itdesign$codebattle$visualizer$client$stores$ReplayStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)), $get_Key$type$de$itdesign$codebattle$visualizer$client$stores$SizeStore$_annotation$$none$$($getFragment_de_itdesign_codebattle_visualizer_client_stores(this$static.injector)));
  return result;
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_8(injector){
  this.injector = injector;
}

defineClass(153, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_8);
var Lde_itdesign_codebattle_visualizer_client_util_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.util', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 153);
function $drawBaseField(this$static, position, color_0){
  $setFillStyleWeb(this$static.ctx, color_0);
  $fillRect(this$static.ctx, position.x_0, position.y_0, this$static.fieldSize.x_0, this$static.fieldSize.y_0);
  $drawImage_0(this$static.ctx, this$static.baseImage.canvas, position.x_0, position.y_0, this$static.fieldSize.x_0, this$static.fieldSize.y_0);
}

function $drawField(this$static, position, fieldType){
  var imageElement;
  imageElement = $get_0(this$static.fieldImages, fieldType);
  !!imageElement && $drawImage_0(this$static.ctx, imageElement.canvas, position.x_0, position.y_0, this$static.fieldSize.x_0, this$static.fieldSize.y_0);
}

function $setFieldSize(this$static, fieldSize){
  var canvasImage, canvasImage$iterator, entry, outerIter;
  this$static.fieldSize = fieldSize;
  for (canvasImage$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.fieldImages)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); canvasImage$iterator.val$outerIter2.hasNext;) {
    canvasImage = (entry = $next(canvasImage$iterator.val$outerIter2) , entry.getValue());
    $setDimension(canvasImage, fieldSize);
  }
  $setDimension(this$static.baseImage, fieldSize);
}

function $setSize(this$static, width_0, height){
  $setWidth(this$static.canvas, width_0);
  $setHeight(this$static.canvas, height);
}

function BaseMapViewCanvas(){
  this.fieldImages = new HashMap;
  this.canvas = $doc.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');
  $put(this.fieldImages, ($clinit_FieldType() , LAND), new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$landInitializer() , land)));
  $put(this.fieldImages, WATER, new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$waterInitializer() , water)));
  $put(this.fieldImages, WALL, new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$wallInitializer() , wall)));
  this.baseImage = new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$baseInitializer() , base_0));
}

defineClass(176, 1, {}, BaseMapViewCanvas);
var Lde_itdesign_codebattle_visualizer_client_view_BaseMapViewCanvas_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'BaseMapViewCanvas', 176);
function $setCurrentRoundLabel(this$static, currentRound){
  $setInnerText(this$static.rounds, ($clinit_String() , '' + currentRound));
}

function $setMaxSeek(this$static, maxSeek){
  $setAttribute(this$static.slider, 'max', ($clinit_String() , '' + maxSeek));
}

function $setPlayMode(this$static, playMode){
  switch (playMode) {
    case 1:
      this$static.playPause.className = 'fa fa-play';
      break;
    default:case 0:
      this$static.playPause.className = 'fa fa-pause';
  }
}

function $setSeekPosition(this$static, seekPosition){
  $setAttribute(this$static.slider, 'value', ($clinit_String() , '' + seekPosition));
}

function ControlViewHtml(eventBus){
  var e;
  this.div = $doc.createElement('div');
  this.div.style['marginBottom'] = ($clinit_Style$Unit() , '10.0px');
  this.div.style['marginTop'] = '5.0px';
  this.back_0 = $createButtonElement($doc, 'button');
  this.back_0.className = 'fa fa-step-backward';
  this.back_0.style['width'] = '28.0px';
  this.back_0.style['height'] = '28.0px';
  this.back_0.style['fontSize'] = '16.0px';
  setEventListener(this.back_0, new ControlViewHtml$lambda$0$Type(eventBus));
  sinkEvents(this.back_0, 1);
  this.playPause = $createButtonElement($doc, 'button');
  this.playPause.style['width'] = '56.0px';
  this.playPause.style['height'] = '28.0px';
  this.playPause.style['fontSize'] = '16.0px';
  setEventListener(this.playPause, new ControlViewHtml$lambda$1$Type(eventBus));
  sinkEvents(this.playPause, 1);
  this.next_0 = $createButtonElement($doc, 'button');
  this.next_0.className = 'fa fa-step-forward';
  this.next_0.style['width'] = '28.0px';
  this.next_0.style['height'] = '28.0px';
  this.next_0.style['fontSize'] = '16.0px';
  setEventListener(this.next_0, new ControlViewHtml$lambda$2$Type(eventBus));
  sinkEvents(this.next_0, 1);
  this.slider = (e = $doc.createElement('INPUT') , e.type = 'text' , e);
  this.slider.setAttribute('type', 'range');
  this.slider.style['height'] = '13.0px';
  this.slider.style['marginLeft'] = '18.0px';
  workaroundEventBus = eventBus;
  workaroundSlider = this.slider;
  $wnd.sliderinputworkaround = onInputWorkaround;
  this.slider.setAttribute('oninput', 'window.sliderinputworkaround()');
  this.rounds = $doc.createElement('span');
  this.rounds.textContent = 'Press Play';
  this.rounds.style['width'] = '50.0px';
  this.rounds.style['textAlign'] = ($clinit_Style$TextAlign() , 'right');
  this.rounds.style['fontFamily'] = 'monospace';
  this.rounds.style['fontSize'] = '16.0px';
  $appendChild(this.div, this.back_0);
  $appendChild(this.div, this.playPause);
  $appendChild(this.div, this.next_0);
  $appendChild(this.div, this.slider);
  $appendChild(this.div, this.rounds);
}

function onInputWorkaround(){
  !!workaroundEventBus && !!workaroundSlider && $doFire(workaroundEventBus, new SeekEvent(valueOf_0(__parseAndValidateInt(workaroundSlider.value)).value_0));
}

defineClass(169, 1, {}, ControlViewHtml);
var workaroundEventBus, workaroundSlider;
var Lde_itdesign_codebattle_visualizer_client_view_ControlViewHtml_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'ControlViewHtml', 169);
function ControlViewHtml$lambda$0$Type(eventBus_0){
  this.eventBus_0 = eventBus_0;
}

defineClass(170, 1, $intern_25, ControlViewHtml$lambda$0$Type);
_.onBrowserEvent = function onBrowserEvent(arg0){
  $doFire(this.eventBus_0, new PreviousRoundEvent);
}
;
var Lde_itdesign_codebattle_visualizer_client_view_ControlViewHtml$lambda$0$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'ControlViewHtml/lambda$0$Type', 170);
function ControlViewHtml$lambda$1$Type(eventBus_0){
  this.eventBus_0 = eventBus_0;
}

defineClass(171, 1, $intern_25, ControlViewHtml$lambda$1$Type);
_.onBrowserEvent = function onBrowserEvent_0(arg0){
  $doFire(this.eventBus_0, new TogglePlayModeEvent);
}
;
var Lde_itdesign_codebattle_visualizer_client_view_ControlViewHtml$lambda$1$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'ControlViewHtml/lambda$1$Type', 171);
function ControlViewHtml$lambda$2$Type(eventBus_0){
  this.eventBus_0 = eventBus_0;
}

defineClass(172, 1, $intern_25, ControlViewHtml$lambda$2$Type);
_.onBrowserEvent = function onBrowserEvent_1(arg0){
  $doFire(this.eventBus_0, new NextRoundEvent);
}
;
var Lde_itdesign_codebattle_visualizer_client_view_ControlViewHtml$lambda$2$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'ControlViewHtml/lambda$2$Type', 172);
function $addPlayer(this$static, name_0, color_0, allUnits, hiddenUnits, unitsOnMap){
  $addRow(this$static.table, color_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_15, 2, 6, [name_0, ($clinit_String() , '' + allUnits), '' + hiddenUnits, '' + unitsOnMap]));
}

function InfoBoardViewHtml(){
  this.table = new Table_0(4);
  $updateHeader(this.table, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_15, 2, 6, ['Name', 'Total Units', 'Hidden Units', 'Units on Map']));
}

defineClass(167, 1, {}, InfoBoardViewHtml);
var Lde_itdesign_codebattle_visualizer_client_view_InfoBoardViewHtml_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'InfoBoardViewHtml', 167);
function $clear_0(this$static){
  $clearRect(this$static.ctx, 0, 0, this$static.canvas.width, this$static.canvas.height);
}

function $drawArrow(this$static, color_0, width_0, source, target, arrowStyle){
  var arrowHeadDown, arrowHeadUp, direction;
  switch (arrowStyle) {
    case 0:
      source = $add_0(source, this$static.halfFieldSize);
      target = $add_0(target, this$static.halfFieldSize);
      break;
    case 1:
      source = $add_0(source, $stretch(this$static.halfFieldSize, 0.5, 1));
      target = $add_0(target, $stretch(this$static.halfFieldSize, 0.5, 1));
      break;
    case 2:
      source = $add_0(source, $stretch(this$static.halfFieldSize, 1.5, 1));
      target = $add_0(target, $stretch(this$static.halfFieldSize, 1.5, 1));
  }
  direction = $scale(new Vector2d(source.x_0 - target.x_0, source.y_0 - target.y_0));
  arrowHeadUp = $add_0(target, $rotate(direction, -0.7853981633974483));
  arrowHeadDown = $add_0(target, $rotate(direction, 0.7853981633974483));
  $setStrokeStyleWeb(this$static.ctx, color_0);
  $setLineWidth(this$static.ctx, width_0);
  this$static.ctx.beginPath();
  $moveTo(this$static.ctx, source.x_0, source.y_0);
  $lineTo(this$static.ctx, target.x_0, target.y_0);
  $moveTo(this$static.ctx, arrowHeadUp.x_0, arrowHeadUp.y_0);
  $lineTo(this$static.ctx, target.x_0, target.y_0);
  $lineTo(this$static.ctx, arrowHeadDown.x_0, arrowHeadDown.y_0);
  $lineTo(this$static.ctx, target.x_0, target.y_0);
  this$static.ctx.closePath();
  this$static.ctx.stroke();
}

function $drawBar(this$static, position, size_0, color_0){
  $setFillStyleWeb(this$static.ctx, color_0);
  $fillRect(this$static.ctx, position.x_0, position.y_0, size_0.x_0, size_0.y_0);
}

function $drawBaseMap(this$static){
  $drawImage(this$static.ctx, this$static.baseMapView.canvas, 0, 0);
}

function $drawHintBox(this$static, position, width_0, height){
  this$static.ctx.fillStyle = '#111111';
  $fillRect(this$static.ctx, position.x_0, position.y_0, width_0, height);
}

function $drawHoverLocation(this$static, position){
  this$static.ctx.strokeStyle = '#ffffff';
  this$static.ctx.lineWidth = 1;
  this$static.ctx.beginPath();
  $moveTo(this$static.ctx, position.x_0, position.y_0);
  $lineTo(this$static.ctx, position.x_0 + this$static.fieldSize.x_0, position.y_0);
  $lineTo(this$static.ctx, position.x_0 + this$static.fieldSize.x_0, position.y_0 + this$static.fieldSize.y_0);
  $lineTo(this$static.ctx, position.x_0, position.y_0 + this$static.fieldSize.y_0);
  $lineTo(this$static.ctx, position.x_0, position.y_0);
  this$static.ctx.closePath();
  this$static.ctx.stroke();
}

function $drawResource(this$static, position){
  $drawImage_0(this$static.ctx, this$static.resourceImage.canvas, position.x_0, position.y_0, this$static.fieldSize.x_0, this$static.fieldSize.y_0);
  this$static.ctx.fillStyle = '#ff0';
}

function $drawText(this$static, color_0, position, text_0){
  $setFillStyleWeb(this$static.ctx, color_0);
  this$static.ctx.font = '12px sans-serif';
  $fillText(this$static.ctx, text_0, position.x_0, position.y_0 + 12);
}

function $drawUnit_0(this$static, position, unitType, color_0){
  var imageElement, radius;
  imageElement = $get_0(this$static.unitImages, unitType);
  if (imageElement) {
    $setFillStyleWeb(this$static.ctx, color_0);
    radius = $wnd.Math.min(this$static.fieldSize.x_0, this$static.fieldSize.y_0) / 2;
    this$static.ctx.beginPath();
    $arc(this$static.ctx, position.x_0 + this$static.halfFieldSize.x_0, position.y_0 + this$static.halfFieldSize.y_0, radius, 0, 6.283185307179586);
    this$static.ctx.closePath();
    this$static.ctx.fill();
    $drawImage_0(this$static.ctx, imageElement.canvas, position.x_0, position.y_0, this$static.fieldSize.x_0, this$static.fieldSize.y_0);
  }
}

function $getTextWidth(this$static, text_0){
  this$static.ctx.font = '12px sans-serif';
  return $measureText(this$static.ctx, text_0).width;
}

function $setFieldSize_0(this$static, size_0){
  var canvasImage, canvasImage$iterator, entry, outerIter;
  this$static.fieldSize = size_0;
  this$static.halfFieldSize = new Vector2d(size_0.x_0 * 0.5, size_0.y_0 * 0.5);
  for (canvasImage$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.unitImages)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); canvasImage$iterator.val$outerIter2.hasNext;) {
    canvasImage = (entry = $next(canvasImage$iterator.val$outerIter2) , entry.getValue());
    $setDimension(canvasImage, size_0);
  }
  $setDimension(this$static.resourceImage, size_0);
}

function $setSize_0(this$static, width_0, height){
  $setWidth(this$static.canvas, width_0);
  $setHeight(this$static.canvas, height);
}

function MapViewCanvas(eventBus, baseMapView){
  this.baseMapView = baseMapView;
  this.canvas = $doc.createElement('canvas');
  this.canvas.style['cursor'] = ($clinit_Style$Cursor() , 'pointer');
  setEventListener(this.canvas, new MapViewCanvas$lambda$0$Type(eventBus));
  sinkEvents(this.canvas, 96);
  this.ctx = this.canvas.getContext('2d');
  $setLineCap(this.ctx, ($clinit_Context2d$LineCap() , ROUND).value_0);
  this.unitImages = new HashMap;
  $put(this.unitImages, ($clinit_UnitType() , COLLECTOR), new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$collectorInitializer() , collector_0)));
  $put(this.unitImages, WARRIOR, new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$warriorInitializer() , warrior)));
  $put(this.unitImages, ARCHER, new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$archerInitializer() , archer)));
  this.resourceImage = new CanvasImage(($clinit_ViewResources_default_InlineClientBundleGenerator$resourceInitializer() , resource_0));
}

function lambda$0_0(eventBus_0, e_1){
  var target, x_0, y_0, target_0, rect, left, rect_0, top_0;
  switch ($clinit_DOM() , $eventGetTypeInt(e_1.type)) {
    case 64:
      target = (target_0 = e_1.target , target_0 && target_0.nodeType == 3 && (target_0 = target_0.parentNode) , target_0);
      x_0 = ((e_1.clientX || 0) | 0) - (rect = target.getBoundingClientRect && target.getBoundingClientRect() , left = rect?rect.left + $getScrollLeft_0(target.ownerDocument.body):getAbsoluteLeftUsingOffsets(target) , left | 0) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
      y_0 = ((e_1.clientY || 0) | 0) - (rect_0 = target.getBoundingClientRect && target.getBoundingClientRect() , top_0 = rect_0?rect_0.top + ((target.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(target) , top_0 | 0) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument);
      $doFire(eventBus_0, new HoverEvent(x_0, y_0));
      break;
    case 32:
      $doFire(eventBus_0, new HoverEvent(-1, -1));
  }
}

defineClass(165, 1, {}, MapViewCanvas);
var Lde_itdesign_codebattle_visualizer_client_view_MapViewCanvas_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'MapViewCanvas', 165);
function MapViewCanvas$lambda$0$Type(eventBus_0){
  this.eventBus_0 = eventBus_0;
}

defineClass(166, 1, $intern_25, MapViewCanvas$lambda$0$Type);
_.onBrowserEvent = function onBrowserEvent_2(arg0){
  lambda$0_0(this.eventBus_0, arg0);
}
;
var Lde_itdesign_codebattle_visualizer_client_view_MapViewCanvas$lambda$0$Type_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'MapViewCanvas/lambda$0$Type', 166);
function $addPlayer_0(this$static, rank, name_0, color_0, resources){
  $addRow(this$static.table, color_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_15, 2, 6, [($clinit_String() , '' + rank), name_0, '' + resources]));
}

function ScoreBoardViewHtml(){
  this.table = new Table_0(3);
  $updateHeader(this.table, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_15, 2, 6, ['Rank', 'Name', 'Resources']));
}

defineClass(168, 1, {}, ScoreBoardViewHtml);
var Lde_itdesign_codebattle_visualizer_client_view_ScoreBoardViewHtml_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'ScoreBoardViewHtml', 168);
function $get_Key$type$de$itdesign$codebattle$visualizer$client$view$BaseMapViewCanvas$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$BaseMapViewCanvas$_annotation$$none$$) {
    result = ($getFragment_de_itdesign_codebattle_visualizer_client_html(this$static.injector) , $getFragment_de_itdesign_codebattle_visualizer_client_resources(this$static.injector) , new BaseMapViewCanvas);
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$BaseMapViewCanvas$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$BaseMapViewCanvas$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$view$ControlViewHtml$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ControlViewHtml$_annotation$$none$$) {
    result = new ControlViewHtml($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ControlViewHtml$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ControlViewHtml$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$view$InfoBoardViewHtml$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$InfoBoardViewHtml$_annotation$$none$$) {
    created = new InfoBoardViewHtml;
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$InfoBoardViewHtml$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$InfoBoardViewHtml$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$view$MapViewCanvas$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$MapViewCanvas$_annotation$$none$$) {
    result = new MapViewCanvas($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), ($getFragment_de_itdesign_codebattle_visualizer_client_html(this$static.injector) , $get_Key$type$de$itdesign$codebattle$visualizer$client$view$BaseMapViewCanvas$_annotation$$none$$(this$static)));
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$MapViewCanvas$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$MapViewCanvas$_annotation$$none$$;
}

function $get_Key$type$de$itdesign$codebattle$visualizer$client$view$ScoreBoardViewHtml$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ScoreBoardViewHtml$_annotation$$none$$) {
    created = new ScoreBoardViewHtml;
    this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ScoreBoardViewHtml$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ScoreBoardViewHtml$_annotation$$none$$;
}

function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_9(injector){
  this.injector = injector;
}

defineClass(147, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_9);
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$BaseMapViewCanvas$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ControlViewHtml$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$InfoBoardViewHtml$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$MapViewCanvas$_annotation$$none$$ = null;
_.singleton_Key$type$de$itdesign$codebattle$visualizer$client$view$ScoreBoardViewHtml$_annotation$$none$$ = null;
var Lde_itdesign_codebattle_visualizer_client_view_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('de.itdesign.codebattle.visualizer.client.view', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 147);
function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_10(){
}

defineClass(156, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_10);
var Lelemental_gin_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('elemental.gin', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 156);
function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_11(injector){
  this.injector = injector;
}

defineClass(157, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment_11);
var Lelemental_html_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('elemental.html', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment', 157);
function de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment$1_0(this$0){
  this.this$01 = this$0;
}

defineClass(158, 1, {}, de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment$1_0);
var Lelemental_html_de_1itdesign_1codebattle_1visualizer_1client_1ClientModule_1Injector_1InjectorGinjector_1fragment$1_2_classLit = createForClass('elemental.html', 'de_itdesign_codebattle_visualizer_client_ClientModule_Injector_InjectorGinjector_fragment/1', 158);
function $debug(this$static, arg){
  this$static.debug(arg);
}

function $error(this$static, arg){
  this$static.error(arg);
}

function $parse(jsonString){
  var value_0;
  try {
    return value_0 = $wnd.JSON.parse(jsonString) , value_0;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 12)) {
      throw toJs(new JsonException("Can't parse " + jsonString));
    }
     else 
      throw toJs($e0);
  }
}

function $valueProd(this$static){
  return this$static && this$static.valueOf();
}

function $keys0(this$static){
  var keys_0 = [];
  for (var key in this$static) {
    Object.prototype.hasOwnProperty.call(this$static, key) && key != '$H' && keys_0.push(key);
  }
  return keys_0;
}

function get_10(url_0, callback){
  request(new $wnd.XMLHttpRequest, url_0, callback);
}

function request(xhr, url_0, callback){
  try {
    $setOnReadyStateChange(xhr, new Xhr$Handler(callback));
    xhr.open('GET', url_0, true);
    xhr.send(null);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 46)) {
      $onFinished(callback.val$result2, new ServiceResult);
      $clearOnReadyStateChange(xhr);
    }
     else 
      throw toJs($e0);
  }
}

function Xhr$Handler(callback){
  this.callback = callback;
}

defineClass(117, 1, {}, Xhr$Handler);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      $onSuccess(this.callback, xhr);
      $clearOnReadyStateChange(xhr);
      return;
    }
    $onFinished(this.callback.val$result2, new ServiceResult);
    $clearOnReadyStateChange(xhr);
  }
}
;
var Lelemental_js_util_Xhr$Handler_2_classLit = createForClass('elemental.js.util', 'Xhr/Handler', 117);
function JsonException(s){
  $clinit_Throwable();
  RuntimeException_0.call(this, s);
}

defineClass(148, 21, $intern_0, JsonException);
var Lelemental_json_JsonException_2_classLit = createForClass('elemental.json', 'JsonException', 148);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(61, 1, {});
_.toString_0 = function toString_12(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 61);
function ArithmeticException(explanation){
  $clinit_Throwable();
  RuntimeException_0.call(this, explanation);
}

defineClass(83, 21, $intern_0, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 83);
function IllegalStateException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

defineClass(94, 21, $intern_0, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 94);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_15, 29, 256, 0, 1);
}

var boxedValues;
function floorMod(dividend, divisor){
  var r;
  return dividend - (throwDivByZeroIf(divisor == 0) , r = dividend / divisor | 0 , (dividend ^ divisor) < 0 && r * divisor != dividend && --r , r) * divisor;
}

function throwDivByZeroIf(condition){
  if (condition) {
    throw toJs(new ArithmeticException('div by zero'));
  }
}

function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(43, 61, {258:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
_.toString_0 = function toString_18(){
  return this.string;
}
;
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 43);
function UnsupportedOperationException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  $clinit_Throwable();
  RuntimeException_0.call(this, message);
}

defineClass(39, 21, $intern_0, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 39);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toString_2(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_3(joiner, e === this$static?'(this Collection)':($clinit_String() , e == null?'null':toString__Ljava_lang_String___devirtual$(e)));
  }
  return !joiner.builder?joiner.emptyValue:toNative(joiner.suffix).length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(253, 1, {});
_.equals = function equals_8(other){
  return this === other;
}
;
_.hashCode = function hashCode_8(){
  return getObjectIdentityHashCode(this);
}
;
_.toString_0 = function toString_20(){
  return $toString_2(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 253);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext_0();) {
    entry = iter.next_1();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_3(this$static, o){
  return o === this$static?'(this Map)':($clinit_String() , o == null?'null':toString__Ljava_lang_String___devirtual$(o));
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(255, 1, {77:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 77)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_11(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode = function hashCode_9(){
  return hashCode_14(this.entrySet());
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_1(){
  return this.entrySet().size_1();
}
;
_.toString_0 = function toString_21(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    $add_3(joiner, $toString_3(this, entry.getKey()) + '=' + $toString_3(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:toNative(joiner.suffix).length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 255);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_0(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_2(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove(this$static, key){
  return instanceOfString(key)?key == null?$remove_4(this$static.hashCodeMap, null):$remove_5(this$static.stringMap, key):$remove_4(this$static.hashCodeMap, key);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(173, 255, {77:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_12(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 173);
defineClass(256, 253, {59:1});
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.equals = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 59)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode = function hashCode_10(){
  return hashCode_14(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 256);
function $contains(this$static, o){
  if (instanceOf(o, 51)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(18, 256, {59:1}, AbstractHashMap$EntrySet);
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 18);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = this$static.current.next_1();
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_0(this$static){
  var modCount;
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  modCount = this$static.this$01['_gwt_modCount'];
  this$static['_gwt_modCount'] = modCount;
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(19, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.remove = function remove(){
  $remove_0(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 19);
defineClass(254, 253, {99:1});
_.add_0 = function add_0(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_1 = function add_1(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals = function equals_11(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 99)) {
    return false;
  }
  other = o;
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode = function hashCode_11(){
  return hashCode_15(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_0 = function remove_0(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 254);
function $remove_1(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(88, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_0(){
  return checkCriticalElement(this.hasNext_0()) , this.this$01_0.get_2(this.last = this.i++);
}
;
_.remove = function remove_1(){
  $remove_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 88);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(89, 88, {}, AbstractList$ListIteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_1(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_2(this.last = this.i++);
}
;
_.remove = function remove_2(){
  $remove_1(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_2(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 89);
function $contains_0(this$static, key){
  return $containsKey(this$static.this$01, key);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(24, 256, {59:1}, AbstractMap$1);
_.contains = function contains_1(key){
  return $contains_0(this, key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 24);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(40, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_2(){
  var entry;
  return entry = $next(this.val$outerIter2) , entry.getKey();
}
;
_.remove = function remove_3(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 40);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(70, 253, {}, AbstractMap$2);
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 70);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(54, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_3(){
  var entry;
  return entry = $next(this.val$outerIter2) , entry.getValue();
}
;
_.remove = function remove_4(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 54);
defineClass(174, 1, $intern_26);
_.equals = function equals_12(other){
  var entry;
  if (!instanceOf(other, 51)) {
    return false;
  }
  entry = other;
  return equals_15(this.key, entry.getKey()) && equals_15(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode = function hashCode_12(){
  return hashCode_16(this.key) ^ hashCode_16(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_22(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 174);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(175, 174, $intern_26, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 175);
defineClass(257, 1, $intern_26);
_.equals = function equals_13(other){
  var entry;
  if (!instanceOf(other, 51)) {
    return false;
  }
  entry = other;
  return equals_15(this.val$entry2.value[0], entry.getKey()) && equals_15($getValue(this), entry.getValue());
}
;
_.hashCode = function hashCode_13(){
  return hashCode_16(this.val$entry2.value[0]) ^ hashCode_16($getValue(this));
}
;
_.toString_0 = function toString_23(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 257);
function $add_1(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_1(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $remove_2(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
}

defineClass(38, 254, {3:1, 4:1, 99:1}, ArrayList);
_.add_0 = function add_2(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_1 = function add_3(o){
  return $add_1(this, o);
}
;
_.get_2 = function get_13(index_0){
  return $get_1(this, index_0);
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.remove_0 = function remove_5(index_0){
  return $remove_2(this, index_0);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 38);
function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(48, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_4(){
  return $next_0(this);
}
;
_.remove = function remove_6(){
  checkCriticalState(this.last != -1);
  $remove_2(this.this$01, this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 48);
function getCopyLength(array, from, to){
  var len;
  checkCriticalArgument_1(from <= to, '%s > %s', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 5, [valueOf_0(from), valueOf_0(to)]));
  len = array.length;
  to = to < len?to:len;
  checkCriticalPositionIndexes(from, to, len);
  return to - from;
}

function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      array[j] = array[j - 1];
      array[j - 1] = t;
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?(dest[destLow++] = src_0[srcLow++]):(dest[destLow++] = src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp, len, copy, result;
  !comp && (comp = ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  temp = (len = getCopyLength(x_0, fromIndex, toIndex) , copy = (result = new Array(toIndex - fromIndex) , stampJavaTypeInfo_0(result, x_0)) , copy_0(x_0, fromIndex, copy, 0, len) , copy);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      array[low++] = temp[tempLow++];
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  new Collections$EmptyMap;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_14(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_15(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function replaceContents(target, x_0){
  var i, size_0, previous;
  size_0 = target.array.length;
  for (i = 0; i < size_0; i++) {
    previous = (checkCriticalElementIndex(i, target.array.length) , target.array[i]);
    target.array[i] = x_0[i];
  }
}

function sort_0(target, c){
  $clinit_Collections();
  var x_0;
  x_0 = clone_2(target.array, target.array.length);
  mergeSort(x_0, 0, x_0.length, c);
  replaceContents(target, x_0);
}

var EMPTY_LIST, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(177, 254, {3:1, 99:1}, Collections$EmptyList);
_.get_2 = function get_14(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_6(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 177);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(178, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_5(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove = function remove_7(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 178);
function Collections$EmptyMap(){
}

defineClass(180, 255, {3:1, 77:1}, Collections$EmptyMap);
_.containsKey = function containsKey_1(key){
  return false;
}
;
_.entrySet = function entrySet_0(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_1 = function get_15(key){
  return null;
}
;
_.size_1 = function size_7(){
  return 0;
}
;
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 180);
function Collections$EmptySet(){
}

defineClass(179, 256, {3:1, 59:1}, Collections$EmptySet);
_.contains = function contains_2(object){
  return false;
}
;
_.iterator = function iterator_6(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_8(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 179);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$lambda$0$Type;
}

var NATURAL;
function Comparators$lambda$0$Type(){
}

defineClass(236, 1, {}, Comparators$lambda$0$Type);
_.equals = function equals_14(other){
  return this === other;
}
;
_.compare = function compare_5(arg0, arg1){
  return $clinit_Comparators() , compareTo_Ljava_lang_Object__I__devirtual$((checkCriticalNotNull(arg0) , arg0), (checkCriticalNotNull(arg1) , arg1));
}
;
var Ljava_util_Comparators$lambda$0$Type_2_classLit = createForClass('java.util', 'Comparators/lambda$0$Type', 236);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

defineClass(234, 21, $intern_0, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 234);
function $equals_1(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  var modCount;
  this.hashCodeMap = new InternalHashCodeMap(this);
  this.stringMap = new InternalStringMap(this);
  modCount = this['_gwt_modCount'] | 0;
  this['_gwt_modCount'] = modCount + 1;
}

defineClass(13, 173, {3:1, 4:1, 77:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 13);
function $add_2(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_3(this$static, o){
  return $remove(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(55, 256, {3:1, 4:1, 59:1}, HashSet);
_.contains = function contains_3(o){
  return $contains_1(this, o);
}
;
_.isEmpty = function isEmpty_0(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_9(){
  return $size(this.map_0);
}
;
_.toString_0 = function toString_24(){
  return $toString_2(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 55);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  chain0[chain0.length] = new AbstractMap$SimpleEntry(key, value_0);
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_4(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(183, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_8(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 183);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(93, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_6(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_6(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove = function remove_8(){
  $remove_4(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 93);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_2(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_5(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(181, 1, {}, InternalStringMap);
_.iterator = function iterator_9(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 181);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(92, 1, {}, InternalStringMap$1);
_.next_1 = function next_7(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_7(){
  return !this.current.done;
}
;
_.remove = function remove_9(){
  $remove_5(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 92);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_2(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(182, 257, $intern_26, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 182);
function NoSuchElementException(){
  $clinit_Throwable();
  RuntimeException.call(this);
}

defineClass(72, 21, $intern_0, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 72);
function equals_15(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_16(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Optional(){
  $clinit_Optional = emptyMethod;
  EMPTY = new Optional;
}

function $ifPresent(this$static, consumer){
  this$static.ref != null && $accept(consumer, this$static.ref);
}

function Optional(){
  this.ref = null;
}

function Optional_0(ref){
  this.ref = checkCriticalNotNull(ref);
}

function ofNullable(value_0){
  $clinit_Optional();
  return value_0 == null?EMPTY:new Optional_0(value_0);
}

defineClass(57, 1, {57:1}, Optional, Optional_0);
_.equals = function equals_16(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 57)) {
    return false;
  }
  other = obj;
  return equals_15(this.ref, other.ref);
}
;
_.hashCode = function hashCode_17(){
  return hashCode_16(this.ref);
}
;
_.toString_0 = function toString_25(){
  return this.ref != null?'Optional.of(' + valueOf_1(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 57);
function $add_3(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_2(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  checkCriticalNotNull_0(', ', 'delimiter');
  checkCriticalNotNull_0(prefix, 'prefix');
  checkCriticalNotNull_0(suffix, 'suffix');
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(80, 1, {}, StringJoiner);
_.toString_0 = function toString_26(){
  return !this.builder?this.emptyValue:toNative(this.suffix).length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 80);
var C_classLit = createForPrimitive('char', 'C');
_ = provide('codebattle.Visualizer', Visualizer);
$clinit_Boolean();
_ = provide('java.lang.Boolean');
_.$create__boolean = $createBoolean_0;
_.$create__java_lang_String = $createBoolean;
_.$isInstance = $isInstance;
_ = provide('java.lang.Double');
_.$create__double = $createDouble;
_.$create__java_lang_String = $createDouble_0;
_.$isInstance = $isInstance_1;
_ = provide('java.lang.Number');
_.$isInstance = $isInstance_0;
$clinit_String();
_ = provide('java.lang.String');
_.$create = $createString;
_.$create__arrayOf_byte = $createString_3;
_.$create__arrayOf_byte__int__int = $createString_4;
_.$create__arrayOf_byte__int__int__java_lang_String = $createString_5;
_.$create__arrayOf_byte__int__int__java_nio_charset_Charset = $createString_6;
_.$create__arrayOf_byte__java_lang_String = $createString_7;
_.$create__arrayOf_byte__java_nio_charset_Charset = $createString_8;
_.$create__arrayOf_char = $createString_9;
_.$create__arrayOf_char__int__int = $createString_10;
_.$create__arrayOf_int__int__int = $createString_11;
_.$create__java_lang_String = $createString_0;
_.$create__java_lang_StringBuffer = $createString_1;
_.$create__java_lang_StringBuilder = $createString_2;
_.$isInstance = $isInstance_2;
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
if (codebattle_visualizer) codebattle_visualizer.onScriptLoad(gwtOnLoad);})();