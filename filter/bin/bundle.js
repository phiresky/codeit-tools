System.registerDynamic("npm:react@15.0.2/lib/FallbackCompositionState.js", ["object-assign", "./PooledClass", "./getTextContentAccessor", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var PooledClass = $__require('./PooledClass');
  var getTextContentAccessor = $__require('./getTextContentAccessor');
  function FallbackCompositionState(root) {
    this._root = root;
    this._startText = this.getText();
    this._fallbackText = null;
  }
  _assign(FallbackCompositionState.prototype, {
    destructor: function() {
      this._root = null;
      this._startText = null;
      this._fallbackText = null;
    },
    getText: function() {
      if ('value' in this._root) {
        return this._root.value;
      }
      return this._root[getTextContentAccessor()];
    },
    getData: function() {
      if (this._fallbackText) {
        return this._fallbackText;
      }
      var start;
      var startValue = this._startText;
      var startLength = startValue.length;
      var end;
      var endValue = this.getText();
      var endLength = endValue.length;
      for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
          break;
        }
      }
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
          break;
        }
      }
      var sliceTail = end > 1 ? 1 - end : undefined;
      this._fallbackText = endValue.slice(start, sliceTail);
      return this._fallbackText;
    }
  });
  PooledClass.addPoolingTo(FallbackCompositionState);
  module.exports = FallbackCompositionState;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticCompositionEvent.js", ["./SyntheticEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('./SyntheticEvent');
  var CompositionEventInterface = {data: null};
  function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
  module.exports = SyntheticCompositionEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticInputEvent.js", ["./SyntheticEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('./SyntheticEvent');
  var InputEventInterface = {data: null};
  function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
  module.exports = SyntheticInputEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/BeforeInputEventPlugin.js", ["./EventConstants", "./EventPropagators", "fbjs/lib/ExecutionEnvironment", "./FallbackCompositionState", "./SyntheticCompositionEvent", "./SyntheticInputEvent", "fbjs/lib/keyOf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('./EventConstants');
  var EventPropagators = $__require('./EventPropagators');
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var FallbackCompositionState = $__require('./FallbackCompositionState');
  var SyntheticCompositionEvent = $__require('./SyntheticCompositionEvent');
  var SyntheticInputEvent = $__require('./SyntheticInputEvent');
  var keyOf = $__require('fbjs/lib/keyOf');
  var END_KEYCODES = [9, 13, 27, 32];
  var START_KEYCODE = 229;
  var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;
  var documentMode = null;
  if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
    documentMode = document.documentMode;
  }
  var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();
  var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
  function isPresto() {
    var opera = window.opera;
    return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
  }
  var SPACEBAR_CODE = 32;
  var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: keyOf({onBeforeInput: null}),
        captured: keyOf({onBeforeInputCapture: null})
      },
      dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionEnd: null}),
        captured: keyOf({onCompositionEndCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionStart: null}),
        captured: keyOf({onCompositionStartCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionUpdate: null}),
        captured: keyOf({onCompositionUpdateCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    }
  };
  var hasSpaceKeypress = false;
  function isKeypressCommand(nativeEvent) {
    return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
  }
  function getCompositionEventType(topLevelType) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionStart:
        return eventTypes.compositionStart;
      case topLevelTypes.topCompositionEnd:
        return eventTypes.compositionEnd;
      case topLevelTypes.topCompositionUpdate:
        return eventTypes.compositionUpdate;
    }
  }
  function isFallbackCompositionStart(topLevelType, nativeEvent) {
    return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
  }
  function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topKeyUp:
        return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
      case topLevelTypes.topKeyDown:
        return nativeEvent.keyCode !== START_KEYCODE;
      case topLevelTypes.topKeyPress:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topBlur:
        return true;
      default:
        return false;
    }
  }
  function getDataFromCustomEvent(nativeEvent) {
    var detail = nativeEvent.detail;
    if (typeof detail === 'object' && 'data' in detail) {
      return detail.data;
    }
    return null;
  }
  var currentComposition = null;
  function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var eventType;
    var fallbackData;
    if (canUseCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }
    if (!eventType) {
      return null;
    }
    if (useFallbackCompositionData) {
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = FallbackCompositionState.getPooled(nativeEventTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          fallbackData = currentComposition.getData();
        }
      }
    }
    var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
    if (fallbackData) {
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);
      if (customData !== null) {
        event.data = customData;
      }
    }
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionEnd:
        return getDataFromCustomEvent(nativeEvent);
      case topLevelTypes.topKeyPress:
        var which = nativeEvent.which;
        if (which !== SPACEBAR_CODE) {
          return null;
        }
        hasSpaceKeypress = true;
        return SPACEBAR_CHAR;
      case topLevelTypes.topTextInput:
        var chars = nativeEvent.data;
        if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
          return null;
        }
        return chars;
      default:
        return null;
    }
  }
  function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    if (currentComposition) {
      if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
        var chars = currentComposition.getData();
        FallbackCompositionState.release(currentComposition);
        currentComposition = null;
        return chars;
      }
      return null;
    }
    switch (topLevelType) {
      case topLevelTypes.topPaste:
        return null;
      case topLevelTypes.topKeyPress:
        if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
          return String.fromCharCode(nativeEvent.which);
        }
        return null;
      case topLevelTypes.topCompositionEnd:
        return useFallbackCompositionData ? null : nativeEvent.data;
      default:
        return null;
    }
  }
  function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var chars;
    if (canUseTextInputEvent) {
      chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    } else {
      chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }
    if (!chars) {
      return null;
    }
    var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);
    event.data = chars;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  var BeforeInputEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
    }
  };
  module.exports = BeforeInputEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ChangeEventPlugin.js", ["./EventConstants", "./EventPluginHub", "./EventPropagators", "fbjs/lib/ExecutionEnvironment", "./ReactDOMComponentTree", "./ReactUpdates", "./SyntheticEvent", "./getEventTarget", "./isEventSupported", "./isTextInputElement", "fbjs/lib/keyOf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('./EventConstants');
  var EventPluginHub = $__require('./EventPluginHub');
  var EventPropagators = $__require('./EventPropagators');
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactUpdates = $__require('./ReactUpdates');
  var SyntheticEvent = $__require('./SyntheticEvent');
  var getEventTarget = $__require('./getEventTarget');
  var isEventSupported = $__require('./isEventSupported');
  var isTextInputElement = $__require('./isTextInputElement');
  var keyOf = $__require('fbjs/lib/keyOf');
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {change: {
      phasedRegistrationNames: {
        bubbled: keyOf({onChange: null}),
        captured: keyOf({onChangeCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
    }};
  var activeElement = null;
  var activeElementInst = null;
  var activeElementValue = null;
  var activeElementValueProp = null;
  function shouldUseChangeEvent(elem) {
    var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
  }
  var doesChangeEventBubble = false;
  if (ExecutionEnvironment.canUseDOM) {
    doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
  }
  function manualDispatchChangeEvent(nativeEvent) {
    var event = SyntheticEvent.getPooled(eventTypes.change, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
    EventPropagators.accumulateTwoPhaseDispatches(event);
    ReactUpdates.batchedUpdates(runEventInBatch, event);
  }
  function runEventInBatch(event) {
    EventPluginHub.enqueueEvents(event);
    EventPluginHub.processEventQueue(false);
  }
  function startWatchingForChangeEventIE8(target, targetInst) {
    activeElement = target;
    activeElementInst = targetInst;
    activeElement.attachEvent('onchange', manualDispatchChangeEvent);
  }
  function stopWatchingForChangeEventIE8() {
    if (!activeElement) {
      return;
    }
    activeElement.detachEvent('onchange', manualDispatchChangeEvent);
    activeElement = null;
    activeElementInst = null;
  }
  function getTargetInstForChangeEvent(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topChange) {
      return targetInst;
    }
  }
  function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
    if (topLevelType === topLevelTypes.topFocus) {
      stopWatchingForChangeEventIE8();
      startWatchingForChangeEventIE8(target, targetInst);
    } else if (topLevelType === topLevelTypes.topBlur) {
      stopWatchingForChangeEventIE8();
    }
  }
  var isInputEventSupported = false;
  if (ExecutionEnvironment.canUseDOM) {
    isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 11);
  }
  var newValueProp = {
    get: function() {
      return activeElementValueProp.get.call(this);
    },
    set: function(val) {
      activeElementValue = '' + val;
      activeElementValueProp.set.call(this, val);
    }
  };
  function startWatchingForValueChange(target, targetInst) {
    activeElement = target;
    activeElementInst = targetInst;
    activeElementValue = target.value;
    activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
    Object.defineProperty(activeElement, 'value', newValueProp);
    if (activeElement.attachEvent) {
      activeElement.attachEvent('onpropertychange', handlePropertyChange);
    } else {
      activeElement.addEventListener('propertychange', handlePropertyChange, false);
    }
  }
  function stopWatchingForValueChange() {
    if (!activeElement) {
      return;
    }
    delete activeElement.value;
    if (activeElement.detachEvent) {
      activeElement.detachEvent('onpropertychange', handlePropertyChange);
    } else {
      activeElement.removeEventListener('propertychange', handlePropertyChange, false);
    }
    activeElement = null;
    activeElementInst = null;
    activeElementValue = null;
    activeElementValueProp = null;
  }
  function handlePropertyChange(nativeEvent) {
    if (nativeEvent.propertyName !== 'value') {
      return;
    }
    var value = nativeEvent.srcElement.value;
    if (value === activeElementValue) {
      return;
    }
    activeElementValue = value;
    manualDispatchChangeEvent(nativeEvent);
  }
  function getTargetInstForInputEvent(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topInput) {
      return targetInst;
    }
  }
  function handleEventsForInputEventIE(topLevelType, target, targetInst) {
    if (topLevelType === topLevelTypes.topFocus) {
      stopWatchingForValueChange();
      startWatchingForValueChange(target, targetInst);
    } else if (topLevelType === topLevelTypes.topBlur) {
      stopWatchingForValueChange();
    }
  }
  function getTargetInstForInputEventIE(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
      if (activeElement && activeElement.value !== activeElementValue) {
        activeElementValue = activeElement.value;
        return activeElementInst;
      }
    }
  }
  function shouldUseClickEvent(elem) {
    return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
  }
  function getTargetInstForClickEvent(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topClick) {
      return targetInst;
    }
  }
  var ChangeEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
      var getTargetInstFunc,
          handleEventFunc;
      if (shouldUseChangeEvent(targetNode)) {
        if (doesChangeEventBubble) {
          getTargetInstFunc = getTargetInstForChangeEvent;
        } else {
          handleEventFunc = handleEventsForChangeEventIE8;
        }
      } else if (isTextInputElement(targetNode)) {
        if (isInputEventSupported) {
          getTargetInstFunc = getTargetInstForInputEvent;
        } else {
          getTargetInstFunc = getTargetInstForInputEventIE;
          handleEventFunc = handleEventsForInputEventIE;
        }
      } else if (shouldUseClickEvent(targetNode)) {
        getTargetInstFunc = getTargetInstForClickEvent;
      }
      if (getTargetInstFunc) {
        var inst = getTargetInstFunc(topLevelType, targetInst);
        if (inst) {
          var event = SyntheticEvent.getPooled(eventTypes.change, inst, nativeEvent, nativeEventTarget);
          event.type = 'change';
          EventPropagators.accumulateTwoPhaseDispatches(event);
          return event;
        }
      }
      if (handleEventFunc) {
        handleEventFunc(topLevelType, targetNode, targetInst);
      }
    }
  };
  module.exports = ChangeEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/DefaultEventPluginOrder.js", ["fbjs/lib/keyOf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var keyOf = $__require('fbjs/lib/keyOf');
  var DefaultEventPluginOrder = [keyOf({ResponderEventPlugin: null}), keyOf({SimpleEventPlugin: null}), keyOf({TapEventPlugin: null}), keyOf({EnterLeaveEventPlugin: null}), keyOf({ChangeEventPlugin: null}), keyOf({SelectEventPlugin: null}), keyOf({BeforeInputEventPlugin: null})];
  module.exports = DefaultEventPluginOrder;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/EnterLeaveEventPlugin.js", ["./EventConstants", "./EventPropagators", "./ReactDOMComponentTree", "./SyntheticMouseEvent", "fbjs/lib/keyOf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('./EventConstants');
  var EventPropagators = $__require('./EventPropagators');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var SyntheticMouseEvent = $__require('./SyntheticMouseEvent');
  var keyOf = $__require('fbjs/lib/keyOf');
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    mouseEnter: {
      registrationName: keyOf({onMouseEnter: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    },
    mouseLeave: {
      registrationName: keyOf({onMouseLeave: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    }
  };
  var EnterLeaveEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
        return null;
      }
      var win;
      if (nativeEventTarget.window === nativeEventTarget) {
        win = nativeEventTarget;
      } else {
        var doc = nativeEventTarget.ownerDocument;
        if (doc) {
          win = doc.defaultView || doc.parentWindow;
        } else {
          win = window;
        }
      }
      var from;
      var to;
      if (topLevelType === topLevelTypes.topMouseOut) {
        from = targetInst;
        var related = nativeEvent.relatedTarget || nativeEvent.toElement;
        to = related ? ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
      } else {
        from = null;
        to = targetInst;
      }
      if (from === to) {
        return null;
      }
      var fromNode = from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
      var toNode = to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);
      var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
      leave.type = 'mouseleave';
      leave.target = fromNode;
      leave.relatedTarget = toNode;
      var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
      enter.type = 'mouseenter';
      enter.target = toNode;
      enter.relatedTarget = fromNode;
      EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);
      return [leave, enter];
    }
  };
  module.exports = EnterLeaveEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/HTMLDOMPropertyConfig.js", ["./DOMProperty", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('./DOMProperty');
  var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
  var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
  var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
  var HTMLDOMPropertyConfig = {
    isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
    Properties: {
      accept: 0,
      acceptCharset: 0,
      accessKey: 0,
      action: 0,
      allowFullScreen: HAS_BOOLEAN_VALUE,
      allowTransparency: 0,
      alt: 0,
      async: HAS_BOOLEAN_VALUE,
      autoComplete: 0,
      autoPlay: HAS_BOOLEAN_VALUE,
      capture: HAS_BOOLEAN_VALUE,
      cellPadding: 0,
      cellSpacing: 0,
      charSet: 0,
      challenge: 0,
      checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      cite: 0,
      classID: 0,
      className: 0,
      cols: HAS_POSITIVE_NUMERIC_VALUE,
      colSpan: 0,
      content: 0,
      contentEditable: 0,
      contextMenu: 0,
      controls: HAS_BOOLEAN_VALUE,
      coords: 0,
      crossOrigin: 0,
      data: 0,
      dateTime: 0,
      'default': HAS_BOOLEAN_VALUE,
      defer: HAS_BOOLEAN_VALUE,
      dir: 0,
      disabled: HAS_BOOLEAN_VALUE,
      download: HAS_OVERLOADED_BOOLEAN_VALUE,
      draggable: 0,
      encType: 0,
      form: 0,
      formAction: 0,
      formEncType: 0,
      formMethod: 0,
      formNoValidate: HAS_BOOLEAN_VALUE,
      formTarget: 0,
      frameBorder: 0,
      headers: 0,
      height: 0,
      hidden: HAS_BOOLEAN_VALUE,
      high: 0,
      href: 0,
      hrefLang: 0,
      htmlFor: 0,
      httpEquiv: 0,
      icon: 0,
      id: 0,
      inputMode: 0,
      integrity: 0,
      is: 0,
      keyParams: 0,
      keyType: 0,
      kind: 0,
      label: 0,
      lang: 0,
      list: 0,
      loop: HAS_BOOLEAN_VALUE,
      low: 0,
      manifest: 0,
      marginHeight: 0,
      marginWidth: 0,
      max: 0,
      maxLength: 0,
      media: 0,
      mediaGroup: 0,
      method: 0,
      min: 0,
      minLength: 0,
      multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      name: 0,
      nonce: 0,
      noValidate: HAS_BOOLEAN_VALUE,
      open: HAS_BOOLEAN_VALUE,
      optimum: 0,
      pattern: 0,
      placeholder: 0,
      poster: 0,
      preload: 0,
      profile: 0,
      radioGroup: 0,
      readOnly: HAS_BOOLEAN_VALUE,
      rel: 0,
      required: HAS_BOOLEAN_VALUE,
      reversed: HAS_BOOLEAN_VALUE,
      role: 0,
      rows: HAS_POSITIVE_NUMERIC_VALUE,
      rowSpan: HAS_NUMERIC_VALUE,
      sandbox: 0,
      scope: 0,
      scoped: HAS_BOOLEAN_VALUE,
      scrolling: 0,
      seamless: HAS_BOOLEAN_VALUE,
      selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      shape: 0,
      size: HAS_POSITIVE_NUMERIC_VALUE,
      sizes: 0,
      span: HAS_POSITIVE_NUMERIC_VALUE,
      spellCheck: 0,
      src: 0,
      srcDoc: 0,
      srcLang: 0,
      srcSet: 0,
      start: HAS_NUMERIC_VALUE,
      step: 0,
      style: 0,
      summary: 0,
      tabIndex: 0,
      target: 0,
      title: 0,
      type: 0,
      useMap: 0,
      value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
      width: 0,
      wmode: 0,
      wrap: 0,
      about: 0,
      datatype: 0,
      inlist: 0,
      prefix: 0,
      property: 0,
      resource: 0,
      'typeof': 0,
      vocab: 0,
      autoCapitalize: 0,
      autoCorrect: 0,
      autoSave: 0,
      color: 0,
      itemProp: 0,
      itemScope: HAS_BOOLEAN_VALUE,
      itemType: 0,
      itemID: 0,
      itemRef: 0,
      results: 0,
      security: 0,
      unselectable: 0
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    },
    DOMPropertyNames: {}
  };
  module.exports = HTMLDOMPropertyConfig;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/AutoFocusUtils.js", ["./ReactDOMComponentTree", "fbjs/lib/focusNode", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var focusNode = $__require('fbjs/lib/focusNode');
  var AutoFocusUtils = {focusDOMComponent: function() {
      focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
    }};
  module.exports = AutoFocusUtils;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/camelize.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _hyphenPattern = /-(.)/g;
  function camelize(string) {
    return string.replace(_hyphenPattern, function(_, character) {
      return character.toUpperCase();
    });
  }
  module.exports = camelize;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/camelizeStyleName.js", ["./camelize", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var camelize = $__require('./camelize');
  var msPattern = /^-ms-/;
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }
  module.exports = camelizeStyleName;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/CSSProperty.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });
  var shorthandPropertyExpansions = {
    background: {
      backgroundAttachment: true,
      backgroundColor: true,
      backgroundImage: true,
      backgroundPositionX: true,
      backgroundPositionY: true,
      backgroundRepeat: true
    },
    backgroundPosition: {
      backgroundPositionX: true,
      backgroundPositionY: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    },
    outline: {
      outlineWidth: true,
      outlineStyle: true,
      outlineColor: true
    }
  };
  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };
  module.exports = CSSProperty;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/dangerousStyleValue.js", ["./CSSProperty", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var CSSProperty = $__require('./CSSProperty');
  var warning = $__require('fbjs/lib/warning');
  var isUnitlessNumber = CSSProperty.isUnitlessNumber;
  var styleWarnings = {};
  function dangerousStyleValue(name, value, component) {
    var isEmpty = value == null || typeof value === 'boolean' || value === '';
    if (isEmpty) {
      return '';
    }
    var isNonNumeric = isNaN(value);
    if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
      return '' + value;
    }
    if (typeof value === 'string') {
      if ("production" !== 'production') {
        if (component) {
          var owner = component._currentElement._owner;
          var ownerName = owner ? owner.getName() : null;
          if (ownerName && !styleWarnings[ownerName]) {
            styleWarnings[ownerName] = {};
          }
          var warned = false;
          if (ownerName) {
            var warnings = styleWarnings[ownerName];
            warned = warnings[name];
            if (!warned) {
              warnings[name] = true;
            }
          }
          if (!warned) {
            "production" !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
          }
        }
      }
      value = value.trim();
    }
    return value + 'px';
  }
  module.exports = dangerousStyleValue;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/hyphenate.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _uppercasePattern = /([A-Z])/g;
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }
  module.exports = hyphenate;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/hyphenateStyleName.js", ["./hyphenate", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var hyphenate = $__require('./hyphenate');
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }
  module.exports = hyphenateStyleName;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/memoizeStringOnly.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function memoizeStringOnly(callback) {
    var cache = {};
    return function(string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }
  module.exports = memoizeStringOnly;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/CSSPropertyOperations.js", ["./CSSProperty", "fbjs/lib/ExecutionEnvironment", "./ReactPerf", "fbjs/lib/camelizeStyleName", "./dangerousStyleValue", "fbjs/lib/hyphenateStyleName", "fbjs/lib/memoizeStringOnly", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var CSSProperty = $__require('./CSSProperty');
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var ReactPerf = $__require('./ReactPerf');
  var camelizeStyleName = $__require('fbjs/lib/camelizeStyleName');
  var dangerousStyleValue = $__require('./dangerousStyleValue');
  var hyphenateStyleName = $__require('fbjs/lib/hyphenateStyleName');
  var memoizeStringOnly = $__require('fbjs/lib/memoizeStringOnly');
  var warning = $__require('fbjs/lib/warning');
  var processStyleName = memoizeStringOnly(function(styleName) {
    return hyphenateStyleName(styleName);
  });
  var hasShorthandPropertyBug = false;
  var styleFloatAccessor = 'cssFloat';
  if (ExecutionEnvironment.canUseDOM) {
    var tempStyle = document.createElement('div').style;
    try {
      tempStyle.font = '';
    } catch (e) {
      hasShorthandPropertyBug = true;
    }
    if (document.documentElement.style.cssFloat === undefined) {
      styleFloatAccessor = 'styleFloat';
    }
  }
  if ("production" !== 'production') {
    var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
    var badStyleValueWithSemicolonPattern = /;\s*$/;
    var warnedStyleNames = {};
    var warnedStyleValues = {};
    var warnedForNaNValue = false;
    var warnHyphenatedStyleName = function(name, owner) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }
      warnedStyleNames[name] = true;
      "production" !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
    };
    var warnBadVendoredStyleName = function(name, owner) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }
      warnedStyleNames[name] = true;
      "production" !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
    };
    var warnStyleValueWithSemicolon = function(name, value, owner) {
      if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
        return;
      }
      warnedStyleValues[value] = true;
      "production" !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
    };
    var warnStyleValueIsNaN = function(name, value, owner) {
      if (warnedForNaNValue) {
        return;
      }
      warnedForNaNValue = true;
      "production" !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
    };
    var checkRenderMessage = function(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    };
    var warnValidStyle = function(name, value, component) {
      var owner;
      if (component) {
        owner = component._currentElement._owner;
      }
      if (name.indexOf('-') > -1) {
        warnHyphenatedStyleName(name, owner);
      } else if (badVendoredStyleNamePattern.test(name)) {
        warnBadVendoredStyleName(name, owner);
      } else if (badStyleValueWithSemicolonPattern.test(value)) {
        warnStyleValueWithSemicolon(name, value, owner);
      }
      if (typeof value === 'number' && isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      }
    };
  }
  var CSSPropertyOperations = {
    createMarkupForStyles: function(styles, component) {
      var serialized = '';
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        var styleValue = styles[styleName];
        if ("production" !== 'production') {
          warnValidStyle(styleName, styleValue, component);
        }
        if (styleValue != null) {
          serialized += processStyleName(styleName) + ':';
          serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
        }
      }
      return serialized || null;
    },
    setValueForStyles: function(node, styles, component) {
      var style = node.style;
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        if ("production" !== 'production') {
          warnValidStyle(styleName, styles[styleName], component);
        }
        var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
        if (styleName === 'float' || styleName === 'cssFloat') {
          styleName = styleFloatAccessor;
        }
        if (styleValue) {
          style[styleName] = styleValue;
        } else {
          var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
          if (expansion) {
            for (var individualStyleName in expansion) {
              style[individualStyleName] = '';
            }
          } else {
            style[styleName] = '';
          }
        }
      }
    }
  };
  ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {setValueForStyles: 'setValueForStyles'});
  module.exports = CSSPropertyOperations;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/DOMNamespaces.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMNamespaces = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg'
  };
  module.exports = DOMNamespaces;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMIDOperations.js", ["./DOMChildrenOperations", "./ReactDOMComponentTree", "./ReactPerf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMChildrenOperations = $__require('./DOMChildrenOperations');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactPerf = $__require('./ReactPerf');
  var ReactDOMIDOperations = {dangerouslyProcessChildrenUpdates: function(parentInst, updates) {
      var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
      DOMChildrenOperations.processUpdates(node, updates);
    }};
  ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'});
  module.exports = ReactDOMIDOperations;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactComponentBrowserEnvironment.js", ["./DOMChildrenOperations", "./ReactDOMIDOperations", "./ReactPerf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMChildrenOperations = $__require('./DOMChildrenOperations');
  var ReactDOMIDOperations = $__require('./ReactDOMIDOperations');
  var ReactPerf = $__require('./ReactPerf');
  var ReactComponentBrowserEnvironment = {
    processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
    replaceNodeWithMarkup: DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup,
    unmountIDFromEnvironment: function(rootNodeID) {}
  };
  ReactPerf.measureMethods(ReactComponentBrowserEnvironment, 'ReactComponentBrowserEnvironment', {replaceNodeWithMarkup: 'replaceNodeWithMarkup'});
  module.exports = ReactComponentBrowserEnvironment;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMButton.js", ["./DisabledInputUtils", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DisabledInputUtils = $__require('./DisabledInputUtils');
  var ReactDOMButton = {getNativeProps: DisabledInputUtils.getNativeProps};
  module.exports = ReactDOMButton;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMInput.js", ["object-assign", "./DisabledInputUtils", "./DOMPropertyOperations", "./LinkedValueUtils", "./ReactDOMComponentTree", "./ReactUpdates", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var DisabledInputUtils = $__require('./DisabledInputUtils');
  var DOMPropertyOperations = $__require('./DOMPropertyOperations');
  var LinkedValueUtils = $__require('./LinkedValueUtils');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactUpdates = $__require('./ReactUpdates');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  var didWarnValueLink = false;
  var didWarnCheckedLink = false;
  var didWarnValueNull = false;
  var didWarnValueDefaultValue = false;
  var didWarnCheckedDefaultChecked = false;
  var didWarnControlledToUncontrolled = false;
  var didWarnUncontrolledToControlled = false;
  function forceUpdateIfMounted() {
    if (this._rootNodeID) {
      ReactDOMInput.updateWrapper(this);
    }
  }
  function warnIfValueIsNull(props) {
    if (props != null && props.value === null && !didWarnValueNull) {
      "production" !== 'production' ? warning(false, '`value` prop on `input` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
      didWarnValueNull = true;
    }
  }
  var ReactDOMInput = {
    getNativeProps: function(inst, props) {
      var value = LinkedValueUtils.getValue(props);
      var checked = LinkedValueUtils.getChecked(props);
      var nativeProps = _assign({type: undefined}, DisabledInputUtils.getNativeProps(inst, props), {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: value != null ? value : inst._wrapperState.initialValue,
        checked: checked != null ? checked : inst._wrapperState.initialChecked,
        onChange: inst._wrapperState.onChange
      });
      return nativeProps;
    },
    mountWrapper: function(inst, props) {
      if ("production" !== 'production') {
        LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
        if (props.valueLink !== undefined && !didWarnValueLink) {
          "production" !== 'production' ? warning(false, '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
          didWarnValueLink = true;
        }
        if (props.checkedLink !== undefined && !didWarnCheckedLink) {
          "production" !== 'production' ? warning(false, '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
          didWarnCheckedLink = true;
        }
        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
          "production" !== 'production' ? warning(false, 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
          didWarnCheckedDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
          "production" !== 'production' ? warning(false, 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
          didWarnValueDefaultValue = true;
        }
        warnIfValueIsNull(props);
      }
      var defaultValue = props.defaultValue;
      inst._wrapperState = {
        initialChecked: props.defaultChecked || false,
        initialValue: defaultValue != null ? defaultValue : null,
        listeners: null,
        onChange: _handleChange.bind(inst)
      };
      if ("production" !== 'production') {
        inst._wrapperState.controlled = props.checked !== undefined || props.value !== undefined;
      }
    },
    updateWrapper: function(inst) {
      var props = inst._currentElement.props;
      if ("production" !== 'production') {
        warnIfValueIsNull(props);
        var initialValue = inst._wrapperState.initialChecked || inst._wrapperState.initialValue;
        var defaultValue = props.defaultChecked || props.defaultValue;
        var controlled = props.checked !== undefined || props.value !== undefined;
        var owner = inst._currentElement._owner;
        if ((initialValue || !inst._wrapperState.controlled) && controlled && !didWarnUncontrolledToControlled) {
          "production" !== 'production' ? warning(false, '%s is changing a uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
          didWarnUncontrolledToControlled = true;
        }
        if (inst._wrapperState.controlled && (defaultValue || !controlled) && !didWarnControlledToUncontrolled) {
          "production" !== 'production' ? warning(false, '%s is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
          didWarnControlledToUncontrolled = true;
        }
      }
      var checked = props.checked;
      if (checked != null) {
        DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
      }
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'value', '' + value);
      }
    }
  };
  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);
    ReactUpdates.asap(forceUpdateIfMounted, this);
    var name = props.name;
    if (props.type === 'radio' && name != null) {
      var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
      var queryRoot = rootNode;
      while (queryRoot.parentNode) {
        queryRoot = queryRoot.parentNode;
      }
      var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
      for (var i = 0; i < group.length; i++) {
        var otherNode = group[i];
        if (otherNode === rootNode || otherNode.form !== rootNode.form) {
          continue;
        }
        var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
        !otherInstance ? "production" !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : void 0;
        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
      }
    }
    return returnValue;
  }
  module.exports = ReactDOMInput;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMOption.js", ["object-assign", "./ReactChildren", "./ReactDOMComponentTree", "./ReactDOMSelect", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var ReactChildren = $__require('./ReactChildren');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactDOMSelect = $__require('./ReactDOMSelect');
  var warning = $__require('fbjs/lib/warning');
  var ReactDOMOption = {
    mountWrapper: function(inst, props, nativeParent) {
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : void 0;
      }
      var selectValue = null;
      if (nativeParent != null) {
        var selectParent = nativeParent;
        if (selectParent._tag === 'optgroup') {
          selectParent = selectParent._nativeParent;
        }
        if (selectParent != null && selectParent._tag === 'select') {
          selectValue = ReactDOMSelect.getSelectValueContext(selectParent);
        }
      }
      var selected = null;
      if (selectValue != null) {
        selected = false;
        if (Array.isArray(selectValue)) {
          for (var i = 0; i < selectValue.length; i++) {
            if ('' + selectValue[i] === '' + props.value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === '' + props.value;
        }
      }
      inst._wrapperState = {selected: selected};
    },
    postMountWrapper: function(inst) {
      var props = inst._currentElement.props;
      if (props.value != null) {
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        node.setAttribute('value', props.value);
      }
    },
    getNativeProps: function(inst, props) {
      var nativeProps = _assign({
        selected: undefined,
        children: undefined
      }, props);
      if (inst._wrapperState.selected != null) {
        nativeProps.selected = inst._wrapperState.selected;
      }
      var content = '';
      ReactChildren.forEach(props.children, function(child) {
        if (child == null) {
          return;
        }
        if (typeof child === 'string' || typeof child === 'number') {
          content += child;
        } else {
          "production" !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : void 0;
        }
      });
      if (content) {
        nativeProps.children = content;
      }
      return nativeProps;
    }
  };
  module.exports = ReactDOMOption;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMSelect.js", ["object-assign", "./DisabledInputUtils", "./LinkedValueUtils", "./ReactDOMComponentTree", "./ReactUpdates", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var DisabledInputUtils = $__require('./DisabledInputUtils');
  var LinkedValueUtils = $__require('./LinkedValueUtils');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactUpdates = $__require('./ReactUpdates');
  var warning = $__require('fbjs/lib/warning');
  var didWarnValueLink = false;
  var didWarnValueNull = false;
  var didWarnValueDefaultValue = false;
  function updateOptionsIfPendingUpdateAndMounted() {
    if (this._rootNodeID && this._wrapperState.pendingUpdate) {
      this._wrapperState.pendingUpdate = false;
      var props = this._currentElement.props;
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        updateOptions(this, Boolean(props.multiple), value);
      }
    }
  }
  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  function warnIfValueIsNull(props) {
    if (props != null && props.value === null && !didWarnValueNull) {
      "production" !== 'production' ? warning(false, '`value` prop on `select` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
      didWarnValueNull = true;
    }
  }
  var valuePropNames = ['value', 'defaultValue'];
  function checkSelectPropTypes(inst, props) {
    var owner = inst._currentElement._owner;
    LinkedValueUtils.checkPropTypes('select', props, owner);
    if (props.valueLink !== undefined && !didWarnValueLink) {
      "production" !== 'production' ? warning(false, '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.') : void 0;
      didWarnValueLink = true;
    }
    for (var i = 0; i < valuePropNames.length; i++) {
      var propName = valuePropNames[i];
      if (props[propName] == null) {
        continue;
      }
      if (props.multiple) {
        "production" !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
      } else {
        "production" !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
      }
    }
  }
  function updateOptions(inst, multiple, propValue) {
    var selectedValue,
        i;
    var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;
    if (multiple) {
      selectedValue = {};
      for (i = 0; i < propValue.length; i++) {
        selectedValue['' + propValue[i]] = true;
      }
      for (i = 0; i < options.length; i++) {
        var selected = selectedValue.hasOwnProperty(options[i].value);
        if (options[i].selected !== selected) {
          options[i].selected = selected;
        }
      }
    } else {
      selectedValue = '' + propValue;
      for (i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
          options[i].selected = true;
          return;
        }
      }
      if (options.length) {
        options[0].selected = true;
      }
    }
  }
  var ReactDOMSelect = {
    getNativeProps: function(inst, props) {
      return _assign({}, DisabledInputUtils.getNativeProps(inst, props), {
        onChange: inst._wrapperState.onChange,
        value: undefined
      });
    },
    mountWrapper: function(inst, props) {
      if ("production" !== 'production') {
        checkSelectPropTypes(inst, props);
        warnIfValueIsNull(props);
      }
      var value = LinkedValueUtils.getValue(props);
      inst._wrapperState = {
        pendingUpdate: false,
        initialValue: value != null ? value : props.defaultValue,
        listeners: null,
        onChange: _handleChange.bind(inst),
        wasMultiple: Boolean(props.multiple)
      };
      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
        "production" !== 'production' ? warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
        didWarnValueDefaultValue = true;
      }
    },
    getSelectValueContext: function(inst) {
      return inst._wrapperState.initialValue;
    },
    postUpdateWrapper: function(inst) {
      var props = inst._currentElement.props;
      if ("production" !== 'production') {
        warnIfValueIsNull(props);
      }
      inst._wrapperState.initialValue = undefined;
      var wasMultiple = inst._wrapperState.wasMultiple;
      inst._wrapperState.wasMultiple = Boolean(props.multiple);
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        inst._wrapperState.pendingUpdate = false;
        updateOptions(inst, Boolean(props.multiple), value);
      } else if (wasMultiple !== Boolean(props.multiple)) {
        if (props.defaultValue != null) {
          updateOptions(inst, Boolean(props.multiple), props.defaultValue);
        } else {
          updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
        }
      }
    }
  };
  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);
    if (this._rootNodeID) {
      this._wrapperState.pendingUpdate = true;
    }
    ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
    return returnValue;
  }
  module.exports = ReactDOMSelect;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/DisabledInputUtils.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var disableableMouseListenerNames = {
    onClick: true,
    onDoubleClick: true,
    onMouseDown: true,
    onMouseMove: true,
    onMouseUp: true,
    onClickCapture: true,
    onDoubleClickCapture: true,
    onMouseDownCapture: true,
    onMouseMoveCapture: true,
    onMouseUpCapture: true
  };
  var DisabledInputUtils = {getNativeProps: function(inst, props) {
      if (!props.disabled) {
        return props;
      }
      var nativeProps = {};
      for (var key in props) {
        if (!disableableMouseListenerNames[key] && props.hasOwnProperty(key)) {
          nativeProps[key] = props[key];
        }
      }
      return nativeProps;
    }};
  module.exports = DisabledInputUtils;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMUnknownPropertyDevtool.js", ["./DOMProperty", "./EventPluginRegistry", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('./DOMProperty');
  var EventPluginRegistry = $__require('./EventPluginRegistry');
  var warning = $__require('fbjs/lib/warning');
  if ("production" !== 'production') {
    var reactProps = {
      children: true,
      dangerouslySetInnerHTML: true,
      key: true,
      ref: true
    };
    var warnedProperties = {};
    var warnUnknownProperty = function(name) {
      if (DOMProperty.properties.hasOwnProperty(name) || DOMProperty.isCustomAttribute(name)) {
        return;
      }
      if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
        return;
      }
      warnedProperties[name] = true;
      var lowerCasedName = name.toLowerCase();
      var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
      "production" !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : void 0;
      var registrationName = EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : null;
      "production" !== 'production' ? warning(registrationName == null, 'Unknown event handler property %s. Did you mean `%s`?', name, registrationName) : void 0;
    };
  }
  var ReactDOMUnknownPropertyDevtool = {
    onCreateMarkupForProperty: function(name, value) {
      warnUnknownProperty(name);
    },
    onSetValueForProperty: function(node, name, value) {
      warnUnknownProperty(name);
    },
    onDeleteValueForProperty: function(node, name) {
      warnUnknownProperty(name);
    }
  };
  module.exports = ReactDOMUnknownPropertyDevtool;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMDebugTool.js", ["./ReactDOMUnknownPropertyDevtool", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMUnknownPropertyDevtool = $__require('./ReactDOMUnknownPropertyDevtool');
  var warning = $__require('fbjs/lib/warning');
  var eventHandlers = [];
  var handlerDoesThrowForEvent = {};
  function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
    if ("production" !== 'production') {
      eventHandlers.forEach(function(handler) {
        try {
          if (handler[handlerFunctionName]) {
            handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
          }
        } catch (e) {
          "production" !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
          handlerDoesThrowForEvent[handlerFunctionName] = true;
        }
      });
    }
  }
  var ReactDOMDebugTool = {
    addDevtool: function(devtool) {
      eventHandlers.push(devtool);
    },
    removeDevtool: function(devtool) {
      for (var i = 0; i < eventHandlers.length; i++) {
        if (eventHandlers[i] === devtool) {
          eventHandlers.splice(i, 1);
          i--;
        }
      }
    },
    onCreateMarkupForProperty: function(name, value) {
      emitEvent('onCreateMarkupForProperty', name, value);
    },
    onSetValueForProperty: function(node, name, value) {
      emitEvent('onSetValueForProperty', node, name, value);
    },
    onDeleteValueForProperty: function(node, name) {
      emitEvent('onDeleteValueForProperty', node, name);
    }
  };
  ReactDOMDebugTool.addDevtool(ReactDOMUnknownPropertyDevtool);
  module.exports = ReactDOMDebugTool;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMInstrumentation.js", ["./ReactDOMDebugTool", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMDebugTool = $__require('./ReactDOMDebugTool');
  module.exports = {debugTool: ReactDOMDebugTool};
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/quoteAttributeValueForBrowser.js", ["./escapeTextContentForBrowser", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var escapeTextContentForBrowser = $__require('./escapeTextContentForBrowser');
  function quoteAttributeValueForBrowser(value) {
    return '"' + escapeTextContentForBrowser(value) + '"';
  }
  module.exports = quoteAttributeValueForBrowser;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/DOMPropertyOperations.js", ["./DOMProperty", "./ReactDOMInstrumentation", "./ReactPerf", "./quoteAttributeValueForBrowser", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('./DOMProperty');
  var ReactDOMInstrumentation = $__require('./ReactDOMInstrumentation');
  var ReactPerf = $__require('./ReactPerf');
  var quoteAttributeValueForBrowser = $__require('./quoteAttributeValueForBrowser');
  var warning = $__require('fbjs/lib/warning');
  var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
  var illegalAttributeNameCache = {};
  var validatedAttributeNameCache = {};
  function isAttributeNameSafe(attributeName) {
    if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
      return true;
    }
    if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
      return false;
    }
    if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
      validatedAttributeNameCache[attributeName] = true;
      return true;
    }
    illegalAttributeNameCache[attributeName] = true;
    "production" !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : void 0;
    return false;
  }
  function shouldIgnoreValue(propertyInfo, value) {
    return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
  }
  var DOMPropertyOperations = {
    createMarkupForID: function(id) {
      return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
    },
    setAttributeForID: function(node, id) {
      node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
    },
    createMarkupForRoot: function() {
      return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
    },
    setAttributeForRoot: function(node) {
      node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, '');
    },
    createMarkupForProperty: function(name, value) {
      if ("production" !== 'production') {
        ReactDOMInstrumentation.debugTool.onCreateMarkupForProperty(name, value);
      }
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        if (shouldIgnoreValue(propertyInfo, value)) {
          return '';
        }
        var attributeName = propertyInfo.attributeName;
        if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
          return attributeName + '=""';
        }
        return attributeName + '=' + quoteAttributeValueForBrowser(value);
      } else if (DOMProperty.isCustomAttribute(name)) {
        if (value == null) {
          return '';
        }
        return name + '=' + quoteAttributeValueForBrowser(value);
      }
      return null;
    },
    createMarkupForCustomAttribute: function(name, value) {
      if (!isAttributeNameSafe(name) || value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser(value);
    },
    setValueForProperty: function(node, name, value) {
      if ("production" !== 'production') {
        ReactDOMInstrumentation.debugTool.onSetValueForProperty(node, name, value);
      }
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        var mutationMethod = propertyInfo.mutationMethod;
        if (mutationMethod) {
          mutationMethod(node, value);
        } else if (shouldIgnoreValue(propertyInfo, value)) {
          this.deleteValueForProperty(node, name);
        } else if (propertyInfo.mustUseProperty) {
          var propName = propertyInfo.propertyName;
          if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
            node[propName] = value;
          }
        } else {
          var attributeName = propertyInfo.attributeName;
          var namespace = propertyInfo.attributeNamespace;
          if (namespace) {
            node.setAttributeNS(namespace, attributeName, '' + value);
          } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
            node.setAttribute(attributeName, '');
          } else {
            node.setAttribute(attributeName, '' + value);
          }
        }
      } else if (DOMProperty.isCustomAttribute(name)) {
        DOMPropertyOperations.setValueForAttribute(node, name, value);
      }
    },
    setValueForAttribute: function(node, name, value) {
      if (!isAttributeNameSafe(name)) {
        return;
      }
      if (value == null) {
        node.removeAttribute(name);
      } else {
        node.setAttribute(name, '' + value);
      }
    },
    deleteValueForProperty: function(node, name) {
      if ("production" !== 'production') {
        ReactDOMInstrumentation.debugTool.onDeleteValueForProperty(node, name);
      }
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        var mutationMethod = propertyInfo.mutationMethod;
        if (mutationMethod) {
          mutationMethod(node, undefined);
        } else if (propertyInfo.mustUseProperty) {
          var propName = propertyInfo.propertyName;
          if (propertyInfo.hasBooleanValue) {
            node[propName] = false;
          } else {
            if (!propertyInfo.hasSideEffects || '' + node[propName] !== '') {
              node[propName] = '';
            }
          }
        } else {
          node.removeAttribute(propertyInfo.attributeName);
        }
      } else if (DOMProperty.isCustomAttribute(name)) {
        node.removeAttribute(name);
      }
    }
  };
  ReactPerf.measureMethods(DOMPropertyOperations, 'DOMPropertyOperations', {
    setValueForProperty: 'setValueForProperty',
    setValueForAttribute: 'setValueForAttribute',
    deleteValueForProperty: 'deleteValueForProperty'
  });
  module.exports = DOMPropertyOperations;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/LinkedValueUtils.js", ["./ReactPropTypes", "./ReactPropTypeLocations", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactPropTypes = $__require('./ReactPropTypes');
  var ReactPropTypeLocations = $__require('./ReactPropTypeLocations');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  var hasReadOnlyValue = {
    'button': true,
    'checkbox': true,
    'image': true,
    'hidden': true,
    'radio': true,
    'reset': true,
    'submit': true
  };
  function _assertSingleLink(inputProps) {
    !(inputProps.checkedLink == null || inputProps.valueLink == null) ? "production" !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : void 0;
  }
  function _assertValueLink(inputProps) {
    _assertSingleLink(inputProps);
    !(inputProps.value == null && inputProps.onChange == null) ? "production" !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : void 0;
  }
  function _assertCheckedLink(inputProps) {
    _assertSingleLink(inputProps);
    !(inputProps.checked == null && inputProps.onChange == null) ? "production" !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : void 0;
  }
  var propTypes = {
    value: function(props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function(props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    onChange: ReactPropTypes.func
  };
  var loggedTypeFailures = {};
  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  var LinkedValueUtils = {
    checkPropTypes: function(tagName, props, owner) {
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var addendum = getDeclarationErrorAddendum(owner);
          "production" !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : void 0;
        }
      }
    },
    getValue: function(inputProps) {
      if (inputProps.valueLink) {
        _assertValueLink(inputProps);
        return inputProps.valueLink.value;
      }
      return inputProps.value;
    },
    getChecked: function(inputProps) {
      if (inputProps.checkedLink) {
        _assertCheckedLink(inputProps);
        return inputProps.checkedLink.value;
      }
      return inputProps.checked;
    },
    executeOnChange: function(inputProps, event) {
      if (inputProps.valueLink) {
        _assertValueLink(inputProps);
        return inputProps.valueLink.requestChange(event.target.value);
      } else if (inputProps.checkedLink) {
        _assertCheckedLink(inputProps);
        return inputProps.checkedLink.requestChange(event.target.checked);
      } else if (inputProps.onChange) {
        return inputProps.onChange.call(undefined, event);
      }
    }
  };
  module.exports = LinkedValueUtils;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMTextarea.js", ["object-assign", "./DisabledInputUtils", "./DOMPropertyOperations", "./LinkedValueUtils", "./ReactDOMComponentTree", "./ReactUpdates", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var DisabledInputUtils = $__require('./DisabledInputUtils');
  var DOMPropertyOperations = $__require('./DOMPropertyOperations');
  var LinkedValueUtils = $__require('./LinkedValueUtils');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactUpdates = $__require('./ReactUpdates');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  var didWarnValueLink = false;
  var didWarnValueNull = false;
  var didWarnValDefaultVal = false;
  function forceUpdateIfMounted() {
    if (this._rootNodeID) {
      ReactDOMTextarea.updateWrapper(this);
    }
  }
  function warnIfValueIsNull(props) {
    if (props != null && props.value === null && !didWarnValueNull) {
      "production" !== 'production' ? warning(false, '`value` prop on `textarea` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
      didWarnValueNull = true;
    }
  }
  var ReactDOMTextarea = {
    getNativeProps: function(inst, props) {
      !(props.dangerouslySetInnerHTML == null) ? "production" !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : void 0;
      var nativeProps = _assign({}, DisabledInputUtils.getNativeProps(inst, props), {
        defaultValue: undefined,
        value: undefined,
        children: inst._wrapperState.initialValue,
        onChange: inst._wrapperState.onChange
      });
      return nativeProps;
    },
    mountWrapper: function(inst, props) {
      if ("production" !== 'production') {
        LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
        if (props.valueLink !== undefined && !didWarnValueLink) {
          "production" !== 'production' ? warning(false, '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.') : void 0;
          didWarnValueLink = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
          "production" !== 'production' ? warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
          didWarnValDefaultVal = true;
        }
        warnIfValueIsNull(props);
      }
      var defaultValue = props.defaultValue;
      var children = props.children;
      if (children != null) {
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : void 0;
        }
        !(defaultValue == null) ? "production" !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : void 0;
        if (Array.isArray(children)) {
          !(children.length <= 1) ? "production" !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : void 0;
          children = children[0];
        }
        defaultValue = '' + children;
      }
      if (defaultValue == null) {
        defaultValue = '';
      }
      var value = LinkedValueUtils.getValue(props);
      inst._wrapperState = {
        initialValue: '' + (value != null ? value : defaultValue),
        listeners: null,
        onChange: _handleChange.bind(inst)
      };
    },
    updateWrapper: function(inst) {
      var props = inst._currentElement.props;
      if ("production" !== 'production') {
        warnIfValueIsNull(props);
      }
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'value', '' + value);
      }
    }
  };
  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);
    ReactUpdates.asap(forceUpdateIfMounted, this);
    return returnValue;
  }
  module.exports = ReactDOMTextarea;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactChildReconciler.js", ["./ReactReconciler", "./instantiateReactComponent", "./KeyEscapeUtils", "./shouldUpdateReactComponent", "./traverseAllChildren", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactReconciler = $__require('./ReactReconciler');
  var instantiateReactComponent = $__require('./instantiateReactComponent');
  var KeyEscapeUtils = $__require('./KeyEscapeUtils');
  var shouldUpdateReactComponent = $__require('./shouldUpdateReactComponent');
  var traverseAllChildren = $__require('./traverseAllChildren');
  var warning = $__require('fbjs/lib/warning');
  function instantiateChild(childInstances, child, name) {
    var keyUnique = childInstances[name] === undefined;
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', KeyEscapeUtils.unescape(name)) : void 0;
    }
    if (child != null && keyUnique) {
      childInstances[name] = instantiateReactComponent(child);
    }
  }
  var ReactChildReconciler = {
    instantiateChildren: function(nestedChildNodes, transaction, context) {
      if (nestedChildNodes == null) {
        return null;
      }
      var childInstances = {};
      traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
      return childInstances;
    },
    updateChildren: function(prevChildren, nextChildren, removedNodes, transaction, context) {
      if (!nextChildren && !prevChildren) {
        return;
      }
      var name;
      var prevChild;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = nextChildren[name];
        if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
          ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
          nextChildren[name] = prevChild;
        } else {
          if (prevChild) {
            removedNodes[name] = ReactReconciler.getNativeNode(prevChild);
            ReactReconciler.unmountComponent(prevChild, false);
          }
          var nextChildInstance = instantiateReactComponent(nextElement);
          nextChildren[name] = nextChildInstance;
        }
      }
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
          prevChild = prevChildren[name];
          removedNodes[name] = ReactReconciler.getNativeNode(prevChild);
          ReactReconciler.unmountComponent(prevChild, false);
        }
      }
    },
    unmountChildren: function(renderedChildren, safely) {
      for (var name in renderedChildren) {
        if (renderedChildren.hasOwnProperty(name)) {
          var renderedChild = renderedChildren[name];
          ReactReconciler.unmountComponent(renderedChild, safely);
        }
      }
    }
  };
  module.exports = ReactChildReconciler;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/flattenChildren.js", ["./KeyEscapeUtils", "./traverseAllChildren", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var KeyEscapeUtils = $__require('./KeyEscapeUtils');
  var traverseAllChildren = $__require('./traverseAllChildren');
  var warning = $__require('fbjs/lib/warning');
  function flattenSingleChildIntoContext(traverseContext, child, name) {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', KeyEscapeUtils.unescape(name)) : void 0;
    }
    if (keyUnique && child != null) {
      result[name] = child;
    }
  }
  function flattenChildren(children) {
    if (children == null) {
      return children;
    }
    var result = {};
    traverseAllChildren(children, flattenSingleChildIntoContext, result);
    return result;
  }
  module.exports = flattenChildren;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactMultiChild.js", ["./ReactComponentEnvironment", "./ReactMultiChildUpdateTypes", "./ReactCurrentOwner", "./ReactReconciler", "./ReactChildReconciler", "./flattenChildren", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactComponentEnvironment = $__require('./ReactComponentEnvironment');
  var ReactMultiChildUpdateTypes = $__require('./ReactMultiChildUpdateTypes');
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var ReactReconciler = $__require('./ReactReconciler');
  var ReactChildReconciler = $__require('./ReactChildReconciler');
  var flattenChildren = $__require('./flattenChildren');
  var invariant = $__require('fbjs/lib/invariant');
  function makeInsertMarkup(markup, afterNode, toIndex) {
    return {
      type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
      content: markup,
      fromIndex: null,
      fromNode: null,
      toIndex: toIndex,
      afterNode: afterNode
    };
  }
  function makeMove(child, afterNode, toIndex) {
    return {
      type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
      content: null,
      fromIndex: child._mountIndex,
      fromNode: ReactReconciler.getNativeNode(child),
      toIndex: toIndex,
      afterNode: afterNode
    };
  }
  function makeRemove(child, node) {
    return {
      type: ReactMultiChildUpdateTypes.REMOVE_NODE,
      content: null,
      fromIndex: child._mountIndex,
      fromNode: node,
      toIndex: null,
      afterNode: null
    };
  }
  function makeSetMarkup(markup) {
    return {
      type: ReactMultiChildUpdateTypes.SET_MARKUP,
      content: markup,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    };
  }
  function makeTextContent(textContent) {
    return {
      type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
      content: textContent,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    };
  }
  function enqueue(queue, update) {
    if (update) {
      queue = queue || [];
      queue.push(update);
    }
    return queue;
  }
  function processQueue(inst, updateQueue) {
    ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
  }
  var ReactMultiChild = {Mixin: {
      _reconcilerInstantiateChildren: function(nestedChildren, transaction, context) {
        if ("production" !== 'production') {
          if (this._currentElement) {
            try {
              ReactCurrentOwner.current = this._currentElement._owner;
              return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
            } finally {
              ReactCurrentOwner.current = null;
            }
          }
        }
        return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
      },
      _reconcilerUpdateChildren: function(prevChildren, nextNestedChildrenElements, removedNodes, transaction, context) {
        var nextChildren;
        if ("production" !== 'production') {
          if (this._currentElement) {
            try {
              ReactCurrentOwner.current = this._currentElement._owner;
              nextChildren = flattenChildren(nextNestedChildrenElements);
            } finally {
              ReactCurrentOwner.current = null;
            }
            ReactChildReconciler.updateChildren(prevChildren, nextChildren, removedNodes, transaction, context);
            return nextChildren;
          }
        }
        nextChildren = flattenChildren(nextNestedChildrenElements);
        ReactChildReconciler.updateChildren(prevChildren, nextChildren, removedNodes, transaction, context);
        return nextChildren;
      },
      mountChildren: function(nestedChildren, transaction, context) {
        var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
        this._renderedChildren = children;
        var mountImages = [];
        var index = 0;
        for (var name in children) {
          if (children.hasOwnProperty(name)) {
            var child = children[name];
            var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._nativeContainerInfo, context);
            child._mountIndex = index++;
            mountImages.push(mountImage);
          }
        }
        return mountImages;
      },
      updateTextContent: function(nextContent) {
        var prevChildren = this._renderedChildren;
        ReactChildReconciler.unmountChildren(prevChildren, false);
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            !false ? "production" !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : invariant(false) : void 0;
          }
        }
        var updates = [makeTextContent(nextContent)];
        processQueue(this, updates);
      },
      updateMarkup: function(nextMarkup) {
        var prevChildren = this._renderedChildren;
        ReactChildReconciler.unmountChildren(prevChildren, false);
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            !false ? "production" !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : invariant(false) : void 0;
          }
        }
        var updates = [makeSetMarkup(nextMarkup)];
        processQueue(this, updates);
      },
      updateChildren: function(nextNestedChildrenElements, transaction, context) {
        this._updateChildren(nextNestedChildrenElements, transaction, context);
      },
      _updateChildren: function(nextNestedChildrenElements, transaction, context) {
        var prevChildren = this._renderedChildren;
        var removedNodes = {};
        var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, removedNodes, transaction, context);
        if (!nextChildren && !prevChildren) {
          return;
        }
        var updates = null;
        var name;
        var lastIndex = 0;
        var nextIndex = 0;
        var lastPlacedNode = null;
        for (name in nextChildren) {
          if (!nextChildren.hasOwnProperty(name)) {
            continue;
          }
          var prevChild = prevChildren && prevChildren[name];
          var nextChild = nextChildren[name];
          if (prevChild === nextChild) {
            updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            prevChild._mountIndex = nextIndex;
          } else {
            if (prevChild) {
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            }
            updates = enqueue(updates, this._mountChildAtIndex(nextChild, lastPlacedNode, nextIndex, transaction, context));
          }
          nextIndex++;
          lastPlacedNode = ReactReconciler.getNativeNode(nextChild);
        }
        for (name in removedNodes) {
          if (removedNodes.hasOwnProperty(name)) {
            updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
          }
        }
        if (updates) {
          processQueue(this, updates);
        }
        this._renderedChildren = nextChildren;
      },
      unmountChildren: function(safely) {
        var renderedChildren = this._renderedChildren;
        ReactChildReconciler.unmountChildren(renderedChildren, safely);
        this._renderedChildren = null;
      },
      moveChild: function(child, afterNode, toIndex, lastIndex) {
        if (child._mountIndex < lastIndex) {
          return makeMove(child, afterNode, toIndex);
        }
      },
      createChild: function(child, afterNode, mountImage) {
        return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
      },
      removeChild: function(child, node) {
        return makeRemove(child, node);
      },
      _mountChildAtIndex: function(child, afterNode, index, transaction, context) {
        var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._nativeContainerInfo, context);
        child._mountIndex = index;
        return this.createChild(child, afterNode, mountImage);
      },
      _unmountChild: function(child, node) {
        var update = this.removeChild(child, node);
        child._mountIndex = null;
        return update;
      }
    }};
  module.exports = ReactMultiChild;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMComponent.js", ["object-assign", "./AutoFocusUtils", "./CSSPropertyOperations", "./DOMLazyTree", "./DOMNamespaces", "./DOMProperty", "./DOMPropertyOperations", "./EventConstants", "./EventPluginHub", "./EventPluginRegistry", "./ReactBrowserEventEmitter", "./ReactComponentBrowserEnvironment", "./ReactDOMButton", "./ReactDOMComponentFlags", "./ReactDOMComponentTree", "./ReactDOMInput", "./ReactDOMOption", "./ReactDOMSelect", "./ReactDOMTextarea", "./ReactMultiChild", "./ReactPerf", "./escapeTextContentForBrowser", "fbjs/lib/invariant", "./isEventSupported", "fbjs/lib/keyOf", "fbjs/lib/shallowEqual", "./validateDOMNesting", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var AutoFocusUtils = $__require('./AutoFocusUtils');
  var CSSPropertyOperations = $__require('./CSSPropertyOperations');
  var DOMLazyTree = $__require('./DOMLazyTree');
  var DOMNamespaces = $__require('./DOMNamespaces');
  var DOMProperty = $__require('./DOMProperty');
  var DOMPropertyOperations = $__require('./DOMPropertyOperations');
  var EventConstants = $__require('./EventConstants');
  var EventPluginHub = $__require('./EventPluginHub');
  var EventPluginRegistry = $__require('./EventPluginRegistry');
  var ReactBrowserEventEmitter = $__require('./ReactBrowserEventEmitter');
  var ReactComponentBrowserEnvironment = $__require('./ReactComponentBrowserEnvironment');
  var ReactDOMButton = $__require('./ReactDOMButton');
  var ReactDOMComponentFlags = $__require('./ReactDOMComponentFlags');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactDOMInput = $__require('./ReactDOMInput');
  var ReactDOMOption = $__require('./ReactDOMOption');
  var ReactDOMSelect = $__require('./ReactDOMSelect');
  var ReactDOMTextarea = $__require('./ReactDOMTextarea');
  var ReactMultiChild = $__require('./ReactMultiChild');
  var ReactPerf = $__require('./ReactPerf');
  var escapeTextContentForBrowser = $__require('./escapeTextContentForBrowser');
  var invariant = $__require('fbjs/lib/invariant');
  var isEventSupported = $__require('./isEventSupported');
  var keyOf = $__require('fbjs/lib/keyOf');
  var shallowEqual = $__require('fbjs/lib/shallowEqual');
  var validateDOMNesting = $__require('./validateDOMNesting');
  var warning = $__require('fbjs/lib/warning');
  var Flags = ReactDOMComponentFlags;
  var deleteListener = EventPluginHub.deleteListener;
  var getNode = ReactDOMComponentTree.getNodeFromInstance;
  var listenTo = ReactBrowserEventEmitter.listenTo;
  var registrationNameModules = EventPluginRegistry.registrationNameModules;
  var CONTENT_TYPES = {
    'string': true,
    'number': true
  };
  var STYLE = keyOf({style: null});
  var HTML = keyOf({__html: null});
  var RESERVED_PROPS = {
    children: null,
    dangerouslySetInnerHTML: null,
    suppressContentEditableWarning: null
  };
  var DOC_FRAGMENT_TYPE = 11;
  function getDeclarationErrorAddendum(internalInstance) {
    if (internalInstance) {
      var owner = internalInstance._currentElement._owner || null;
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' This DOM node was rendered by `' + name + '`.';
        }
      }
    }
    return '';
  }
  function friendlyStringify(obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        return '[' + obj.map(friendlyStringify).join(', ') + ']';
      } else {
        var pairs = [];
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
            pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
          }
        }
        return '{' + pairs.join(', ') + '}';
      }
    } else if (typeof obj === 'string') {
      return JSON.stringify(obj);
    } else if (typeof obj === 'function') {
      return '[function object]';
    }
    return String(obj);
  }
  var styleMutationWarning = {};
  function checkAndWarnForMutatedStyle(style1, style2, component) {
    if (style1 == null || style2 == null) {
      return;
    }
    if (shallowEqual(style1, style2)) {
      return;
    }
    var componentName = component._tag;
    var owner = component._currentElement._owner;
    var ownerName;
    if (owner) {
      ownerName = owner.getName();
    }
    var hash = ownerName + '|' + componentName;
    if (styleMutationWarning.hasOwnProperty(hash)) {
      return;
    }
    styleMutationWarning[hash] = true;
    "production" !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : void 0;
  }
  function assertValidProps(component, props) {
    if (!props) {
      return;
    }
    if (voidElementTags[component._tag]) {
      !(props.children == null && props.dangerouslySetInnerHTML == null) ? "production" !== 'production' ? invariant(false, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : invariant(false) : void 0;
    }
    if (props.dangerouslySetInnerHTML != null) {
      !(props.children == null) ? "production" !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : void 0;
      !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? "production" !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : void 0;
    }
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : void 0;
      "production" !== 'production' ? warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
      "production" !== 'production' ? warning(props.onFocusIn == null && props.onFocusOut == null, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.') : void 0;
    }
    !(props.style == null || typeof props.style === 'object') ? "production" !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : void 0;
  }
  function enqueuePutListener(inst, registrationName, listener, transaction) {
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : void 0;
    }
    var containerInfo = inst._nativeContainerInfo;
    var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
    var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
    if (!doc) {
      return;
    }
    listenTo(registrationName, doc);
    transaction.getReactMountReady().enqueue(putListener, {
      inst: inst,
      registrationName: registrationName,
      listener: listener
    });
  }
  function putListener() {
    var listenerToPut = this;
    EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
  }
  function optionPostMount() {
    var inst = this;
    ReactDOMOption.postMountWrapper(inst);
  }
  var mediaEvents = {
    topAbort: 'abort',
    topCanPlay: 'canplay',
    topCanPlayThrough: 'canplaythrough',
    topDurationChange: 'durationchange',
    topEmptied: 'emptied',
    topEncrypted: 'encrypted',
    topEnded: 'ended',
    topError: 'error',
    topLoadedData: 'loadeddata',
    topLoadedMetadata: 'loadedmetadata',
    topLoadStart: 'loadstart',
    topPause: 'pause',
    topPlay: 'play',
    topPlaying: 'playing',
    topProgress: 'progress',
    topRateChange: 'ratechange',
    topSeeked: 'seeked',
    topSeeking: 'seeking',
    topStalled: 'stalled',
    topSuspend: 'suspend',
    topTimeUpdate: 'timeupdate',
    topVolumeChange: 'volumechange',
    topWaiting: 'waiting'
  };
  function trapBubbledEventsLocal() {
    var inst = this;
    !inst._rootNodeID ? "production" !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : void 0;
    var node = getNode(inst);
    !node ? "production" !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : void 0;
    switch (inst._tag) {
      case 'iframe':
      case 'object':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
        break;
      case 'video':
      case 'audio':
        inst._wrapperState.listeners = [];
        for (var event in mediaEvents) {
          if (mediaEvents.hasOwnProperty(event)) {
            inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
          }
        }
        break;
      case 'img':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
        break;
      case 'form':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
        break;
      case 'input':
      case 'select':
      case 'textarea':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topInvalid, 'invalid', node)];
        break;
    }
  }
  function postUpdateSelectWrapper() {
    ReactDOMSelect.postUpdateWrapper(this);
  }
  var omittedCloseTags = {
    'area': true,
    'base': true,
    'br': true,
    'col': true,
    'embed': true,
    'hr': true,
    'img': true,
    'input': true,
    'keygen': true,
    'link': true,
    'meta': true,
    'param': true,
    'source': true,
    'track': true,
    'wbr': true
  };
  var newlineEatingTags = {
    'listing': true,
    'pre': true,
    'textarea': true
  };
  var voidElementTags = _assign({'menuitem': true}, omittedCloseTags);
  var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
  var validatedTagCache = {};
  var hasOwnProperty = {}.hasOwnProperty;
  function validateDangerousTag(tag) {
    if (!hasOwnProperty.call(validatedTagCache, tag)) {
      !VALID_TAG_REGEX.test(tag) ? "production" !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : void 0;
      validatedTagCache[tag] = true;
    }
  }
  function isCustomComponent(tagName, props) {
    return tagName.indexOf('-') >= 0 || props.is != null;
  }
  var globalIdCounter = 1;
  function ReactDOMComponent(element) {
    var tag = element.type;
    validateDangerousTag(tag);
    this._currentElement = element;
    this._tag = tag.toLowerCase();
    this._namespaceURI = null;
    this._renderedChildren = null;
    this._previousStyle = null;
    this._previousStyleCopy = null;
    this._nativeNode = null;
    this._nativeParent = null;
    this._rootNodeID = null;
    this._domID = null;
    this._nativeContainerInfo = null;
    this._wrapperState = null;
    this._topLevelWrapper = null;
    this._flags = 0;
    if ("production" !== 'production') {
      this._ancestorInfo = null;
    }
  }
  ReactDOMComponent.displayName = 'ReactDOMComponent';
  ReactDOMComponent.Mixin = {
    mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
      this._rootNodeID = globalIdCounter++;
      this._domID = nativeContainerInfo._idCounter++;
      this._nativeParent = nativeParent;
      this._nativeContainerInfo = nativeContainerInfo;
      var props = this._currentElement.props;
      switch (this._tag) {
        case 'iframe':
        case 'object':
        case 'img':
        case 'form':
        case 'video':
        case 'audio':
          this._wrapperState = {listeners: null};
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
        case 'button':
          props = ReactDOMButton.getNativeProps(this, props, nativeParent);
          break;
        case 'input':
          ReactDOMInput.mountWrapper(this, props, nativeParent);
          props = ReactDOMInput.getNativeProps(this, props);
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
        case 'option':
          ReactDOMOption.mountWrapper(this, props, nativeParent);
          props = ReactDOMOption.getNativeProps(this, props);
          break;
        case 'select':
          ReactDOMSelect.mountWrapper(this, props, nativeParent);
          props = ReactDOMSelect.getNativeProps(this, props);
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
        case 'textarea':
          ReactDOMTextarea.mountWrapper(this, props, nativeParent);
          props = ReactDOMTextarea.getNativeProps(this, props);
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
      }
      assertValidProps(this, props);
      var namespaceURI;
      var parentTag;
      if (nativeParent != null) {
        namespaceURI = nativeParent._namespaceURI;
        parentTag = nativeParent._tag;
      } else if (nativeContainerInfo._tag) {
        namespaceURI = nativeContainerInfo._namespaceURI;
        parentTag = nativeContainerInfo._tag;
      }
      if (namespaceURI == null || namespaceURI === DOMNamespaces.svg && parentTag === 'foreignobject') {
        namespaceURI = DOMNamespaces.html;
      }
      if (namespaceURI === DOMNamespaces.html) {
        if (this._tag === 'svg') {
          namespaceURI = DOMNamespaces.svg;
        } else if (this._tag === 'math') {
          namespaceURI = DOMNamespaces.mathml;
        }
      }
      this._namespaceURI = namespaceURI;
      if ("production" !== 'production') {
        var parentInfo;
        if (nativeParent != null) {
          parentInfo = nativeParent._ancestorInfo;
        } else if (nativeContainerInfo._tag) {
          parentInfo = nativeContainerInfo._ancestorInfo;
        }
        if (parentInfo) {
          validateDOMNesting(this._tag, this, parentInfo);
        }
        this._ancestorInfo = validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
      }
      var mountImage;
      if (transaction.useCreateElement) {
        var ownerDocument = nativeContainerInfo._ownerDocument;
        var el;
        if (namespaceURI === DOMNamespaces.html) {
          if (this._tag === 'script') {
            var div = ownerDocument.createElement('div');
            var type = this._currentElement.type;
            div.innerHTML = '<' + type + '></' + type + '>';
            el = div.removeChild(div.firstChild);
          } else {
            el = ownerDocument.createElement(this._currentElement.type);
          }
        } else {
          el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
        }
        ReactDOMComponentTree.precacheNode(this, el);
        this._flags |= Flags.hasCachedChildNodes;
        if (!this._nativeParent) {
          DOMPropertyOperations.setAttributeForRoot(el);
        }
        this._updateDOMProperties(null, props, transaction);
        var lazyTree = DOMLazyTree(el);
        this._createInitialChildren(transaction, props, context, lazyTree);
        mountImage = lazyTree;
      } else {
        var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
        var tagContent = this._createContentMarkup(transaction, props, context);
        if (!tagContent && omittedCloseTags[this._tag]) {
          mountImage = tagOpen + '/>';
        } else {
          mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
        }
      }
      switch (this._tag) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          if (props.autoFocus) {
            transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
          }
          break;
        case 'option':
          transaction.getReactMountReady().enqueue(optionPostMount, this);
      }
      return mountImage;
    },
    _createOpenTagMarkupAndPutListeners: function(transaction, props) {
      var ret = '<' + this._currentElement.type;
      for (var propKey in props) {
        if (!props.hasOwnProperty(propKey)) {
          continue;
        }
        var propValue = props[propKey];
        if (propValue == null) {
          continue;
        }
        if (registrationNameModules.hasOwnProperty(propKey)) {
          if (propValue) {
            enqueuePutListener(this, propKey, propValue, transaction);
          }
        } else {
          if (propKey === STYLE) {
            if (propValue) {
              if ("production" !== 'production') {
                this._previousStyle = propValue;
              }
              propValue = this._previousStyleCopy = _assign({}, props.style);
            }
            propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);
          }
          var markup = null;
          if (this._tag != null && isCustomComponent(this._tag, props)) {
            if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
              markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
            }
          } else {
            markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
          }
          if (markup) {
            ret += ' ' + markup;
          }
        }
      }
      if (transaction.renderToStaticMarkup) {
        return ret;
      }
      if (!this._nativeParent) {
        ret += ' ' + DOMPropertyOperations.createMarkupForRoot();
      }
      ret += ' ' + DOMPropertyOperations.createMarkupForID(this._domID);
      return ret;
    },
    _createContentMarkup: function(transaction, props, context) {
      var ret = '';
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          ret = innerHTML.__html;
        }
      } else {
        var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
        var childrenToUse = contentToUse != null ? null : props.children;
        if (contentToUse != null) {
          ret = escapeTextContentForBrowser(contentToUse);
        } else if (childrenToUse != null) {
          var mountImages = this.mountChildren(childrenToUse, transaction, context);
          ret = mountImages.join('');
        }
      }
      if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
        return '\n' + ret;
      } else {
        return ret;
      }
    },
    _createInitialChildren: function(transaction, props, context, lazyTree) {
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
        }
      } else {
        var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
        var childrenToUse = contentToUse != null ? null : props.children;
        if (contentToUse != null) {
          DOMLazyTree.queueText(lazyTree, contentToUse);
        } else if (childrenToUse != null) {
          var mountImages = this.mountChildren(childrenToUse, transaction, context);
          for (var i = 0; i < mountImages.length; i++) {
            DOMLazyTree.queueChild(lazyTree, mountImages[i]);
          }
        }
      }
    },
    receiveComponent: function(nextElement, transaction, context) {
      var prevElement = this._currentElement;
      this._currentElement = nextElement;
      this.updateComponent(transaction, prevElement, nextElement, context);
    },
    updateComponent: function(transaction, prevElement, nextElement, context) {
      var lastProps = prevElement.props;
      var nextProps = this._currentElement.props;
      switch (this._tag) {
        case 'button':
          lastProps = ReactDOMButton.getNativeProps(this, lastProps);
          nextProps = ReactDOMButton.getNativeProps(this, nextProps);
          break;
        case 'input':
          ReactDOMInput.updateWrapper(this);
          lastProps = ReactDOMInput.getNativeProps(this, lastProps);
          nextProps = ReactDOMInput.getNativeProps(this, nextProps);
          break;
        case 'option':
          lastProps = ReactDOMOption.getNativeProps(this, lastProps);
          nextProps = ReactDOMOption.getNativeProps(this, nextProps);
          break;
        case 'select':
          lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
          nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
          break;
        case 'textarea':
          ReactDOMTextarea.updateWrapper(this);
          lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
          nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
          break;
      }
      assertValidProps(this, nextProps);
      this._updateDOMProperties(lastProps, nextProps, transaction);
      this._updateDOMChildren(lastProps, nextProps, transaction, context);
      if (this._tag === 'select') {
        transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
      }
    },
    _updateDOMProperties: function(lastProps, nextProps, transaction) {
      var propKey;
      var styleName;
      var styleUpdates;
      for (propKey in lastProps) {
        if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
          continue;
        }
        if (propKey === STYLE) {
          var lastStyle = this._previousStyleCopy;
          for (styleName in lastStyle) {
            if (lastStyle.hasOwnProperty(styleName)) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          this._previousStyleCopy = null;
        } else if (registrationNameModules.hasOwnProperty(propKey)) {
          if (lastProps[propKey]) {
            deleteListener(this, propKey);
          }
        } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
          DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);
        }
      }
      for (propKey in nextProps) {
        var nextProp = nextProps[propKey];
        var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
        if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
          continue;
        }
        if (propKey === STYLE) {
          if (nextProp) {
            if ("production" !== 'production') {
              checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
              this._previousStyle = nextProp;
            }
            nextProp = this._previousStyleCopy = _assign({}, nextProp);
          } else {
            this._previousStyleCopy = null;
          }
          if (lastProp) {
            for (styleName in lastProp) {
              if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            for (styleName in nextProp) {
              if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = nextProp[styleName];
              }
            }
          } else {
            styleUpdates = nextProp;
          }
        } else if (registrationNameModules.hasOwnProperty(propKey)) {
          if (nextProp) {
            enqueuePutListener(this, propKey, nextProp, transaction);
          } else if (lastProp) {
            deleteListener(this, propKey);
          }
        } else if (isCustomComponent(this._tag, nextProps)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            DOMPropertyOperations.setValueForAttribute(getNode(this), propKey, nextProp);
          }
        } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
          var node = getNode(this);
          if (nextProp != null) {
            DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
          } else {
            DOMPropertyOperations.deleteValueForProperty(node, propKey);
          }
        }
      }
      if (styleUpdates) {
        CSSPropertyOperations.setValueForStyles(getNode(this), styleUpdates, this);
      }
    },
    _updateDOMChildren: function(lastProps, nextProps, transaction, context) {
      var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
      var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
      var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
      var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
      var lastChildren = lastContent != null ? null : lastProps.children;
      var nextChildren = nextContent != null ? null : nextProps.children;
      var lastHasContentOrHtml = lastContent != null || lastHtml != null;
      var nextHasContentOrHtml = nextContent != null || nextHtml != null;
      if (lastChildren != null && nextChildren == null) {
        this.updateChildren(null, transaction, context);
      } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
        this.updateTextContent('');
      }
      if (nextContent != null) {
        if (lastContent !== nextContent) {
          this.updateTextContent('' + nextContent);
        }
      } else if (nextHtml != null) {
        if (lastHtml !== nextHtml) {
          this.updateMarkup('' + nextHtml);
        }
      } else if (nextChildren != null) {
        this.updateChildren(nextChildren, transaction, context);
      }
    },
    getNativeNode: function() {
      return getNode(this);
    },
    unmountComponent: function(safely) {
      switch (this._tag) {
        case 'iframe':
        case 'object':
        case 'img':
        case 'form':
        case 'video':
        case 'audio':
          var listeners = this._wrapperState.listeners;
          if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
              listeners[i].remove();
            }
          }
          break;
        case 'html':
        case 'head':
        case 'body':
          !false ? "production" !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : void 0;
          break;
      }
      this.unmountChildren(safely);
      ReactDOMComponentTree.uncacheNode(this);
      EventPluginHub.deleteAllListeners(this);
      ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
      this._rootNodeID = null;
      this._domID = null;
      this._wrapperState = null;
    },
    getPublicInstance: function() {
      return getNode(this);
    }
  };
  ReactPerf.measureMethods(ReactDOMComponent.Mixin, 'ReactDOMComponent', {
    mountComponent: 'mountComponent',
    receiveComponent: 'receiveComponent'
  });
  _assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
  module.exports = ReactDOMComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMEmptyComponent.js", ["object-assign", "./DOMLazyTree", "./ReactDOMComponentTree", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var DOMLazyTree = $__require('./DOMLazyTree');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactDOMEmptyComponent = function(instantiate) {
    this._currentElement = null;
    this._nativeNode = null;
    this._nativeParent = null;
    this._nativeContainerInfo = null;
    this._domID = null;
  };
  _assign(ReactDOMEmptyComponent.prototype, {
    mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
      var domID = nativeContainerInfo._idCounter++;
      this._domID = domID;
      this._nativeParent = nativeParent;
      this._nativeContainerInfo = nativeContainerInfo;
      var nodeValue = ' react-empty: ' + this._domID + ' ';
      if (transaction.useCreateElement) {
        var ownerDocument = nativeContainerInfo._ownerDocument;
        var node = ownerDocument.createComment(nodeValue);
        ReactDOMComponentTree.precacheNode(this, node);
        return DOMLazyTree(node);
      } else {
        if (transaction.renderToStaticMarkup) {
          return '';
        }
        return '<!--' + nodeValue + '-->';
      }
    },
    receiveComponent: function() {},
    getNativeNode: function() {
      return ReactDOMComponentTree.getNodeFromInstance(this);
    },
    unmountComponent: function() {
      ReactDOMComponentTree.uncacheNode(this);
    }
  });
  module.exports = ReactDOMEmptyComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMTreeTraversal.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  function getLowestCommonAncestor(instA, instB) {
    !('_nativeNode' in instA) ? "production" !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
    !('_nativeNode' in instB) ? "production" !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
    var depthA = 0;
    for (var tempA = instA; tempA; tempA = tempA._nativeParent) {
      depthA++;
    }
    var depthB = 0;
    for (var tempB = instB; tempB; tempB = tempB._nativeParent) {
      depthB++;
    }
    while (depthA - depthB > 0) {
      instA = instA._nativeParent;
      depthA--;
    }
    while (depthB - depthA > 0) {
      instB = instB._nativeParent;
      depthB--;
    }
    var depth = depthA;
    while (depth--) {
      if (instA === instB) {
        return instA;
      }
      instA = instA._nativeParent;
      instB = instB._nativeParent;
    }
    return null;
  }
  function isAncestor(instA, instB) {
    !('_nativeNode' in instA) ? "production" !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : invariant(false) : void 0;
    !('_nativeNode' in instB) ? "production" !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : invariant(false) : void 0;
    while (instB) {
      if (instB === instA) {
        return true;
      }
      instB = instB._nativeParent;
    }
    return false;
  }
  function getParentInstance(inst) {
    !('_nativeNode' in inst) ? "production" !== 'production' ? invariant(false, 'getParentInstance: Invalid argument.') : invariant(false) : void 0;
    return inst._nativeParent;
  }
  function traverseTwoPhase(inst, fn, arg) {
    var path = [];
    while (inst) {
      path.push(inst);
      inst = inst._nativeParent;
    }
    var i;
    for (i = path.length; i-- > 0; ) {
      fn(path[i], false, arg);
    }
    for (i = 0; i < path.length; i++) {
      fn(path[i], true, arg);
    }
  }
  function traverseEnterLeave(from, to, fn, argFrom, argTo) {
    var common = from && to ? getLowestCommonAncestor(from, to) : null;
    var pathFrom = [];
    while (from && from !== common) {
      pathFrom.push(from);
      from = from._nativeParent;
    }
    var pathTo = [];
    while (to && to !== common) {
      pathTo.push(to);
      to = to._nativeParent;
    }
    var i;
    for (i = 0; i < pathFrom.length; i++) {
      fn(pathFrom[i], true, argFrom);
    }
    for (i = pathTo.length; i-- > 0; ) {
      fn(pathTo[i], false, argTo);
    }
  }
  module.exports = {
    isAncestor: isAncestor,
    getLowestCommonAncestor: getLowestCommonAncestor,
    getParentInstance: getParentInstance,
    traverseTwoPhase: traverseTwoPhase,
    traverseEnterLeave: traverseEnterLeave
  };
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/createArrayFromMixed.js", ["./invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('./invariant');
  function toArray(obj) {
    var length = obj.length;
    !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? "production" !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;
    !(typeof length === 'number') ? "production" !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;
    !(length === 0 || length - 1 in obj) ? "production" !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;
    !(typeof obj.callee !== 'function') ? "production" !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;
    if (obj.hasOwnProperty) {
      try {
        return Array.prototype.slice.call(obj);
      } catch (e) {}
    }
    var ret = Array(length);
    for (var ii = 0; ii < length; ii++) {
      ret[ii] = obj[ii];
    }
    return ret;
  }
  function hasArrayNature(obj) {
    return (!!obj && (typeof obj == 'object' || typeof obj == 'function') && 'length' in obj && !('setInterval' in obj) && typeof obj.nodeType != 'number' && (Array.isArray(obj) || 'callee' in obj || 'item' in obj));
  }
  function createArrayFromMixed(obj) {
    if (!hasArrayNature(obj)) {
      return [obj];
    } else if (Array.isArray(obj)) {
      return obj.slice();
    } else {
      return toArray(obj);
    }
  }
  module.exports = createArrayFromMixed;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/createNodesFromMarkup.js", ["./ExecutionEnvironment", "./createArrayFromMixed", "./getMarkupWrap", "./invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('./ExecutionEnvironment');
  var createArrayFromMixed = $__require('./createArrayFromMixed');
  var getMarkupWrap = $__require('./getMarkupWrap');
  var invariant = $__require('./invariant');
  var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
  var nodeNamePattern = /^\s*<(\w+)/;
  function getNodeName(markup) {
    var nodeNameMatch = markup.match(nodeNamePattern);
    return nodeNameMatch && nodeNameMatch[1].toLowerCase();
  }
  function createNodesFromMarkup(markup, handleScript) {
    var node = dummyNode;
    !!!dummyNode ? "production" !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : void 0;
    var nodeName = getNodeName(markup);
    var wrap = nodeName && getMarkupWrap(nodeName);
    if (wrap) {
      node.innerHTML = wrap[1] + markup + wrap[2];
      var wrapDepth = wrap[0];
      while (wrapDepth--) {
        node = node.lastChild;
      }
    } else {
      node.innerHTML = markup;
    }
    var scripts = node.getElementsByTagName('script');
    if (scripts.length) {
      !handleScript ? "production" !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : void 0;
      createArrayFromMixed(scripts).forEach(handleScript);
    }
    var nodes = Array.from(node.childNodes);
    while (node.lastChild) {
      node.removeChild(node.lastChild);
    }
    return nodes;
  }
  module.exports = createNodesFromMarkup;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/getMarkupWrap.js", ["./ExecutionEnvironment", "./invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('./ExecutionEnvironment');
  var invariant = $__require('./invariant');
  var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
  var shouldWrap = {};
  var selectWrap = [1, '<select multiple="true">', '</select>'];
  var tableWrap = [1, '<table>', '</table>'];
  var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
  var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];
  var markupWrap = {
    '*': [1, '?<div>', '</div>'],
    'area': [1, '<map>', '</map>'],
    'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    'legend': [1, '<fieldset>', '</fieldset>'],
    'param': [1, '<object>', '</object>'],
    'tr': [2, '<table><tbody>', '</tbody></table>'],
    'optgroup': selectWrap,
    'option': selectWrap,
    'caption': tableWrap,
    'colgroup': tableWrap,
    'tbody': tableWrap,
    'tfoot': tableWrap,
    'thead': tableWrap,
    'td': trWrap,
    'th': trWrap
  };
  var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
  svgElements.forEach(function(nodeName) {
    markupWrap[nodeName] = svgWrap;
    shouldWrap[nodeName] = true;
  });
  function getMarkupWrap(nodeName) {
    !!!dummyNode ? "production" !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : void 0;
    if (!markupWrap.hasOwnProperty(nodeName)) {
      nodeName = '*';
    }
    if (!shouldWrap.hasOwnProperty(nodeName)) {
      if (nodeName === '*') {
        dummyNode.innerHTML = '<link />';
      } else {
        dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
      }
      shouldWrap[nodeName] = !dummyNode.firstChild;
    }
    return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
  }
  module.exports = getMarkupWrap;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/Danger.js", ["./DOMLazyTree", "fbjs/lib/ExecutionEnvironment", "fbjs/lib/createNodesFromMarkup", "fbjs/lib/emptyFunction", "fbjs/lib/getMarkupWrap", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMLazyTree = $__require('./DOMLazyTree');
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var createNodesFromMarkup = $__require('fbjs/lib/createNodesFromMarkup');
  var emptyFunction = $__require('fbjs/lib/emptyFunction');
  var getMarkupWrap = $__require('fbjs/lib/getMarkupWrap');
  var invariant = $__require('fbjs/lib/invariant');
  var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
  var RESULT_INDEX_ATTR = 'data-danger-index';
  function getNodeName(markup) {
    return markup.substring(1, markup.indexOf(' '));
  }
  var Danger = {
    dangerouslyRenderMarkup: function(markupList) {
      !ExecutionEnvironment.canUseDOM ? "production" !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : void 0;
      var nodeName;
      var markupByNodeName = {};
      for (var i = 0; i < markupList.length; i++) {
        !markupList[i] ? "production" !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : void 0;
        nodeName = getNodeName(markupList[i]);
        nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
        markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
        markupByNodeName[nodeName][i] = markupList[i];
      }
      var resultList = [];
      var resultListAssignmentCount = 0;
      for (nodeName in markupByNodeName) {
        if (!markupByNodeName.hasOwnProperty(nodeName)) {
          continue;
        }
        var markupListByNodeName = markupByNodeName[nodeName];
        var resultIndex;
        for (resultIndex in markupListByNodeName) {
          if (markupListByNodeName.hasOwnProperty(resultIndex)) {
            var markup = markupListByNodeName[resultIndex];
            markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP, '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
          }
        }
        var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction);
        for (var j = 0; j < renderNodes.length; ++j) {
          var renderNode = renderNodes[j];
          if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
            resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
            renderNode.removeAttribute(RESULT_INDEX_ATTR);
            !!resultList.hasOwnProperty(resultIndex) ? "production" !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : void 0;
            resultList[resultIndex] = renderNode;
            resultListAssignmentCount += 1;
          } else if ("production" !== 'production') {
            console.error('Danger: Discarding unexpected node:', renderNode);
          }
        }
      }
      !(resultListAssignmentCount === resultList.length) ? "production" !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : void 0;
      !(resultList.length === markupList.length) ? "production" !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : void 0;
      return resultList;
    },
    dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
      !ExecutionEnvironment.canUseDOM ? "production" !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : void 0;
      !markup ? "production" !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : void 0;
      !(oldChild.nodeName !== 'HTML') ? "production" !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : void 0;
      if (typeof markup === 'string') {
        var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
        oldChild.parentNode.replaceChild(newChild, oldChild);
      } else {
        DOMLazyTree.replaceChildWithTree(oldChild, markup);
      }
    }
  };
  module.exports = Danger;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactMultiChildUpdateTypes.js", ["fbjs/lib/keyMirror", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('fbjs/lib/keyMirror');
  var ReactMultiChildUpdateTypes = keyMirror({
    INSERT_MARKUP: null,
    MOVE_EXISTING: null,
    REMOVE_NODE: null,
    SET_MARKUP: null,
    TEXT_CONTENT: null
  });
  module.exports = ReactMultiChildUpdateTypes;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/DOMChildrenOperations.js", ["./DOMLazyTree", "./Danger", "./ReactMultiChildUpdateTypes", "./ReactPerf", "./createMicrosoftUnsafeLocalFunction", "./setInnerHTML", "./setTextContent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMLazyTree = $__require('./DOMLazyTree');
  var Danger = $__require('./Danger');
  var ReactMultiChildUpdateTypes = $__require('./ReactMultiChildUpdateTypes');
  var ReactPerf = $__require('./ReactPerf');
  var createMicrosoftUnsafeLocalFunction = $__require('./createMicrosoftUnsafeLocalFunction');
  var setInnerHTML = $__require('./setInnerHTML');
  var setTextContent = $__require('./setTextContent');
  function getNodeAfter(parentNode, node) {
    if (Array.isArray(node)) {
      node = node[1];
    }
    return node ? node.nextSibling : parentNode.firstChild;
  }
  var insertChildAt = createMicrosoftUnsafeLocalFunction(function(parentNode, childNode, referenceNode) {
    parentNode.insertBefore(childNode, referenceNode);
  });
  function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
    DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
  }
  function moveChild(parentNode, childNode, referenceNode) {
    if (Array.isArray(childNode)) {
      moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
    } else {
      insertChildAt(parentNode, childNode, referenceNode);
    }
  }
  function removeChild(parentNode, childNode) {
    if (Array.isArray(childNode)) {
      var closingComment = childNode[1];
      childNode = childNode[0];
      removeDelimitedText(parentNode, childNode, closingComment);
      parentNode.removeChild(closingComment);
    }
    parentNode.removeChild(childNode);
  }
  function moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
    var node = openingComment;
    while (true) {
      var nextNode = node.nextSibling;
      insertChildAt(parentNode, node, referenceNode);
      if (node === closingComment) {
        break;
      }
      node = nextNode;
    }
  }
  function removeDelimitedText(parentNode, startNode, closingComment) {
    while (true) {
      var node = startNode.nextSibling;
      if (node === closingComment) {
        break;
      } else {
        parentNode.removeChild(node);
      }
    }
  }
  function replaceDelimitedText(openingComment, closingComment, stringText) {
    var parentNode = openingComment.parentNode;
    var nodeAfterComment = openingComment.nextSibling;
    if (nodeAfterComment === closingComment) {
      if (stringText) {
        insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
      }
    } else {
      if (stringText) {
        setTextContent(nodeAfterComment, stringText);
        removeDelimitedText(parentNode, nodeAfterComment, closingComment);
      } else {
        removeDelimitedText(parentNode, openingComment, closingComment);
      }
    }
  }
  var DOMChildrenOperations = {
    dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,
    replaceDelimitedText: replaceDelimitedText,
    processUpdates: function(parentNode, updates) {
      for (var k = 0; k < updates.length; k++) {
        var update = updates[k];
        switch (update.type) {
          case ReactMultiChildUpdateTypes.INSERT_MARKUP:
            insertLazyTreeChildAt(parentNode, update.content, getNodeAfter(parentNode, update.afterNode));
            break;
          case ReactMultiChildUpdateTypes.MOVE_EXISTING:
            moveChild(parentNode, update.fromNode, getNodeAfter(parentNode, update.afterNode));
            break;
          case ReactMultiChildUpdateTypes.SET_MARKUP:
            setInnerHTML(parentNode, update.content);
            break;
          case ReactMultiChildUpdateTypes.TEXT_CONTENT:
            setTextContent(parentNode, update.content);
            break;
          case ReactMultiChildUpdateTypes.REMOVE_NODE:
            removeChild(parentNode, update.fromNode);
            break;
        }
      }
    }
  };
  ReactPerf.measureMethods(DOMChildrenOperations, 'DOMChildrenOperations', {replaceDelimitedText: 'replaceDelimitedText'});
  module.exports = DOMChildrenOperations;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMTextComponent.js", ["object-assign", "./DOMChildrenOperations", "./DOMLazyTree", "./ReactDOMComponentTree", "./ReactPerf", "./escapeTextContentForBrowser", "fbjs/lib/invariant", "./validateDOMNesting", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var DOMChildrenOperations = $__require('./DOMChildrenOperations');
  var DOMLazyTree = $__require('./DOMLazyTree');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactPerf = $__require('./ReactPerf');
  var escapeTextContentForBrowser = $__require('./escapeTextContentForBrowser');
  var invariant = $__require('fbjs/lib/invariant');
  var validateDOMNesting = $__require('./validateDOMNesting');
  var ReactDOMTextComponent = function(text) {
    this._currentElement = text;
    this._stringText = '' + text;
    this._nativeNode = null;
    this._nativeParent = null;
    this._domID = null;
    this._mountIndex = 0;
    this._closingComment = null;
    this._commentNodes = null;
  };
  _assign(ReactDOMTextComponent.prototype, {
    mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
      if ("production" !== 'production') {
        var parentInfo;
        if (nativeParent != null) {
          parentInfo = nativeParent._ancestorInfo;
        } else if (nativeContainerInfo != null) {
          parentInfo = nativeContainerInfo._ancestorInfo;
        }
        if (parentInfo) {
          validateDOMNesting('#text', this, parentInfo);
        }
      }
      var domID = nativeContainerInfo._idCounter++;
      var openingValue = ' react-text: ' + domID + ' ';
      var closingValue = ' /react-text ';
      this._domID = domID;
      this._nativeParent = nativeParent;
      if (transaction.useCreateElement) {
        var ownerDocument = nativeContainerInfo._ownerDocument;
        var openingComment = ownerDocument.createComment(openingValue);
        var closingComment = ownerDocument.createComment(closingValue);
        var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
        if (this._stringText) {
          DOMLazyTree.queueChild(lazyTree, DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
        }
        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
        ReactDOMComponentTree.precacheNode(this, openingComment);
        this._closingComment = closingComment;
        return lazyTree;
      } else {
        var escapedText = escapeTextContentForBrowser(this._stringText);
        if (transaction.renderToStaticMarkup) {
          return escapedText;
        }
        return '<!--' + openingValue + '-->' + escapedText + '<!--' + closingValue + '-->';
      }
    },
    receiveComponent: function(nextText, transaction) {
      if (nextText !== this._currentElement) {
        this._currentElement = nextText;
        var nextStringText = '' + nextText;
        if (nextStringText !== this._stringText) {
          this._stringText = nextStringText;
          var commentNodes = this.getNativeNode();
          DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
        }
      }
    },
    getNativeNode: function() {
      var nativeNode = this._commentNodes;
      if (nativeNode) {
        return nativeNode;
      }
      if (!this._closingComment) {
        var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
        var node = openingComment.nextSibling;
        while (true) {
          !(node != null) ? "production" !== 'production' ? invariant(false, 'Missing closing comment for text component %s', this._domID) : invariant(false) : void 0;
          if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
            this._closingComment = node;
            break;
          }
          node = node.nextSibling;
        }
      }
      nativeNode = [this._nativeNode, this._closingComment];
      this._commentNodes = nativeNode;
      return nativeNode;
    },
    unmountComponent: function() {
      this._closingComment = null;
      this._commentNodes = null;
      ReactDOMComponentTree.uncacheNode(this);
    }
  });
  ReactPerf.measureMethods(ReactDOMTextComponent.prototype, 'ReactDOMTextComponent', {
    mountComponent: 'mountComponent',
    receiveComponent: 'receiveComponent'
  });
  module.exports = ReactDOMTextComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDefaultBatchingStrategy.js", ["object-assign", "./ReactUpdates", "./Transaction", "fbjs/lib/emptyFunction", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var ReactUpdates = $__require('./ReactUpdates');
  var Transaction = $__require('./Transaction');
  var emptyFunction = $__require('fbjs/lib/emptyFunction');
  var RESET_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: function() {
      ReactDefaultBatchingStrategy.isBatchingUpdates = false;
    }
  };
  var FLUSH_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
  };
  var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
  function ReactDefaultBatchingStrategyTransaction() {
    this.reinitializeTransaction();
  }
  _assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    }});
  var transaction = new ReactDefaultBatchingStrategyTransaction();
  var ReactDefaultBatchingStrategy = {
    isBatchingUpdates: false,
    batchedUpdates: function(callback, a, b, c, d, e) {
      var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
      ReactDefaultBatchingStrategy.isBatchingUpdates = true;
      if (alreadyBatchingUpdates) {
        callback(a, b, c, d, e);
      } else {
        transaction.perform(callback, null, a, b, c, d, e);
      }
    }
  };
  module.exports = ReactDefaultBatchingStrategy;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/getUnboundedScrollPosition.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function getUnboundedScrollPosition(scrollable) {
    if (scrollable === window) {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return {
      x: scrollable.scrollLeft,
      y: scrollable.scrollTop
    };
  }
  module.exports = getUnboundedScrollPosition;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactEventListener.js", ["object-assign", "fbjs/lib/EventListener", "fbjs/lib/ExecutionEnvironment", "./PooledClass", "./ReactDOMComponentTree", "./ReactUpdates", "./getEventTarget", "fbjs/lib/getUnboundedScrollPosition", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var EventListener = $__require('fbjs/lib/EventListener');
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var PooledClass = $__require('./PooledClass');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactUpdates = $__require('./ReactUpdates');
  var getEventTarget = $__require('./getEventTarget');
  var getUnboundedScrollPosition = $__require('fbjs/lib/getUnboundedScrollPosition');
  function findParent(inst) {
    while (inst._nativeParent) {
      inst = inst._nativeParent;
    }
    var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
    var container = rootNode.parentNode;
    return ReactDOMComponentTree.getClosestInstanceFromNode(container);
  }
  function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
    this.topLevelType = topLevelType;
    this.nativeEvent = nativeEvent;
    this.ancestors = [];
  }
  _assign(TopLevelCallbackBookKeeping.prototype, {destructor: function() {
      this.topLevelType = null;
      this.nativeEvent = null;
      this.ancestors.length = 0;
    }});
  PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
  function handleTopLevelImpl(bookKeeping) {
    var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
    var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);
    var ancestor = targetInst;
    do {
      bookKeeping.ancestors.push(ancestor);
      ancestor = ancestor && findParent(ancestor);
    } while (ancestor);
    for (var i = 0; i < bookKeeping.ancestors.length; i++) {
      targetInst = bookKeeping.ancestors[i];
      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
    }
  }
  function scrollValueMonitor(cb) {
    var scrollPosition = getUnboundedScrollPosition(window);
    cb(scrollPosition);
  }
  var ReactEventListener = {
    _enabled: true,
    _handleTopLevel: null,
    WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
    setHandleTopLevel: function(handleTopLevel) {
      ReactEventListener._handleTopLevel = handleTopLevel;
    },
    setEnabled: function(enabled) {
      ReactEventListener._enabled = !!enabled;
    },
    isEnabled: function() {
      return ReactEventListener._enabled;
    },
    trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
      var element = handle;
      if (!element) {
        return null;
      }
      return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
    },
    trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
      var element = handle;
      if (!element) {
        return null;
      }
      return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
    },
    monitorScrollValue: function(refresh) {
      var callback = scrollValueMonitor.bind(null, refresh);
      EventListener.listen(window, 'scroll', callback);
    },
    dispatchEvent: function(topLevelType, nativeEvent) {
      if (!ReactEventListener._enabled) {
        return;
      }
      var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
      try {
        ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
      } finally {
        TopLevelCallbackBookKeeping.release(bookKeeping);
      }
    }
  };
  module.exports = ReactEventListener;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactInjection.js", ["./DOMProperty", "./EventPluginHub", "./EventPluginUtils", "./ReactComponentEnvironment", "./ReactClass", "./ReactEmptyComponent", "./ReactBrowserEventEmitter", "./ReactNativeComponent", "./ReactPerf", "./ReactUpdates", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('./DOMProperty');
  var EventPluginHub = $__require('./EventPluginHub');
  var EventPluginUtils = $__require('./EventPluginUtils');
  var ReactComponentEnvironment = $__require('./ReactComponentEnvironment');
  var ReactClass = $__require('./ReactClass');
  var ReactEmptyComponent = $__require('./ReactEmptyComponent');
  var ReactBrowserEventEmitter = $__require('./ReactBrowserEventEmitter');
  var ReactNativeComponent = $__require('./ReactNativeComponent');
  var ReactPerf = $__require('./ReactPerf');
  var ReactUpdates = $__require('./ReactUpdates');
  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    Class: ReactClass.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventPluginUtils: EventPluginUtils.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    NativeComponent: ReactNativeComponent.injection,
    Perf: ReactPerf.injection,
    Updates: ReactUpdates.injection
  };
  module.exports = ReactInjection;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactReconcileTransaction.js", ["object-assign", "./CallbackQueue", "./PooledClass", "./ReactBrowserEventEmitter", "./ReactInputSelection", "./Transaction", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var CallbackQueue = $__require('./CallbackQueue');
  var PooledClass = $__require('./PooledClass');
  var ReactBrowserEventEmitter = $__require('./ReactBrowserEventEmitter');
  var ReactInputSelection = $__require('./ReactInputSelection');
  var Transaction = $__require('./Transaction');
  var SELECTION_RESTORATION = {
    initialize: ReactInputSelection.getSelectionInformation,
    close: ReactInputSelection.restoreSelection
  };
  var EVENT_SUPPRESSION = {
    initialize: function() {
      var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
      ReactBrowserEventEmitter.setEnabled(false);
      return currentlyEnabled;
    },
    close: function(previouslyEnabled) {
      ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
    }
  };
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: function() {
      this.reactMountReady.notifyAll();
    }
  };
  var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
  function ReactReconcileTransaction(useCreateElement) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = false;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.useCreateElement = useCreateElement;
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    checkpoint: function() {
      return this.reactMountReady.checkpoint();
    },
    rollback: function(checkpoint) {
      this.reactMountReady.rollback(checkpoint);
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
    }
  };
  _assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactReconcileTransaction);
  module.exports = ReactReconcileTransaction;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SVGDOMPropertyConfig.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var NS = {
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace'
  };
  var ATTRS = {
    accentHeight: 'accent-height',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 'alignment-baseline',
    allowReorder: 'allowReorder',
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 'arabic-form',
    ascent: 0,
    attributeName: 'attributeName',
    attributeType: 'attributeType',
    autoReverse: 'autoReverse',
    azimuth: 0,
    baseFrequency: 'baseFrequency',
    baseProfile: 'baseProfile',
    baselineShift: 'baseline-shift',
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 'calcMode',
    capHeight: 'cap-height',
    clip: 0,
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    clipPathUnits: 'clipPathUnits',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    contentScriptType: 'contentScriptType',
    contentStyleType: 'contentStyleType',
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 'diffuseConstant',
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 'dominant-baseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 'edgeMode',
    elevation: 0,
    enableBackground: 'enable-background',
    end: 0,
    exponent: 0,
    externalResourcesRequired: 'externalResourcesRequired',
    fill: 0,
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    filter: 0,
    filterRes: 'filterRes',
    filterUnits: 'filterUnits',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    focusable: 0,
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    glyphRef: 'glyphRef',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    hanging: 0,
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    ideographic: 0,
    imageRendering: 'image-rendering',
    'in': 0,
    in2: 0,
    intercept: 0,
    k: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    kernelMatrix: 'kernelMatrix',
    kernelUnitLength: 'kernelUnitLength',
    kerning: 0,
    keyPoints: 'keyPoints',
    keySplines: 'keySplines',
    keyTimes: 'keyTimes',
    lengthAdjust: 'lengthAdjust',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    limitingConeAngle: 'limitingConeAngle',
    local: 0,
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    markerHeight: 'markerHeight',
    markerUnits: 'markerUnits',
    markerWidth: 'markerWidth',
    mask: 0,
    maskContentUnits: 'maskContentUnits',
    maskUnits: 'maskUnits',
    mathematical: 0,
    mode: 0,
    numOctaves: 'numOctaves',
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pathLength: 'pathLength',
    patternContentUnits: 'patternContentUnits',
    patternTransform: 'patternTransform',
    patternUnits: 'patternUnits',
    pointerEvents: 'pointer-events',
    points: 0,
    pointsAtX: 'pointsAtX',
    pointsAtY: 'pointsAtY',
    pointsAtZ: 'pointsAtZ',
    preserveAlpha: 'preserveAlpha',
    preserveAspectRatio: 'preserveAspectRatio',
    primitiveUnits: 'primitiveUnits',
    r: 0,
    radius: 0,
    refX: 'refX',
    refY: 'refY',
    renderingIntent: 'rendering-intent',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    requiredExtensions: 'requiredExtensions',
    requiredFeatures: 'requiredFeatures',
    restart: 0,
    result: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    seed: 0,
    shapeRendering: 'shape-rendering',
    slope: 0,
    spacing: 0,
    specularConstant: 'specularConstant',
    specularExponent: 'specularExponent',
    speed: 0,
    spreadMethod: 'spreadMethod',
    startOffset: 'startOffset',
    stdDeviation: 'stdDeviation',
    stemh: 0,
    stemv: 0,
    stitchTiles: 'stitchTiles',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    surfaceScale: 'surfaceScale',
    systemLanguage: 'systemLanguage',
    tableValues: 'tableValues',
    targetX: 'targetX',
    targetY: 'targetY',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    textLength: 'textLength',
    to: 0,
    transform: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicode: 0,
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    values: 0,
    vectorEffect: 'vector-effect',
    version: 0,
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    viewBox: 'viewBox',
    viewTarget: 'viewTarget',
    visibility: 0,
    widths: 0,
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    x: 0,
    xHeight: 'x-height',
    x1: 0,
    x2: 0,
    xChannelSelector: 'xChannelSelector',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    y: 0,
    y1: 0,
    y2: 0,
    yChannelSelector: 'yChannelSelector',
    z: 0,
    zoomAndPan: 'zoomAndPan'
  };
  var SVGDOMPropertyConfig = {
    Properties: {},
    DOMAttributeNamespaces: {
      xlinkActuate: NS.xlink,
      xlinkArcrole: NS.xlink,
      xlinkHref: NS.xlink,
      xlinkRole: NS.xlink,
      xlinkShow: NS.xlink,
      xlinkTitle: NS.xlink,
      xlinkType: NS.xlink,
      xmlBase: NS.xml,
      xmlLang: NS.xml,
      xmlSpace: NS.xml
    },
    DOMAttributeNames: {}
  };
  Object.keys(ATTRS).forEach(function(key) {
    SVGDOMPropertyConfig.Properties[key] = 0;
    if (ATTRS[key]) {
      SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
    }
  });
  module.exports = SVGDOMPropertyConfig;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getNodeForCharacterOffset.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function getLeafNode(node) {
    while (node && node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }
  function getSiblingNode(node) {
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
  }
  function getNodeForCharacterOffset(root, offset) {
    var node = getLeafNode(root);
    var nodeStart = 0;
    var nodeEnd = 0;
    while (node) {
      if (node.nodeType === 3) {
        nodeEnd = nodeStart + node.textContent.length;
        if (nodeStart <= offset && nodeEnd >= offset) {
          return {
            node: node,
            offset: offset - nodeStart
          };
        }
        nodeStart = nodeEnd;
      }
      node = getLeafNode(getSiblingNode(node));
    }
  }
  module.exports = getNodeForCharacterOffset;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getTextContentAccessor.js", ["fbjs/lib/ExecutionEnvironment", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var contentKey = null;
  function getTextContentAccessor() {
    if (!contentKey && ExecutionEnvironment.canUseDOM) {
      contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
    }
    return contentKey;
  }
  module.exports = getTextContentAccessor;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMSelection.js", ["fbjs/lib/ExecutionEnvironment", "./getNodeForCharacterOffset", "./getTextContentAccessor", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var getNodeForCharacterOffset = $__require('./getNodeForCharacterOffset');
  var getTextContentAccessor = $__require('./getTextContentAccessor');
  function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
    return anchorNode === focusNode && anchorOffset === focusOffset;
  }
  function getIEOffsets(node) {
    var selection = document.selection;
    var selectedRange = selection.createRange();
    var selectedLength = selectedRange.text.length;
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(node);
    fromStart.setEndPoint('EndToStart', selectedRange);
    var startOffset = fromStart.text.length;
    var endOffset = startOffset + selectedLength;
    return {
      start: startOffset,
      end: endOffset
    };
  }
  function getModernOffsets(node) {
    var selection = window.getSelection && window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    var anchorNode = selection.anchorNode;
    var anchorOffset = selection.anchorOffset;
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset;
    var currentRange = selection.getRangeAt(0);
    try {
      currentRange.startContainer.nodeType;
      currentRange.endContainer.nodeType;
    } catch (e) {
      return null;
    }
    var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
    var tempRange = currentRange.cloneRange();
    tempRange.selectNodeContents(node);
    tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
    var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
    var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
    var end = start + rangeLength;
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    var isBackward = detectionRange.collapsed;
    return {
      start: isBackward ? end : start,
      end: isBackward ? start : end
    };
  }
  function setIEOffsets(node, offsets) {
    var range = document.selection.createRange().duplicate();
    var start,
        end;
    if (offsets.end === undefined) {
      start = offsets.start;
      end = start;
    } else if (offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start;
    } else {
      start = offsets.start;
      end = offsets.end;
    }
    range.moveToElementText(node);
    range.moveStart('character', start);
    range.setEndPoint('EndToStart', range);
    range.moveEnd('character', end - start);
    range.select();
  }
  function setModernOffsets(node, offsets) {
    if (!window.getSelection) {
      return;
    }
    var selection = window.getSelection();
    var length = node[getTextContentAccessor()].length;
    var start = Math.min(offsets.start, length);
    var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
    if (!selection.extend && start > end) {
      var temp = end;
      end = start;
      start = temp;
    }
    var startMarker = getNodeForCharacterOffset(node, start);
    var endMarker = getNodeForCharacterOffset(node, end);
    if (startMarker && endMarker) {
      var range = document.createRange();
      range.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();
      if (start > end) {
        selection.addRange(range);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        range.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(range);
      }
    }
  }
  var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);
  var ReactDOMSelection = {
    getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
    setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
  };
  module.exports = ReactDOMSelection;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/isNode.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function isNode(object) {
    return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
  }
  module.exports = isNode;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/isTextNode.js", ["./isNode", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var isNode = $__require('./isNode');
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }
  module.exports = isTextNode;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/containsNode.js", ["./isTextNode", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var isTextNode = $__require('./isTextNode');
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if (outerNode.contains) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }
  module.exports = containsNode;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/focusNode.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function focusNode(node) {
    try {
      node.focus();
    } catch (e) {}
  }
  module.exports = focusNode;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactInputSelection.js", ["./ReactDOMSelection", "fbjs/lib/containsNode", "fbjs/lib/focusNode", "fbjs/lib/getActiveElement", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMSelection = $__require('./ReactDOMSelection');
  var containsNode = $__require('fbjs/lib/containsNode');
  var focusNode = $__require('fbjs/lib/focusNode');
  var getActiveElement = $__require('fbjs/lib/getActiveElement');
  function isInDocument(node) {
    return containsNode(document.documentElement, node);
  }
  var ReactInputSelection = {
    hasSelectionCapabilities: function(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
    },
    getSelectionInformation: function() {
      var focusedElem = getActiveElement();
      return {
        focusedElem: focusedElem,
        selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
      };
    },
    restoreSelection: function(priorSelectionInformation) {
      var curFocusedElem = getActiveElement();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
        if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
          ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
        }
        focusNode(priorFocusedElem);
      }
    },
    getSelection: function(input) {
      var selection;
      if ('selectionStart' in input) {
        selection = {
          start: input.selectionStart,
          end: input.selectionEnd
        };
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        var range = document.selection.createRange();
        if (range.parentElement() === input) {
          selection = {
            start: -range.moveStart('character', -input.value.length),
            end: -range.moveEnd('character', -input.value.length)
          };
        }
      } else {
        selection = ReactDOMSelection.getOffsets(input);
      }
      return selection || {
        start: 0,
        end: 0
      };
    },
    setSelection: function(input, offsets) {
      var start = offsets.start;
      var end = offsets.end;
      if (end === undefined) {
        end = start;
      }
      if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
      } else {
        ReactDOMSelection.setOffsets(input, offsets);
      }
    }
  };
  module.exports = ReactInputSelection;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/getActiveElement.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function getActiveElement() {
    if (typeof document === 'undefined') {
      return null;
    }
    try {
      return document.activeElement || document.body;
    } catch (e) {
      return document.body;
    }
  }
  module.exports = getActiveElement;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/isTextInputElement.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var supportedInputTypes = {
    'color': true,
    'date': true,
    'datetime': true,
    'datetime-local': true,
    'email': true,
    'month': true,
    'number': true,
    'password': true,
    'range': true,
    'search': true,
    'tel': true,
    'text': true,
    'time': true,
    'url': true,
    'week': true
  };
  function isTextInputElement(elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
  }
  module.exports = isTextInputElement;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/shallowEqual.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
    return true;
  }
  module.exports = shallowEqual;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SelectEventPlugin.js", ["./EventConstants", "./EventPropagators", "fbjs/lib/ExecutionEnvironment", "./ReactDOMComponentTree", "./ReactInputSelection", "./SyntheticEvent", "fbjs/lib/getActiveElement", "./isTextInputElement", "fbjs/lib/keyOf", "fbjs/lib/shallowEqual", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('./EventConstants');
  var EventPropagators = $__require('./EventPropagators');
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactInputSelection = $__require('./ReactInputSelection');
  var SyntheticEvent = $__require('./SyntheticEvent');
  var getActiveElement = $__require('fbjs/lib/getActiveElement');
  var isTextInputElement = $__require('./isTextInputElement');
  var keyOf = $__require('fbjs/lib/keyOf');
  var shallowEqual = $__require('fbjs/lib/shallowEqual');
  var topLevelTypes = EventConstants.topLevelTypes;
  var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;
  var eventTypes = {select: {
      phasedRegistrationNames: {
        bubbled: keyOf({onSelect: null}),
        captured: keyOf({onSelectCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
    }};
  var activeElement = null;
  var activeElementInst = null;
  var lastSelection = null;
  var mouseDown = false;
  var hasListener = false;
  var ON_SELECT_KEY = keyOf({onSelect: null});
  function getSelection(node) {
    if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
      return {
        start: node.selectionStart,
        end: node.selectionEnd
      };
    } else if (window.getSelection) {
      var selection = window.getSelection();
      return {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset
      };
    } else if (document.selection) {
      var range = document.selection.createRange();
      return {
        parentElement: range.parentElement(),
        text: range.text,
        top: range.boundingTop,
        left: range.boundingLeft
      };
    }
  }
  function constructSelectEvent(nativeEvent, nativeEventTarget) {
    if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
      return null;
    }
    var currentSelection = getSelection(activeElement);
    if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
      lastSelection = currentSelection;
      var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);
      syntheticEvent.type = 'select';
      syntheticEvent.target = activeElement;
      EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
      return syntheticEvent;
    }
    return null;
  }
  var SelectEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (!hasListener) {
        return null;
      }
      var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
      switch (topLevelType) {
        case topLevelTypes.topFocus:
          if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
            activeElement = targetNode;
            activeElementInst = targetInst;
            lastSelection = null;
          }
          break;
        case topLevelTypes.topBlur:
          activeElement = null;
          activeElementInst = null;
          lastSelection = null;
          break;
        case topLevelTypes.topMouseDown:
          mouseDown = true;
          break;
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topMouseUp:
          mouseDown = false;
          return constructSelectEvent(nativeEvent, nativeEventTarget);
        case topLevelTypes.topSelectionChange:
          if (skipSelectionChangeEvent) {
            break;
          }
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          return constructSelectEvent(nativeEvent, nativeEventTarget);
      }
      return null;
    },
    didPutListener: function(inst, registrationName, listener) {
      if (registrationName === ON_SELECT_KEY) {
        hasListener = true;
      }
    }
  };
  module.exports = SelectEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/EventListener.js", ["./emptyFunction", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var emptyFunction = $__require('./emptyFunction');
  var EventListener = {
    listen: function(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, false);
        return {remove: function() {
            target.removeEventListener(eventType, callback, false);
          }};
      } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, callback);
        return {remove: function() {
            target.detachEvent('on' + eventType, callback);
          }};
      }
    },
    capture: function(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, true);
        return {remove: function() {
            target.removeEventListener(eventType, callback, true);
          }};
      } else {
        if ("production" !== 'production') {
          console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
        }
        return {remove: emptyFunction};
      }
    },
    registerDefault: function() {}
  };
  module.exports = EventListener;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/EventPropagators.js", ["./EventConstants", "./EventPluginHub", "./EventPluginUtils", "./accumulateInto", "./forEachAccumulated", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('./EventConstants');
  var EventPluginHub = $__require('./EventPluginHub');
  var EventPluginUtils = $__require('./EventPluginUtils');
  var accumulateInto = $__require('./accumulateInto');
  var forEachAccumulated = $__require('./forEachAccumulated');
  var warning = $__require('fbjs/lib/warning');
  var PropagationPhases = EventConstants.PropagationPhases;
  var getListener = EventPluginHub.getListener;
  function listenerAtPhase(inst, event, propagationPhase) {
    var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
    return getListener(inst, registrationName);
  }
  function accumulateDirectionalDispatches(inst, upwards, event) {
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(inst, 'Dispatching inst must not be null') : void 0;
    }
    var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
    var listener = listenerAtPhase(inst, event, phase);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
    }
  }
  function accumulateTwoPhaseDispatchesSingle(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
    }
  }
  function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      var targetInst = event._targetInst;
      var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
      EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
    }
  }
  function accumulateDispatches(inst, ignoredDirection, event) {
    if (event && event.dispatchConfig.registrationName) {
      var registrationName = event.dispatchConfig.registrationName;
      var listener = getListener(inst, registrationName);
      if (listener) {
        event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
        event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
      }
    }
  }
  function accumulateDirectDispatchesSingle(event) {
    if (event && event.dispatchConfig.registrationName) {
      accumulateDispatches(event._targetInst, null, event);
    }
  }
  function accumulateTwoPhaseDispatches(events) {
    forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
  }
  function accumulateTwoPhaseDispatchesSkipTarget(events) {
    forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
  }
  function accumulateEnterLeaveDispatches(leave, enter, from, to) {
    EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
  }
  function accumulateDirectDispatches(events) {
    forEachAccumulated(events, accumulateDirectDispatchesSingle);
  }
  var EventPropagators = {
    accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
    accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
    accumulateDirectDispatches: accumulateDirectDispatches,
    accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
  };
  module.exports = EventPropagators;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticAnimationEvent.js", ["./SyntheticEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('./SyntheticEvent');
  var AnimationEventInterface = {
    animationName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);
  module.exports = SyntheticAnimationEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticClipboardEvent.js", ["./SyntheticEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('./SyntheticEvent');
  var ClipboardEventInterface = {clipboardData: function(event) {
      return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
    }};
  function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
  module.exports = SyntheticClipboardEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticFocusEvent.js", ["./SyntheticUIEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('./SyntheticUIEvent');
  var FocusEventInterface = {relatedTarget: null};
  function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
  module.exports = SyntheticFocusEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getEventKey.js", ["./getEventCharCode", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var getEventCharCode = $__require('./getEventCharCode');
  var normalizeKey = {
    'Esc': 'Escape',
    'Spacebar': ' ',
    'Left': 'ArrowLeft',
    'Up': 'ArrowUp',
    'Right': 'ArrowRight',
    'Down': 'ArrowDown',
    'Del': 'Delete',
    'Win': 'OS',
    'Menu': 'ContextMenu',
    'Apps': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'MozPrintableKey': 'Unidentified'
  };
  var translateToKey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  };
  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if (key !== 'Unidentified') {
        return key;
      }
    }
    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent);
      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }
    return '';
  }
  module.exports = getEventKey;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticKeyboardEvent.js", ["./SyntheticUIEvent", "./getEventCharCode", "./getEventKey", "./getEventModifierState", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('./SyntheticUIEvent');
  var getEventCharCode = $__require('./getEventCharCode');
  var getEventKey = $__require('./getEventKey');
  var getEventModifierState = $__require('./getEventModifierState');
  var KeyboardEventInterface = {
    key: getEventKey,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: getEventModifierState,
    charCode: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      return 0;
    },
    keyCode: function(event) {
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    },
    which: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    }
  };
  function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
  module.exports = SyntheticKeyboardEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticDragEvent.js", ["./SyntheticMouseEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticMouseEvent = $__require('./SyntheticMouseEvent');
  var DragEventInterface = {dataTransfer: null};
  function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
  module.exports = SyntheticDragEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticTouchEvent.js", ["./SyntheticUIEvent", "./getEventModifierState", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('./SyntheticUIEvent');
  var getEventModifierState = $__require('./getEventModifierState');
  var TouchEventInterface = {
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: getEventModifierState
  };
  function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
  module.exports = SyntheticTouchEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticTransitionEvent.js", ["./SyntheticEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('./SyntheticEvent');
  var TransitionEventInterface = {
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);
  module.exports = SyntheticTransitionEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticEvent.js", ["object-assign", "./PooledClass", "fbjs/lib/emptyFunction", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var PooledClass = $__require('./PooledClass');
  var emptyFunction = $__require('fbjs/lib/emptyFunction');
  var warning = $__require('fbjs/lib/warning');
  var didWarnForAddedNewProperty = false;
  var isProxySupported = typeof Proxy === 'function';
  var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];
  var EventInterface = {
    type: null,
    target: null,
    currentTarget: emptyFunction.thatReturnsNull,
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null
  };
  function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
    if ("production" !== 'production') {
      delete this.nativeEvent;
      delete this.preventDefault;
      delete this.stopPropagation;
    }
    this.dispatchConfig = dispatchConfig;
    this._targetInst = targetInst;
    this.nativeEvent = nativeEvent;
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (!Interface.hasOwnProperty(propName)) {
        continue;
      }
      if ("production" !== 'production') {
        delete this[propName];
      }
      var normalize = Interface[propName];
      if (normalize) {
        this[propName] = normalize(nativeEvent);
      } else {
        if (propName === 'target') {
          this.target = nativeEventTarget;
        } else {
          this[propName] = nativeEvent[propName];
        }
      }
    }
    var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
    if (defaultPrevented) {
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    } else {
      this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
    }
    this.isPropagationStopped = emptyFunction.thatReturnsFalse;
    return this;
  }
  _assign(SyntheticEvent.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (!event) {
        return;
      }
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    },
    stopPropagation: function() {
      var event = this.nativeEvent;
      if (!event) {
        return;
      }
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
      this.isPropagationStopped = emptyFunction.thatReturnsTrue;
    },
    persist: function() {
      this.isPersistent = emptyFunction.thatReturnsTrue;
    },
    isPersistent: emptyFunction.thatReturnsFalse,
    destructor: function() {
      var Interface = this.constructor.Interface;
      for (var propName in Interface) {
        if ("production" !== 'production') {
          Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
        } else {
          this[propName] = null;
        }
      }
      for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
        this[shouldBeReleasedProperties[i]] = null;
      }
      if ("production" !== 'production') {
        var noop = $__require('fbjs/lib/emptyFunction');
        Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
        Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', noop));
        Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', noop));
      }
    }
  });
  SyntheticEvent.Interface = EventInterface;
  if ("production" !== 'production') {
    if (isProxySupported) {
      SyntheticEvent = new Proxy(SyntheticEvent, {
        construct: function(target, args) {
          return this.apply(target, Object.create(target.prototype), args);
        },
        apply: function(constructor, that, args) {
          return new Proxy(constructor.apply(that, args), {set: function(target, prop, value) {
              if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
                "production" !== 'production' ? warning(didWarnForAddedNewProperty || target.isPersistent(), 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re adding a new property in the synthetic event object. ' + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
                didWarnForAddedNewProperty = true;
              }
              target[prop] = value;
              return true;
            }});
        }
      });
    }
  }
  SyntheticEvent.augmentClass = function(Class, Interface) {
    var Super = this;
    var E = function() {};
    E.prototype = Super.prototype;
    var prototype = new E();
    _assign(prototype, Class.prototype);
    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.Interface = _assign({}, Super.Interface, Interface);
    Class.augmentClass = Super.augmentClass;
    PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
  };
  PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
  module.exports = SyntheticEvent;
  function getPooledWarningPropertyDefinition(propName, getVal) {
    var isFunction = typeof getVal === 'function';
    return {
      configurable: true,
      set: set,
      get: get
    };
    function set(val) {
      var action = isFunction ? 'setting the method' : 'setting the property';
      warn(action, 'This is effectively a no-op');
      return val;
    }
    function get() {
      var action = isFunction ? 'accessing the method' : 'accessing the property';
      var result = isFunction ? 'This is a no-op function' : 'This is set to null';
      warn(action, result);
      return getVal;
    }
    function warn(action, result) {
      var warningCondition = false;
      "production" !== 'production' ? warning(warningCondition, 'This synthetic event is reused for performance reasons. If you\'re seeing this, ' + 'you\'re %s `%s` on a released/nullified synthetic event. %s. ' + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
    }
  }
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getEventTarget.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function getEventTarget(nativeEvent) {
    var target = nativeEvent.target || nativeEvent.srcElement || window;
    if (target.correspondingUseElement) {
      target = target.correspondingUseElement;
    }
    return target.nodeType === 3 ? target.parentNode : target;
  }
  module.exports = getEventTarget;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticUIEvent.js", ["./SyntheticEvent", "./getEventTarget", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('./SyntheticEvent');
  var getEventTarget = $__require('./getEventTarget');
  var UIEventInterface = {
    view: function(event) {
      if (event.view) {
        return event.view;
      }
      var target = getEventTarget(event);
      if (target != null && target.window === target) {
        return target;
      }
      var doc = target.ownerDocument;
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    detail: function(event) {
      return event.detail || 0;
    }
  };
  function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
  module.exports = SyntheticUIEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getEventModifierState.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var modifierKeyToProp = {
    'Alt': 'altKey',
    'Control': 'ctrlKey',
    'Meta': 'metaKey',
    'Shift': 'shiftKey'
  };
  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }
    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }
  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }
  module.exports = getEventModifierState;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticMouseEvent.js", ["./SyntheticUIEvent", "./ViewportMetrics", "./getEventModifierState", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('./SyntheticUIEvent');
  var ViewportMetrics = $__require('./ViewportMetrics');
  var getEventModifierState = $__require('./getEventModifierState');
  var MouseEventInterface = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: getEventModifierState,
    button: function(event) {
      var button = event.button;
      if ('which' in event) {
        return button;
      }
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons: null,
    relatedTarget: function(event) {
      return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
    },
    pageX: function(event) {
      return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
    },
    pageY: function(event) {
      return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
    }
  };
  function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
  module.exports = SyntheticMouseEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SyntheticWheelEvent.js", ["./SyntheticMouseEvent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticMouseEvent = $__require('./SyntheticMouseEvent');
  var WheelEventInterface = {
    deltaX: function(event) {
      return 'deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
    },
    deltaY: function(event) {
      return 'deltaY' in event ? event.deltaY : 'wheelDeltaY' in event ? -event.wheelDeltaY : 'wheelDelta' in event ? -event.wheelDelta : 0;
    },
    deltaZ: null,
    deltaMode: null
  };
  function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
  module.exports = SyntheticWheelEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getEventCharCode.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;
    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode;
      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      charCode = keyCode;
    }
    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }
    return 0;
  }
  module.exports = getEventCharCode;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/SimpleEventPlugin.js", ["./EventConstants", "fbjs/lib/EventListener", "./EventPropagators", "./ReactDOMComponentTree", "./SyntheticAnimationEvent", "./SyntheticClipboardEvent", "./SyntheticEvent", "./SyntheticFocusEvent", "./SyntheticKeyboardEvent", "./SyntheticMouseEvent", "./SyntheticDragEvent", "./SyntheticTouchEvent", "./SyntheticTransitionEvent", "./SyntheticUIEvent", "./SyntheticWheelEvent", "fbjs/lib/emptyFunction", "./getEventCharCode", "fbjs/lib/invariant", "fbjs/lib/keyOf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('./EventConstants');
  var EventListener = $__require('fbjs/lib/EventListener');
  var EventPropagators = $__require('./EventPropagators');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var SyntheticAnimationEvent = $__require('./SyntheticAnimationEvent');
  var SyntheticClipboardEvent = $__require('./SyntheticClipboardEvent');
  var SyntheticEvent = $__require('./SyntheticEvent');
  var SyntheticFocusEvent = $__require('./SyntheticFocusEvent');
  var SyntheticKeyboardEvent = $__require('./SyntheticKeyboardEvent');
  var SyntheticMouseEvent = $__require('./SyntheticMouseEvent');
  var SyntheticDragEvent = $__require('./SyntheticDragEvent');
  var SyntheticTouchEvent = $__require('./SyntheticTouchEvent');
  var SyntheticTransitionEvent = $__require('./SyntheticTransitionEvent');
  var SyntheticUIEvent = $__require('./SyntheticUIEvent');
  var SyntheticWheelEvent = $__require('./SyntheticWheelEvent');
  var emptyFunction = $__require('fbjs/lib/emptyFunction');
  var getEventCharCode = $__require('./getEventCharCode');
  var invariant = $__require('fbjs/lib/invariant');
  var keyOf = $__require('fbjs/lib/keyOf');
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    abort: {phasedRegistrationNames: {
        bubbled: keyOf({onAbort: true}),
        captured: keyOf({onAbortCapture: true})
      }},
    animationEnd: {phasedRegistrationNames: {
        bubbled: keyOf({onAnimationEnd: true}),
        captured: keyOf({onAnimationEndCapture: true})
      }},
    animationIteration: {phasedRegistrationNames: {
        bubbled: keyOf({onAnimationIteration: true}),
        captured: keyOf({onAnimationIterationCapture: true})
      }},
    animationStart: {phasedRegistrationNames: {
        bubbled: keyOf({onAnimationStart: true}),
        captured: keyOf({onAnimationStartCapture: true})
      }},
    blur: {phasedRegistrationNames: {
        bubbled: keyOf({onBlur: true}),
        captured: keyOf({onBlurCapture: true})
      }},
    canPlay: {phasedRegistrationNames: {
        bubbled: keyOf({onCanPlay: true}),
        captured: keyOf({onCanPlayCapture: true})
      }},
    canPlayThrough: {phasedRegistrationNames: {
        bubbled: keyOf({onCanPlayThrough: true}),
        captured: keyOf({onCanPlayThroughCapture: true})
      }},
    click: {phasedRegistrationNames: {
        bubbled: keyOf({onClick: true}),
        captured: keyOf({onClickCapture: true})
      }},
    contextMenu: {phasedRegistrationNames: {
        bubbled: keyOf({onContextMenu: true}),
        captured: keyOf({onContextMenuCapture: true})
      }},
    copy: {phasedRegistrationNames: {
        bubbled: keyOf({onCopy: true}),
        captured: keyOf({onCopyCapture: true})
      }},
    cut: {phasedRegistrationNames: {
        bubbled: keyOf({onCut: true}),
        captured: keyOf({onCutCapture: true})
      }},
    doubleClick: {phasedRegistrationNames: {
        bubbled: keyOf({onDoubleClick: true}),
        captured: keyOf({onDoubleClickCapture: true})
      }},
    drag: {phasedRegistrationNames: {
        bubbled: keyOf({onDrag: true}),
        captured: keyOf({onDragCapture: true})
      }},
    dragEnd: {phasedRegistrationNames: {
        bubbled: keyOf({onDragEnd: true}),
        captured: keyOf({onDragEndCapture: true})
      }},
    dragEnter: {phasedRegistrationNames: {
        bubbled: keyOf({onDragEnter: true}),
        captured: keyOf({onDragEnterCapture: true})
      }},
    dragExit: {phasedRegistrationNames: {
        bubbled: keyOf({onDragExit: true}),
        captured: keyOf({onDragExitCapture: true})
      }},
    dragLeave: {phasedRegistrationNames: {
        bubbled: keyOf({onDragLeave: true}),
        captured: keyOf({onDragLeaveCapture: true})
      }},
    dragOver: {phasedRegistrationNames: {
        bubbled: keyOf({onDragOver: true}),
        captured: keyOf({onDragOverCapture: true})
      }},
    dragStart: {phasedRegistrationNames: {
        bubbled: keyOf({onDragStart: true}),
        captured: keyOf({onDragStartCapture: true})
      }},
    drop: {phasedRegistrationNames: {
        bubbled: keyOf({onDrop: true}),
        captured: keyOf({onDropCapture: true})
      }},
    durationChange: {phasedRegistrationNames: {
        bubbled: keyOf({onDurationChange: true}),
        captured: keyOf({onDurationChangeCapture: true})
      }},
    emptied: {phasedRegistrationNames: {
        bubbled: keyOf({onEmptied: true}),
        captured: keyOf({onEmptiedCapture: true})
      }},
    encrypted: {phasedRegistrationNames: {
        bubbled: keyOf({onEncrypted: true}),
        captured: keyOf({onEncryptedCapture: true})
      }},
    ended: {phasedRegistrationNames: {
        bubbled: keyOf({onEnded: true}),
        captured: keyOf({onEndedCapture: true})
      }},
    error: {phasedRegistrationNames: {
        bubbled: keyOf({onError: true}),
        captured: keyOf({onErrorCapture: true})
      }},
    focus: {phasedRegistrationNames: {
        bubbled: keyOf({onFocus: true}),
        captured: keyOf({onFocusCapture: true})
      }},
    input: {phasedRegistrationNames: {
        bubbled: keyOf({onInput: true}),
        captured: keyOf({onInputCapture: true})
      }},
    invalid: {phasedRegistrationNames: {
        bubbled: keyOf({onInvalid: true}),
        captured: keyOf({onInvalidCapture: true})
      }},
    keyDown: {phasedRegistrationNames: {
        bubbled: keyOf({onKeyDown: true}),
        captured: keyOf({onKeyDownCapture: true})
      }},
    keyPress: {phasedRegistrationNames: {
        bubbled: keyOf({onKeyPress: true}),
        captured: keyOf({onKeyPressCapture: true})
      }},
    keyUp: {phasedRegistrationNames: {
        bubbled: keyOf({onKeyUp: true}),
        captured: keyOf({onKeyUpCapture: true})
      }},
    load: {phasedRegistrationNames: {
        bubbled: keyOf({onLoad: true}),
        captured: keyOf({onLoadCapture: true})
      }},
    loadedData: {phasedRegistrationNames: {
        bubbled: keyOf({onLoadedData: true}),
        captured: keyOf({onLoadedDataCapture: true})
      }},
    loadedMetadata: {phasedRegistrationNames: {
        bubbled: keyOf({onLoadedMetadata: true}),
        captured: keyOf({onLoadedMetadataCapture: true})
      }},
    loadStart: {phasedRegistrationNames: {
        bubbled: keyOf({onLoadStart: true}),
        captured: keyOf({onLoadStartCapture: true})
      }},
    mouseDown: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseDown: true}),
        captured: keyOf({onMouseDownCapture: true})
      }},
    mouseMove: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseMove: true}),
        captured: keyOf({onMouseMoveCapture: true})
      }},
    mouseOut: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseOut: true}),
        captured: keyOf({onMouseOutCapture: true})
      }},
    mouseOver: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseOver: true}),
        captured: keyOf({onMouseOverCapture: true})
      }},
    mouseUp: {phasedRegistrationNames: {
        bubbled: keyOf({onMouseUp: true}),
        captured: keyOf({onMouseUpCapture: true})
      }},
    paste: {phasedRegistrationNames: {
        bubbled: keyOf({onPaste: true}),
        captured: keyOf({onPasteCapture: true})
      }},
    pause: {phasedRegistrationNames: {
        bubbled: keyOf({onPause: true}),
        captured: keyOf({onPauseCapture: true})
      }},
    play: {phasedRegistrationNames: {
        bubbled: keyOf({onPlay: true}),
        captured: keyOf({onPlayCapture: true})
      }},
    playing: {phasedRegistrationNames: {
        bubbled: keyOf({onPlaying: true}),
        captured: keyOf({onPlayingCapture: true})
      }},
    progress: {phasedRegistrationNames: {
        bubbled: keyOf({onProgress: true}),
        captured: keyOf({onProgressCapture: true})
      }},
    rateChange: {phasedRegistrationNames: {
        bubbled: keyOf({onRateChange: true}),
        captured: keyOf({onRateChangeCapture: true})
      }},
    reset: {phasedRegistrationNames: {
        bubbled: keyOf({onReset: true}),
        captured: keyOf({onResetCapture: true})
      }},
    scroll: {phasedRegistrationNames: {
        bubbled: keyOf({onScroll: true}),
        captured: keyOf({onScrollCapture: true})
      }},
    seeked: {phasedRegistrationNames: {
        bubbled: keyOf({onSeeked: true}),
        captured: keyOf({onSeekedCapture: true})
      }},
    seeking: {phasedRegistrationNames: {
        bubbled: keyOf({onSeeking: true}),
        captured: keyOf({onSeekingCapture: true})
      }},
    stalled: {phasedRegistrationNames: {
        bubbled: keyOf({onStalled: true}),
        captured: keyOf({onStalledCapture: true})
      }},
    submit: {phasedRegistrationNames: {
        bubbled: keyOf({onSubmit: true}),
        captured: keyOf({onSubmitCapture: true})
      }},
    suspend: {phasedRegistrationNames: {
        bubbled: keyOf({onSuspend: true}),
        captured: keyOf({onSuspendCapture: true})
      }},
    timeUpdate: {phasedRegistrationNames: {
        bubbled: keyOf({onTimeUpdate: true}),
        captured: keyOf({onTimeUpdateCapture: true})
      }},
    touchCancel: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchCancel: true}),
        captured: keyOf({onTouchCancelCapture: true})
      }},
    touchEnd: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchEnd: true}),
        captured: keyOf({onTouchEndCapture: true})
      }},
    touchMove: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchMove: true}),
        captured: keyOf({onTouchMoveCapture: true})
      }},
    touchStart: {phasedRegistrationNames: {
        bubbled: keyOf({onTouchStart: true}),
        captured: keyOf({onTouchStartCapture: true})
      }},
    transitionEnd: {phasedRegistrationNames: {
        bubbled: keyOf({onTransitionEnd: true}),
        captured: keyOf({onTransitionEndCapture: true})
      }},
    volumeChange: {phasedRegistrationNames: {
        bubbled: keyOf({onVolumeChange: true}),
        captured: keyOf({onVolumeChangeCapture: true})
      }},
    waiting: {phasedRegistrationNames: {
        bubbled: keyOf({onWaiting: true}),
        captured: keyOf({onWaitingCapture: true})
      }},
    wheel: {phasedRegistrationNames: {
        bubbled: keyOf({onWheel: true}),
        captured: keyOf({onWheelCapture: true})
      }}
  };
  var topLevelEventsToDispatchConfig = {
    topAbort: eventTypes.abort,
    topAnimationEnd: eventTypes.animationEnd,
    topAnimationIteration: eventTypes.animationIteration,
    topAnimationStart: eventTypes.animationStart,
    topBlur: eventTypes.blur,
    topCanPlay: eventTypes.canPlay,
    topCanPlayThrough: eventTypes.canPlayThrough,
    topClick: eventTypes.click,
    topContextMenu: eventTypes.contextMenu,
    topCopy: eventTypes.copy,
    topCut: eventTypes.cut,
    topDoubleClick: eventTypes.doubleClick,
    topDrag: eventTypes.drag,
    topDragEnd: eventTypes.dragEnd,
    topDragEnter: eventTypes.dragEnter,
    topDragExit: eventTypes.dragExit,
    topDragLeave: eventTypes.dragLeave,
    topDragOver: eventTypes.dragOver,
    topDragStart: eventTypes.dragStart,
    topDrop: eventTypes.drop,
    topDurationChange: eventTypes.durationChange,
    topEmptied: eventTypes.emptied,
    topEncrypted: eventTypes.encrypted,
    topEnded: eventTypes.ended,
    topError: eventTypes.error,
    topFocus: eventTypes.focus,
    topInput: eventTypes.input,
    topInvalid: eventTypes.invalid,
    topKeyDown: eventTypes.keyDown,
    topKeyPress: eventTypes.keyPress,
    topKeyUp: eventTypes.keyUp,
    topLoad: eventTypes.load,
    topLoadedData: eventTypes.loadedData,
    topLoadedMetadata: eventTypes.loadedMetadata,
    topLoadStart: eventTypes.loadStart,
    topMouseDown: eventTypes.mouseDown,
    topMouseMove: eventTypes.mouseMove,
    topMouseOut: eventTypes.mouseOut,
    topMouseOver: eventTypes.mouseOver,
    topMouseUp: eventTypes.mouseUp,
    topPaste: eventTypes.paste,
    topPause: eventTypes.pause,
    topPlay: eventTypes.play,
    topPlaying: eventTypes.playing,
    topProgress: eventTypes.progress,
    topRateChange: eventTypes.rateChange,
    topReset: eventTypes.reset,
    topScroll: eventTypes.scroll,
    topSeeked: eventTypes.seeked,
    topSeeking: eventTypes.seeking,
    topStalled: eventTypes.stalled,
    topSubmit: eventTypes.submit,
    topSuspend: eventTypes.suspend,
    topTimeUpdate: eventTypes.timeUpdate,
    topTouchCancel: eventTypes.touchCancel,
    topTouchEnd: eventTypes.touchEnd,
    topTouchMove: eventTypes.touchMove,
    topTouchStart: eventTypes.touchStart,
    topTransitionEnd: eventTypes.transitionEnd,
    topVolumeChange: eventTypes.volumeChange,
    topWaiting: eventTypes.waiting,
    topWheel: eventTypes.wheel
  };
  for (var type in topLevelEventsToDispatchConfig) {
    topLevelEventsToDispatchConfig[type].dependencies = [type];
  }
  var ON_CLICK_KEY = keyOf({onClick: null});
  var onClickListeners = {};
  var SimpleEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
      if (!dispatchConfig) {
        return null;
      }
      var EventConstructor;
      switch (topLevelType) {
        case topLevelTypes.topAbort:
        case topLevelTypes.topCanPlay:
        case topLevelTypes.topCanPlayThrough:
        case topLevelTypes.topDurationChange:
        case topLevelTypes.topEmptied:
        case topLevelTypes.topEncrypted:
        case topLevelTypes.topEnded:
        case topLevelTypes.topError:
        case topLevelTypes.topInput:
        case topLevelTypes.topInvalid:
        case topLevelTypes.topLoad:
        case topLevelTypes.topLoadedData:
        case topLevelTypes.topLoadedMetadata:
        case topLevelTypes.topLoadStart:
        case topLevelTypes.topPause:
        case topLevelTypes.topPlay:
        case topLevelTypes.topPlaying:
        case topLevelTypes.topProgress:
        case topLevelTypes.topRateChange:
        case topLevelTypes.topReset:
        case topLevelTypes.topSeeked:
        case topLevelTypes.topSeeking:
        case topLevelTypes.topStalled:
        case topLevelTypes.topSubmit:
        case topLevelTypes.topSuspend:
        case topLevelTypes.topTimeUpdate:
        case topLevelTypes.topVolumeChange:
        case topLevelTypes.topWaiting:
          EventConstructor = SyntheticEvent;
          break;
        case topLevelTypes.topKeyPress:
          if (getEventCharCode(nativeEvent) === 0) {
            return null;
          }
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          EventConstructor = SyntheticKeyboardEvent;
          break;
        case topLevelTypes.topBlur:
        case topLevelTypes.topFocus:
          EventConstructor = SyntheticFocusEvent;
          break;
        case topLevelTypes.topClick:
          if (nativeEvent.button === 2) {
            return null;
          }
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topDoubleClick:
        case topLevelTypes.topMouseDown:
        case topLevelTypes.topMouseMove:
        case topLevelTypes.topMouseOut:
        case topLevelTypes.topMouseOver:
        case topLevelTypes.topMouseUp:
          EventConstructor = SyntheticMouseEvent;
          break;
        case topLevelTypes.topDrag:
        case topLevelTypes.topDragEnd:
        case topLevelTypes.topDragEnter:
        case topLevelTypes.topDragExit:
        case topLevelTypes.topDragLeave:
        case topLevelTypes.topDragOver:
        case topLevelTypes.topDragStart:
        case topLevelTypes.topDrop:
          EventConstructor = SyntheticDragEvent;
          break;
        case topLevelTypes.topTouchCancel:
        case topLevelTypes.topTouchEnd:
        case topLevelTypes.topTouchMove:
        case topLevelTypes.topTouchStart:
          EventConstructor = SyntheticTouchEvent;
          break;
        case topLevelTypes.topAnimationEnd:
        case topLevelTypes.topAnimationIteration:
        case topLevelTypes.topAnimationStart:
          EventConstructor = SyntheticAnimationEvent;
          break;
        case topLevelTypes.topTransitionEnd:
          EventConstructor = SyntheticTransitionEvent;
          break;
        case topLevelTypes.topScroll:
          EventConstructor = SyntheticUIEvent;
          break;
        case topLevelTypes.topWheel:
          EventConstructor = SyntheticWheelEvent;
          break;
        case topLevelTypes.topCopy:
        case topLevelTypes.topCut:
        case topLevelTypes.topPaste:
          EventConstructor = SyntheticClipboardEvent;
          break;
      }
      !EventConstructor ? "production" !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : void 0;
      var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
      EventPropagators.accumulateTwoPhaseDispatches(event);
      return event;
    },
    didPutListener: function(inst, registrationName, listener) {
      if (registrationName === ON_CLICK_KEY) {
        var id = inst._rootNodeID;
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        if (!onClickListeners[id]) {
          onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
        }
      }
    },
    willDeleteListener: function(inst, registrationName) {
      if (registrationName === ON_CLICK_KEY) {
        var id = inst._rootNodeID;
        onClickListeners[id].remove();
        delete onClickListeners[id];
      }
    }
  };
  module.exports = SimpleEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDefaultPerfAnalysis.js", ["object-assign", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var DONT_CARE_THRESHOLD = 1.2;
  var DOM_OPERATION_TYPES = {
    '_mountImageIntoNode': 'set innerHTML',
    INSERT_MARKUP: 'set innerHTML',
    MOVE_EXISTING: 'move',
    REMOVE_NODE: 'remove',
    SET_MARKUP: 'set innerHTML',
    TEXT_CONTENT: 'set textContent',
    'setValueForProperty': 'update attribute',
    'setValueForAttribute': 'update attribute',
    'deleteValueForProperty': 'remove attribute',
    'setValueForStyles': 'update styles',
    'replaceNodeWithMarkup': 'replace',
    'replaceDelimitedText': 'replace'
  };
  function getTotalTime(measurements) {
    var totalTime = 0;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      totalTime += measurement.totalTime;
    }
    return totalTime;
  }
  function getDOMSummary(measurements) {
    var items = [];
    measurements.forEach(function(measurement) {
      Object.keys(measurement.writes).forEach(function(id) {
        measurement.writes[id].forEach(function(write) {
          items.push({
            id: id,
            type: DOM_OPERATION_TYPES[write.type] || write.type,
            args: write.args
          });
        });
      });
    });
    return items;
  }
  function getExclusiveSummary(measurements) {
    var candidates = {};
    var displayName;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = _assign({}, measurement.exclusive, measurement.inclusive);
      for (var id in allIDs) {
        displayName = measurement.displayNames[id].current;
        candidates[displayName] = candidates[displayName] || {
          componentName: displayName,
          inclusive: 0,
          exclusive: 0,
          render: 0,
          count: 0
        };
        if (measurement.render[id]) {
          candidates[displayName].render += measurement.render[id];
        }
        if (measurement.exclusive[id]) {
          candidates[displayName].exclusive += measurement.exclusive[id];
        }
        if (measurement.inclusive[id]) {
          candidates[displayName].inclusive += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[displayName].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (displayName in candidates) {
      if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[displayName]);
      }
    }
    arr.sort(function(a, b) {
      return b.exclusive - a.exclusive;
    });
    return arr;
  }
  function getInclusiveSummary(measurements, onlyClean) {
    var candidates = {};
    var inclusiveKey;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = _assign({}, measurement.exclusive, measurement.inclusive);
      var cleanComponents;
      if (onlyClean) {
        cleanComponents = getUnchangedComponents(measurement);
      }
      for (var id in allIDs) {
        if (onlyClean && !cleanComponents[id]) {
          continue;
        }
        var displayName = measurement.displayNames[id];
        inclusiveKey = displayName.owner + ' > ' + displayName.current;
        candidates[inclusiveKey] = candidates[inclusiveKey] || {
          componentName: inclusiveKey,
          time: 0,
          count: 0
        };
        if (measurement.inclusive[id]) {
          candidates[inclusiveKey].time += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[inclusiveKey].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (inclusiveKey in candidates) {
      if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[inclusiveKey]);
      }
    }
    arr.sort(function(a, b) {
      return b.time - a.time;
    });
    return arr;
  }
  function getUnchangedComponents(measurement) {
    var cleanComponents = {};
    var writes = measurement.writes;
    var hierarchy = measurement.hierarchy;
    var dirtyComposites = {};
    Object.keys(writes).forEach(function(id) {
      writes[id].forEach(function(write) {
        if (id !== '' && hierarchy.hasOwnProperty(id)) {
          hierarchy[id].forEach(function(c) {
            return dirtyComposites[c] = true;
          });
        }
      });
    });
    var allIDs = _assign({}, measurement.exclusive, measurement.inclusive);
    for (var id in allIDs) {
      var isDirty = false;
      if (dirtyComposites[id]) {
        isDirty = true;
      }
      if (measurement.created[id]) {
        isDirty = true;
      }
      if (!isDirty && measurement.counts[id] > 0) {
        cleanComponents[id] = true;
      }
    }
    return cleanComponents;
  }
  var ReactDefaultPerfAnalysis = {
    getExclusiveSummary: getExclusiveSummary,
    getInclusiveSummary: getInclusiveSummary,
    getDOMSummary: getDOMSummary,
    getTotalTime: getTotalTime
  };
  module.exports = ReactDefaultPerfAnalysis;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/performance.js", ["./ExecutionEnvironment", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('./ExecutionEnvironment');
  var performance;
  if (ExecutionEnvironment.canUseDOM) {
    performance = window.performance || window.msPerformance || window.webkitPerformance;
  }
  module.exports = performance || {};
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/performanceNow.js", ["./performance", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var performance = $__require('./performance');
  var performanceNow;
  if (performance.now) {
    performanceNow = function() {
      return performance.now();
    };
  } else {
    performanceNow = function() {
      return Date.now();
    };
  }
  module.exports = performanceNow;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDefaultPerf.js", ["./DOMProperty", "./ReactDOMComponentTree", "./ReactDefaultPerfAnalysis", "./ReactMount", "./ReactPerf", "fbjs/lib/performanceNow", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('./DOMProperty');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactDefaultPerfAnalysis = $__require('./ReactDefaultPerfAnalysis');
  var ReactMount = $__require('./ReactMount');
  var ReactPerf = $__require('./ReactPerf');
  var performanceNow = $__require('fbjs/lib/performanceNow');
  var warning = $__require('fbjs/lib/warning');
  function roundFloat(val) {
    return Math.floor(val * 100) / 100;
  }
  function addValue(obj, key, val) {
    obj[key] = (obj[key] || 0) + val;
  }
  var compositeIDMap;
  var compositeIDCounter = 17000;
  function getIDOfComposite(inst) {
    if (!compositeIDMap) {
      compositeIDMap = new WeakMap();
    }
    if (compositeIDMap.has(inst)) {
      return compositeIDMap.get(inst);
    } else {
      var id = compositeIDCounter++;
      compositeIDMap.set(inst, id);
      return id;
    }
  }
  function getID(inst) {
    if (inst.hasOwnProperty('_rootNodeID')) {
      return inst._rootNodeID;
    } else {
      return getIDOfComposite(inst);
    }
  }
  function stripComplexValues(key, value) {
    if (typeof value !== 'object' || Array.isArray(value) || value == null) {
      return value;
    }
    var prototype = Object.getPrototypeOf(value);
    if (!prototype || prototype === Object.prototype) {
      return value;
    }
    return '<not serializable>';
  }
  function wrapLegacyMeasurements(measurements) {
    return {__unstable_this_format_will_change: measurements};
  }
  function unwrapLegacyMeasurements(measurements) {
    return measurements && measurements.__unstable_this_format_will_change || measurements;
  }
  var warnedAboutPrintDOM = false;
  var warnedAboutGetMeasurementsSummaryMap = false;
  var ReactDefaultPerf = {
    _allMeasurements: [],
    _mountStack: [0],
    _compositeStack: [],
    _injected: false,
    start: function() {
      if (!ReactDefaultPerf._injected) {
        ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
      }
      ReactDefaultPerf._allMeasurements.length = 0;
      ReactPerf.enableMeasure = true;
    },
    stop: function() {
      ReactPerf.enableMeasure = false;
    },
    getLastMeasurements: function() {
      return wrapLegacyMeasurements(ReactDefaultPerf._allMeasurements);
    },
    printExclusive: function(measurements) {
      measurements = unwrapLegacyMeasurements(measurements || ReactDefaultPerf._allMeasurements);
      var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Component class name': item.componentName,
          'Total inclusive time (ms)': roundFloat(item.inclusive),
          'Exclusive mount time (ms)': roundFloat(item.exclusive),
          'Exclusive render time (ms)': roundFloat(item.render),
          'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
          'Render time per instance (ms)': roundFloat(item.render / item.count),
          'Instances': item.count
        };
      }));
    },
    printInclusive: function(measurements) {
      measurements = unwrapLegacyMeasurements(measurements || ReactDefaultPerf._allMeasurements);
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Inclusive time (ms)': roundFloat(item.time),
          'Instances': item.count
        };
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    getMeasurementsSummaryMap: function(measurements) {
      "production" !== 'production' ? warning(warnedAboutGetMeasurementsSummaryMap, '`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use ' + '`ReactPerf.getWasted(...)` instead.') : void 0;
      warnedAboutGetMeasurementsSummaryMap = true;
      return ReactDefaultPerf.getWasted(measurements);
    },
    getWasted: function(measurements) {
      measurements = unwrapLegacyMeasurements(measurements);
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
      return summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Wasted time (ms)': item.time,
          'Instances': item.count
        };
      });
    },
    printWasted: function(measurements) {
      measurements = unwrapLegacyMeasurements(measurements || ReactDefaultPerf._allMeasurements);
      console.table(ReactDefaultPerf.getWasted(measurements));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    printDOM: function(measurements) {
      "production" !== 'production' ? warning(warnedAboutPrintDOM, '`ReactPerf.printDOM(...)` is deprecated. Use ' + '`ReactPerf.printOperations(...)` instead.') : void 0;
      warnedAboutPrintDOM = true;
      return ReactDefaultPerf.printOperations(measurements);
    },
    printOperations: function(measurements) {
      measurements = unwrapLegacyMeasurements(measurements || ReactDefaultPerf._allMeasurements);
      var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
      console.table(summary.map(function(item) {
        var result = {};
        result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
        result.type = item.type;
        result.args = JSON.stringify(item.args, stripComplexValues);
        return result;
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    _recordWrite: function(id, fnName, totalTime, args) {
      var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];
      var writes = entry.writes;
      writes[id] = writes[id] || [];
      writes[id].push({
        type: fnName,
        time: totalTime,
        args: args
      });
    },
    measure: function(moduleName, fnName, func) {
      return function() {
        for (var _len = arguments.length,
            args = Array(_len),
            _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var totalTime;
        var rv;
        var start;
        var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];
        if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
          ReactDefaultPerf._allMeasurements.push(entry = {
            exclusive: {},
            inclusive: {},
            render: {},
            counts: {},
            writes: {},
            displayNames: {},
            hierarchy: {},
            totalTime: 0,
            created: {}
          });
          start = performanceNow();
          rv = func.apply(this, args);
          entry.totalTime = performanceNow() - start;
          return rv;
        } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations' || moduleName === 'ReactComponentBrowserEnvironment') {
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          if (fnName === '_mountImageIntoNode') {
            ReactDefaultPerf._recordWrite('', fnName, totalTime, args[0]);
          } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
            args[1].forEach(function(update) {
              var writeArgs = {};
              if (update.fromIndex !== null) {
                writeArgs.fromIndex = update.fromIndex;
              }
              if (update.toIndex !== null) {
                writeArgs.toIndex = update.toIndex;
              }
              if (update.content !== null) {
                writeArgs.content = update.content;
              }
              ReactDefaultPerf._recordWrite(args[0]._rootNodeID, update.type, totalTime, writeArgs);
            });
          } else {
            var id = args[0];
            if (moduleName === 'EventPluginHub') {
              id = id._rootNodeID;
            } else if (fnName === 'replaceNodeWithMarkup') {
              id = ReactDOMComponentTree.getInstanceFromNode(args[1].node)._rootNodeID;
            } else if (fnName === 'replaceDelimitedText') {
              id = getID(ReactDOMComponentTree.getInstanceFromNode(args[0]));
            } else if (typeof id === 'object') {
              id = getID(ReactDOMComponentTree.getInstanceFromNode(args[0]));
            }
            ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
          }
          return rv;
        } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || fnName === '_renderValidatedComponent')) {
          if (this._currentElement.type === ReactMount.TopLevelWrapper) {
            return func.apply(this, args);
          }
          var rootNodeID = getIDOfComposite(this);
          var isRender = fnName === '_renderValidatedComponent';
          var isMount = fnName === 'mountComponent';
          var mountStack = ReactDefaultPerf._mountStack;
          if (isRender) {
            addValue(entry.counts, rootNodeID, 1);
          } else if (isMount) {
            entry.created[rootNodeID] = true;
            mountStack.push(0);
          }
          ReactDefaultPerf._compositeStack.push(rootNodeID);
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          ReactDefaultPerf._compositeStack.pop();
          if (isRender) {
            addValue(entry.render, rootNodeID, totalTime);
          } else if (isMount) {
            var subMountTime = mountStack.pop();
            mountStack[mountStack.length - 1] += totalTime;
            addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
            addValue(entry.inclusive, rootNodeID, totalTime);
          } else {
            addValue(entry.inclusive, rootNodeID, totalTime);
          }
          entry.displayNames[rootNodeID] = {
            current: this.getName(),
            owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
          };
          return rv;
        } else if ((moduleName === 'ReactDOMComponent' || moduleName === 'ReactDOMTextComponent') && (fnName === 'mountComponent' || fnName === 'receiveComponent')) {
          rv = func.apply(this, args);
          entry.hierarchy[getID(this)] = ReactDefaultPerf._compositeStack.slice();
          return rv;
        } else {
          return func.apply(this, args);
        }
      };
    }
  };
  module.exports = ReactDefaultPerf;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDefaultInjection.js", ["./BeforeInputEventPlugin", "./ChangeEventPlugin", "./DefaultEventPluginOrder", "./EnterLeaveEventPlugin", "fbjs/lib/ExecutionEnvironment", "./HTMLDOMPropertyConfig", "./ReactComponentBrowserEnvironment", "./ReactDOMComponent", "./ReactDOMComponentTree", "./ReactDOMEmptyComponent", "./ReactDOMTreeTraversal", "./ReactDOMTextComponent", "./ReactDefaultBatchingStrategy", "./ReactEventListener", "./ReactInjection", "./ReactReconcileTransaction", "./SVGDOMPropertyConfig", "./SelectEventPlugin", "./SimpleEventPlugin", "./ReactDefaultPerf", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var BeforeInputEventPlugin = $__require('./BeforeInputEventPlugin');
  var ChangeEventPlugin = $__require('./ChangeEventPlugin');
  var DefaultEventPluginOrder = $__require('./DefaultEventPluginOrder');
  var EnterLeaveEventPlugin = $__require('./EnterLeaveEventPlugin');
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var HTMLDOMPropertyConfig = $__require('./HTMLDOMPropertyConfig');
  var ReactComponentBrowserEnvironment = $__require('./ReactComponentBrowserEnvironment');
  var ReactDOMComponent = $__require('./ReactDOMComponent');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactDOMEmptyComponent = $__require('./ReactDOMEmptyComponent');
  var ReactDOMTreeTraversal = $__require('./ReactDOMTreeTraversal');
  var ReactDOMTextComponent = $__require('./ReactDOMTextComponent');
  var ReactDefaultBatchingStrategy = $__require('./ReactDefaultBatchingStrategy');
  var ReactEventListener = $__require('./ReactEventListener');
  var ReactInjection = $__require('./ReactInjection');
  var ReactReconcileTransaction = $__require('./ReactReconcileTransaction');
  var SVGDOMPropertyConfig = $__require('./SVGDOMPropertyConfig');
  var SelectEventPlugin = $__require('./SelectEventPlugin');
  var SimpleEventPlugin = $__require('./SimpleEventPlugin');
  var alreadyInjected = false;
  function inject() {
    if (alreadyInjected) {
      return;
    }
    alreadyInjected = true;
    ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
    ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
    ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
    ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
    ReactInjection.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: SimpleEventPlugin,
      EnterLeaveEventPlugin: EnterLeaveEventPlugin,
      ChangeEventPlugin: ChangeEventPlugin,
      SelectEventPlugin: SelectEventPlugin,
      BeforeInputEventPlugin: BeforeInputEventPlugin
    });
    ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
    ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
    ReactInjection.EmptyComponent.injectEmptyComponentFactory(function(instantiate) {
      return new ReactDOMEmptyComponent(instantiate);
    });
    ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
    ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
    if ("production" !== 'production') {
      var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
      if (/[?&]react_perf\b/.test(url)) {
        var ReactDefaultPerf = $__require('./ReactDefaultPerf');
        ReactDefaultPerf.start();
      }
    }
  }
  module.exports = {inject: inject};
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/findDOMNode.js", ["./ReactCurrentOwner", "./ReactDOMComponentTree", "./ReactInstanceMap", "./getNativeComponentFromComposite", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactInstanceMap = $__require('./ReactInstanceMap');
  var getNativeComponentFromComposite = $__require('./getNativeComponentFromComposite');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  function findDOMNode(componentOrElement) {
    if ("production" !== 'production') {
      var owner = ReactCurrentOwner.current;
      if (owner !== null) {
        "production" !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
        owner._warnedAboutRefsInRender = true;
      }
    }
    if (componentOrElement == null) {
      return null;
    }
    if (componentOrElement.nodeType === 1) {
      return componentOrElement;
    }
    var inst = ReactInstanceMap.get(componentOrElement);
    if (inst) {
      inst = getNativeComponentFromComposite(inst);
      return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
    }
    if (typeof componentOrElement.render === 'function') {
      !false ? "production" !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : void 0;
    } else {
      !false ? "production" !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : void 0;
    }
  }
  module.exports = findDOMNode;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getNativeComponentFromComposite.js", ["./ReactNodeTypes", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactNodeTypes = $__require('./ReactNodeTypes');
  function getNativeComponentFromComposite(inst) {
    var type;
    while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
      inst = inst._renderedComponent;
    }
    if (type === ReactNodeTypes.NATIVE) {
      return inst._renderedComponent;
    } else if (type === ReactNodeTypes.EMPTY) {
      return null;
    }
  }
  module.exports = getNativeComponentFromComposite;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/escapeTextContentForBrowser.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ESCAPE_LOOKUP = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    '\'': '&#x27;'
  };
  var ESCAPE_REGEX = /[&><"']/g;
  function escaper(match) {
    return ESCAPE_LOOKUP[match];
  }
  function escapeTextContentForBrowser(text) {
    return ('' + text).replace(ESCAPE_REGEX, escaper);
  }
  module.exports = escapeTextContentForBrowser;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/setTextContent.js", ["fbjs/lib/ExecutionEnvironment", "./escapeTextContentForBrowser", "./setInnerHTML", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var escapeTextContentForBrowser = $__require('./escapeTextContentForBrowser');
  var setInnerHTML = $__require('./setInnerHTML');
  var setTextContent = function(node, text) {
    node.textContent = text;
  };
  if (ExecutionEnvironment.canUseDOM) {
    if (!('textContent' in document.documentElement)) {
      setTextContent = function(node, text) {
        setInnerHTML(node, escapeTextContentForBrowser(text));
      };
    }
  }
  module.exports = setTextContent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/DOMLazyTree.js", ["./createMicrosoftUnsafeLocalFunction", "./setTextContent", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var createMicrosoftUnsafeLocalFunction = $__require('./createMicrosoftUnsafeLocalFunction');
  var setTextContent = $__require('./setTextContent');
  var enableLazy = typeof document !== 'undefined' && typeof document.documentMode === 'number' || typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && /\bEdge\/\d/.test(navigator.userAgent);
  function insertTreeChildren(tree) {
    if (!enableLazy) {
      return;
    }
    var node = tree.node;
    var children = tree.children;
    if (children.length) {
      for (var i = 0; i < children.length; i++) {
        insertTreeBefore(node, children[i], null);
      }
    } else if (tree.html != null) {
      node.innerHTML = tree.html;
    } else if (tree.text != null) {
      setTextContent(node, tree.text);
    }
  }
  var insertTreeBefore = createMicrosoftUnsafeLocalFunction(function(parentNode, tree, referenceNode) {
    if (tree.node.nodeType === 11) {
      insertTreeChildren(tree);
      parentNode.insertBefore(tree.node, referenceNode);
    } else {
      parentNode.insertBefore(tree.node, referenceNode);
      insertTreeChildren(tree);
    }
  });
  function replaceChildWithTree(oldNode, newTree) {
    oldNode.parentNode.replaceChild(newTree.node, oldNode);
    insertTreeChildren(newTree);
  }
  function queueChild(parentTree, childTree) {
    if (enableLazy) {
      parentTree.children.push(childTree);
    } else {
      parentTree.node.appendChild(childTree.node);
    }
  }
  function queueHTML(tree, html) {
    if (enableLazy) {
      tree.html = html;
    } else {
      tree.node.innerHTML = html;
    }
  }
  function queueText(tree, text) {
    if (enableLazy) {
      tree.text = text;
    } else {
      setTextContent(tree.node, text);
    }
  }
  function DOMLazyTree(node) {
    return {
      node: node,
      children: [],
      html: null,
      text: null
    };
  }
  DOMLazyTree.insertTreeBefore = insertTreeBefore;
  DOMLazyTree.replaceChildWithTree = replaceChildWithTree;
  DOMLazyTree.queueChild = queueChild;
  DOMLazyTree.queueHTML = queueHTML;
  DOMLazyTree.queueText = queueText;
  module.exports = DOMLazyTree;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/EventPluginRegistry.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  var EventPluginOrder = null;
  var namesToPlugins = {};
  function recomputePluginOrdering() {
    if (!EventPluginOrder) {
      return;
    }
    for (var pluginName in namesToPlugins) {
      var PluginModule = namesToPlugins[pluginName];
      var pluginIndex = EventPluginOrder.indexOf(pluginName);
      !(pluginIndex > -1) ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : void 0;
      if (EventPluginRegistry.plugins[pluginIndex]) {
        continue;
      }
      !PluginModule.extractEvents ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : void 0;
      EventPluginRegistry.plugins[pluginIndex] = PluginModule;
      var publishedEvents = PluginModule.eventTypes;
      for (var eventName in publishedEvents) {
        !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : void 0;
      }
    }
  }
  function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
    !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? "production" !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : void 0;
    EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
    var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
    if (phasedRegistrationNames) {
      for (var phaseName in phasedRegistrationNames) {
        if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
          var phasedRegistrationName = phasedRegistrationNames[phaseName];
          publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
        }
      }
      return true;
    } else if (dispatchConfig.registrationName) {
      publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
      return true;
    }
    return false;
  }
  function publishRegistrationName(registrationName, PluginModule, eventName) {
    !!EventPluginRegistry.registrationNameModules[registrationName] ? "production" !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : void 0;
    EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
    EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
    if ("production" !== 'production') {
      var lowerCasedName = registrationName.toLowerCase();
      EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;
    }
  }
  var EventPluginRegistry = {
    plugins: [],
    eventNameDispatchConfigs: {},
    registrationNameModules: {},
    registrationNameDependencies: {},
    possibleRegistrationNames: "production" !== 'production' ? {} : null,
    injectEventPluginOrder: function(InjectedEventPluginOrder) {
      !!EventPluginOrder ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : void 0;
      EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
      recomputePluginOrdering();
    },
    injectEventPluginsByName: function(injectedNamesToPlugins) {
      var isOrderingDirty = false;
      for (var pluginName in injectedNamesToPlugins) {
        if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
          continue;
        }
        var PluginModule = injectedNamesToPlugins[pluginName];
        if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
          !!namesToPlugins[pluginName] ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : void 0;
          namesToPlugins[pluginName] = PluginModule;
          isOrderingDirty = true;
        }
      }
      if (isOrderingDirty) {
        recomputePluginOrdering();
      }
    },
    getPluginModuleForEvent: function(event) {
      var dispatchConfig = event.dispatchConfig;
      if (dispatchConfig.registrationName) {
        return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
      }
      for (var phase in dispatchConfig.phasedRegistrationNames) {
        if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
          continue;
        }
        var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
        if (PluginModule) {
          return PluginModule;
        }
      }
      return null;
    },
    _resetEventPlugins: function() {
      EventPluginOrder = null;
      for (var pluginName in namesToPlugins) {
        if (namesToPlugins.hasOwnProperty(pluginName)) {
          delete namesToPlugins[pluginName];
        }
      }
      EventPluginRegistry.plugins.length = 0;
      var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
      for (var eventName in eventNameDispatchConfigs) {
        if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
          delete eventNameDispatchConfigs[eventName];
        }
      }
      var registrationNameModules = EventPluginRegistry.registrationNameModules;
      for (var registrationName in registrationNameModules) {
        if (registrationNameModules.hasOwnProperty(registrationName)) {
          delete registrationNameModules[registrationName];
        }
      }
      if ("production" !== 'production') {
        var possibleRegistrationNames = EventPluginRegistry.possibleRegistrationNames;
        for (var lowerCasedName in possibleRegistrationNames) {
          if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
            delete possibleRegistrationNames[lowerCasedName];
          }
        }
      }
    }
  };
  module.exports = EventPluginRegistry;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/EventConstants.js", ["fbjs/lib/keyMirror", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('fbjs/lib/keyMirror');
  var PropagationPhases = keyMirror({
    bubbled: null,
    captured: null
  });
  var topLevelTypes = keyMirror({
    topAbort: null,
    topAnimationEnd: null,
    topAnimationIteration: null,
    topAnimationStart: null,
    topBlur: null,
    topCanPlay: null,
    topCanPlayThrough: null,
    topChange: null,
    topClick: null,
    topCompositionEnd: null,
    topCompositionStart: null,
    topCompositionUpdate: null,
    topContextMenu: null,
    topCopy: null,
    topCut: null,
    topDoubleClick: null,
    topDrag: null,
    topDragEnd: null,
    topDragEnter: null,
    topDragExit: null,
    topDragLeave: null,
    topDragOver: null,
    topDragStart: null,
    topDrop: null,
    topDurationChange: null,
    topEmptied: null,
    topEncrypted: null,
    topEnded: null,
    topError: null,
    topFocus: null,
    topInput: null,
    topInvalid: null,
    topKeyDown: null,
    topKeyPress: null,
    topKeyUp: null,
    topLoad: null,
    topLoadedData: null,
    topLoadedMetadata: null,
    topLoadStart: null,
    topMouseDown: null,
    topMouseMove: null,
    topMouseOut: null,
    topMouseOver: null,
    topMouseUp: null,
    topPaste: null,
    topPause: null,
    topPlay: null,
    topPlaying: null,
    topProgress: null,
    topRateChange: null,
    topReset: null,
    topScroll: null,
    topSeeked: null,
    topSeeking: null,
    topSelectionChange: null,
    topStalled: null,
    topSubmit: null,
    topSuspend: null,
    topTextInput: null,
    topTimeUpdate: null,
    topTouchCancel: null,
    topTouchEnd: null,
    topTouchMove: null,
    topTouchStart: null,
    topTransitionEnd: null,
    topVolumeChange: null,
    topWaiting: null,
    topWheel: null
  });
  var EventConstants = {
    topLevelTypes: topLevelTypes,
    PropagationPhases: PropagationPhases
  };
  module.exports = EventConstants;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/EventPluginUtils.js", ["./EventConstants", "./ReactErrorUtils", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('./EventConstants');
  var ReactErrorUtils = $__require('./ReactErrorUtils');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  var ComponentTree;
  var TreeTraversal;
  var injection = {
    injectComponentTree: function(Injected) {
      ComponentTree = Injected;
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
      }
    },
    injectTreeTraversal: function(Injected) {
      TreeTraversal = Injected;
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
      }
    }
  };
  var topLevelTypes = EventConstants.topLevelTypes;
  function isEndish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
  }
  function isMoveish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
  }
  function isStartish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
  }
  var validateEventDispatches;
  if ("production" !== 'production') {
    validateEventDispatches = function(event) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchInstances = event._dispatchInstances;
      var listenersIsArr = Array.isArray(dispatchListeners);
      var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
      var instancesIsArr = Array.isArray(dispatchInstances);
      var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;
      "production" !== 'production' ? warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
    };
  }
  function executeDispatch(event, simulated, listener, inst) {
    var type = event.type || 'unknown-event';
    event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
    if (simulated) {
      ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
    } else {
      ReactErrorUtils.invokeGuardedCallback(type, listener, event);
    }
    event.currentTarget = null;
  }
  function executeDispatchesInOrder(event, simulated) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;
    if ("production" !== 'production') {
      validateEventDispatches(event);
    }
    if (Array.isArray(dispatchListeners)) {
      for (var i = 0; i < dispatchListeners.length; i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
      }
    } else if (dispatchListeners) {
      executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
    }
    event._dispatchListeners = null;
    event._dispatchInstances = null;
  }
  function executeDispatchesInOrderStopAtTrueImpl(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;
    if ("production" !== 'production') {
      validateEventDispatches(event);
    }
    if (Array.isArray(dispatchListeners)) {
      for (var i = 0; i < dispatchListeners.length; i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        if (dispatchListeners[i](event, dispatchInstances[i])) {
          return dispatchInstances[i];
        }
      }
    } else if (dispatchListeners) {
      if (dispatchListeners(event, dispatchInstances)) {
        return dispatchInstances;
      }
    }
    return null;
  }
  function executeDispatchesInOrderStopAtTrue(event) {
    var ret = executeDispatchesInOrderStopAtTrueImpl(event);
    event._dispatchInstances = null;
    event._dispatchListeners = null;
    return ret;
  }
  function executeDirectDispatch(event) {
    if ("production" !== 'production') {
      validateEventDispatches(event);
    }
    var dispatchListener = event._dispatchListeners;
    var dispatchInstance = event._dispatchInstances;
    !!Array.isArray(dispatchListener) ? "production" !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : void 0;
    event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
    var res = dispatchListener ? dispatchListener(event) : null;
    event.currentTarget = null;
    event._dispatchListeners = null;
    event._dispatchInstances = null;
    return res;
  }
  function hasDispatches(event) {
    return !!event._dispatchListeners;
  }
  var EventPluginUtils = {
    isEndish: isEndish,
    isMoveish: isMoveish,
    isStartish: isStartish,
    executeDirectDispatch: executeDirectDispatch,
    executeDispatchesInOrder: executeDispatchesInOrder,
    executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
    hasDispatches: hasDispatches,
    getInstanceFromNode: function(node) {
      return ComponentTree.getInstanceFromNode(node);
    },
    getNodeFromInstance: function(node) {
      return ComponentTree.getNodeFromInstance(node);
    },
    isAncestor: function(a, b) {
      return TreeTraversal.isAncestor(a, b);
    },
    getLowestCommonAncestor: function(a, b) {
      return TreeTraversal.getLowestCommonAncestor(a, b);
    },
    getParentInstance: function(inst) {
      return TreeTraversal.getParentInstance(inst);
    },
    traverseTwoPhase: function(target, fn, arg) {
      return TreeTraversal.traverseTwoPhase(target, fn, arg);
    },
    traverseEnterLeave: function(from, to, fn, argFrom, argTo) {
      return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
    },
    injection: injection
  };
  module.exports = EventPluginUtils;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/accumulateInto.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  function accumulateInto(current, next) {
    !(next != null) ? "production" !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : void 0;
    if (current == null) {
      return next;
    }
    var currentIsArray = Array.isArray(current);
    var nextIsArray = Array.isArray(next);
    if (currentIsArray && nextIsArray) {
      current.push.apply(current, next);
      return current;
    }
    if (currentIsArray) {
      current.push(next);
      return current;
    }
    if (nextIsArray) {
      return [current].concat(next);
    }
    return [current, next];
  }
  module.exports = accumulateInto;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/forEachAccumulated.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var forEachAccumulated = function(arr, cb, scope) {
    if (Array.isArray(arr)) {
      arr.forEach(cb, scope);
    } else if (arr) {
      cb.call(scope, arr);
    }
  };
  module.exports = forEachAccumulated;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/EventPluginHub.js", ["./EventPluginRegistry", "./EventPluginUtils", "./ReactErrorUtils", "./accumulateInto", "./forEachAccumulated", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventPluginRegistry = $__require('./EventPluginRegistry');
  var EventPluginUtils = $__require('./EventPluginUtils');
  var ReactErrorUtils = $__require('./ReactErrorUtils');
  var accumulateInto = $__require('./accumulateInto');
  var forEachAccumulated = $__require('./forEachAccumulated');
  var invariant = $__require('fbjs/lib/invariant');
  var listenerBank = {};
  var eventQueue = null;
  var executeDispatchesAndRelease = function(event, simulated) {
    if (event) {
      EventPluginUtils.executeDispatchesInOrder(event, simulated);
      if (!event.isPersistent()) {
        event.constructor.release(event);
      }
    }
  };
  var executeDispatchesAndReleaseSimulated = function(e) {
    return executeDispatchesAndRelease(e, true);
  };
  var executeDispatchesAndReleaseTopLevel = function(e) {
    return executeDispatchesAndRelease(e, false);
  };
  var EventPluginHub = {
    injection: {
      injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
      injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
    },
    putListener: function(inst, registrationName, listener) {
      !(typeof listener === 'function') ? "production" !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : void 0;
      var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
      bankForRegistrationName[inst._rootNodeID] = listener;
      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.didPutListener) {
        PluginModule.didPutListener(inst, registrationName, listener);
      }
    },
    getListener: function(inst, registrationName) {
      var bankForRegistrationName = listenerBank[registrationName];
      return bankForRegistrationName && bankForRegistrationName[inst._rootNodeID];
    },
    deleteListener: function(inst, registrationName) {
      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(inst, registrationName);
      }
      var bankForRegistrationName = listenerBank[registrationName];
      if (bankForRegistrationName) {
        delete bankForRegistrationName[inst._rootNodeID];
      }
    },
    deleteAllListeners: function(inst) {
      for (var registrationName in listenerBank) {
        if (!listenerBank[registrationName][inst._rootNodeID]) {
          continue;
        }
        var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
        if (PluginModule && PluginModule.willDeleteListener) {
          PluginModule.willDeleteListener(inst, registrationName);
        }
        delete listenerBank[registrationName][inst._rootNodeID];
      }
    },
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var events;
      var plugins = EventPluginRegistry.plugins;
      for (var i = 0; i < plugins.length; i++) {
        var possiblePlugin = plugins[i];
        if (possiblePlugin) {
          var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
          if (extractedEvents) {
            events = accumulateInto(events, extractedEvents);
          }
        }
      }
      return events;
    },
    enqueueEvents: function(events) {
      if (events) {
        eventQueue = accumulateInto(eventQueue, events);
      }
    },
    processEventQueue: function(simulated) {
      var processingEventQueue = eventQueue;
      eventQueue = null;
      if (simulated) {
        forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
      } else {
        forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
      }
      !!eventQueue ? "production" !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : void 0;
      ReactErrorUtils.rethrowCaughtError();
    },
    __purge: function() {
      listenerBank = {};
    },
    __getListenerBank: function() {
      return listenerBank;
    }
  };
  module.exports = EventPluginHub;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactEventEmitterMixin.js", ["./EventPluginHub", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var EventPluginHub = $__require('./EventPluginHub');
  function runEventQueueInBatch(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue(false);
  }
  var ReactEventEmitterMixin = {handleTopLevel: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var events = EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
      runEventQueueInBatch(events);
    }};
  module.exports = ReactEventEmitterMixin;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ViewportMetrics.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ViewportMetrics = {
    currentScrollLeft: 0,
    currentScrollTop: 0,
    refreshScrollValues: function(scrollPosition) {
      ViewportMetrics.currentScrollLeft = scrollPosition.x;
      ViewportMetrics.currentScrollTop = scrollPosition.y;
    }
  };
  module.exports = ViewportMetrics;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getVendorPrefixedEventName.js", ["fbjs/lib/ExecutionEnvironment", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes['Webkit' + styleProp] = 'webkit' + eventName;
    prefixes['Moz' + styleProp] = 'moz' + eventName;
    prefixes['ms' + styleProp] = 'MS' + eventName;
    prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();
    return prefixes;
  }
  var vendorPrefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
    animationstart: makePrefixMap('Animation', 'AnimationStart'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  var prefixedEventNames = {};
  var style = {};
  if (ExecutionEnvironment.canUseDOM) {
    style = document.createElement('div').style;
    if (!('AnimationEvent' in window)) {
      delete vendorPrefixes.animationend.animation;
      delete vendorPrefixes.animationiteration.animation;
      delete vendorPrefixes.animationstart.animation;
    }
    if (!('TransitionEvent' in window)) {
      delete vendorPrefixes.transitionend.transition;
    }
  }
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    } else if (!vendorPrefixes[eventName]) {
      return eventName;
    }
    var prefixMap = vendorPrefixes[eventName];
    for (var styleProp in prefixMap) {
      if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
        return prefixedEventNames[eventName] = prefixMap[styleProp];
      }
    }
    return '';
  }
  module.exports = getVendorPrefixedEventName;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/isEventSupported.js", ["fbjs/lib/ExecutionEnvironment", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== true;
  }
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
      return false;
    }
    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in document;
    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
  }
  module.exports = isEventSupported;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactBrowserEventEmitter.js", ["object-assign", "./EventConstants", "./EventPluginRegistry", "./ReactEventEmitterMixin", "./ViewportMetrics", "./getVendorPrefixedEventName", "./isEventSupported", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var EventConstants = $__require('./EventConstants');
  var EventPluginRegistry = $__require('./EventPluginRegistry');
  var ReactEventEmitterMixin = $__require('./ReactEventEmitterMixin');
  var ViewportMetrics = $__require('./ViewportMetrics');
  var getVendorPrefixedEventName = $__require('./getVendorPrefixedEventName');
  var isEventSupported = $__require('./isEventSupported');
  var hasEventPageXY;
  var alreadyListeningTo = {};
  var isMonitoringScrollValue = false;
  var reactTopListenersCounter = 0;
  var topEventMapping = {
    topAbort: 'abort',
    topAnimationEnd: getVendorPrefixedEventName('animationend') || 'animationend',
    topAnimationIteration: getVendorPrefixedEventName('animationiteration') || 'animationiteration',
    topAnimationStart: getVendorPrefixedEventName('animationstart') || 'animationstart',
    topBlur: 'blur',
    topCanPlay: 'canplay',
    topCanPlayThrough: 'canplaythrough',
    topChange: 'change',
    topClick: 'click',
    topCompositionEnd: 'compositionend',
    topCompositionStart: 'compositionstart',
    topCompositionUpdate: 'compositionupdate',
    topContextMenu: 'contextmenu',
    topCopy: 'copy',
    topCut: 'cut',
    topDoubleClick: 'dblclick',
    topDrag: 'drag',
    topDragEnd: 'dragend',
    topDragEnter: 'dragenter',
    topDragExit: 'dragexit',
    topDragLeave: 'dragleave',
    topDragOver: 'dragover',
    topDragStart: 'dragstart',
    topDrop: 'drop',
    topDurationChange: 'durationchange',
    topEmptied: 'emptied',
    topEncrypted: 'encrypted',
    topEnded: 'ended',
    topError: 'error',
    topFocus: 'focus',
    topInput: 'input',
    topKeyDown: 'keydown',
    topKeyPress: 'keypress',
    topKeyUp: 'keyup',
    topLoadedData: 'loadeddata',
    topLoadedMetadata: 'loadedmetadata',
    topLoadStart: 'loadstart',
    topMouseDown: 'mousedown',
    topMouseMove: 'mousemove',
    topMouseOut: 'mouseout',
    topMouseOver: 'mouseover',
    topMouseUp: 'mouseup',
    topPaste: 'paste',
    topPause: 'pause',
    topPlay: 'play',
    topPlaying: 'playing',
    topProgress: 'progress',
    topRateChange: 'ratechange',
    topScroll: 'scroll',
    topSeeked: 'seeked',
    topSeeking: 'seeking',
    topSelectionChange: 'selectionchange',
    topStalled: 'stalled',
    topSuspend: 'suspend',
    topTextInput: 'textInput',
    topTimeUpdate: 'timeupdate',
    topTouchCancel: 'touchcancel',
    topTouchEnd: 'touchend',
    topTouchMove: 'touchmove',
    topTouchStart: 'touchstart',
    topTransitionEnd: getVendorPrefixedEventName('transitionend') || 'transitionend',
    topVolumeChange: 'volumechange',
    topWaiting: 'waiting',
    topWheel: 'wheel'
  };
  var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);
  function getListeningForDocument(mountAt) {
    if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
      mountAt[topListenersIDKey] = reactTopListenersCounter++;
      alreadyListeningTo[mountAt[topListenersIDKey]] = {};
    }
    return alreadyListeningTo[mountAt[topListenersIDKey]];
  }
  var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin, {
    ReactEventListener: null,
    injection: {injectReactEventListener: function(ReactEventListener) {
        ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
        ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
      }},
    setEnabled: function(enabled) {
      if (ReactBrowserEventEmitter.ReactEventListener) {
        ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
      }
    },
    isEnabled: function() {
      return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
    },
    listenTo: function(registrationName, contentDocumentHandle) {
      var mountAt = contentDocumentHandle;
      var isListening = getListeningForDocument(mountAt);
      var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
      var topLevelTypes = EventConstants.topLevelTypes;
      for (var i = 0; i < dependencies.length; i++) {
        var dependency = dependencies[i];
        if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
          if (dependency === topLevelTypes.topWheel) {
            if (isEventSupported('wheel')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
            } else if (isEventSupported('mousewheel')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
            } else {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
            }
          } else if (dependency === topLevelTypes.topScroll) {
            if (isEventSupported('scroll', true)) {
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
            } else {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
            }
          } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
            if (isEventSupported('focus', true)) {
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
            } else if (isEventSupported('focusin')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
            }
            isListening[topLevelTypes.topBlur] = true;
            isListening[topLevelTypes.topFocus] = true;
          } else if (topEventMapping.hasOwnProperty(dependency)) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
          }
          isListening[dependency] = true;
        }
      }
    },
    trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
      return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
    },
    trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
      return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
    },
    ensureScrollValueMonitoring: function() {
      if (hasEventPageXY === undefined) {
        hasEventPageXY = document.createEvent && 'pageX' in document.createEvent('MouseEvent');
      }
      if (!hasEventPageXY && !isMonitoringScrollValue) {
        var refresh = ViewportMetrics.refreshScrollValues;
        ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
        isMonitoringScrollValue = true;
      }
    }
  });
  module.exports = ReactBrowserEventEmitter;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/DOMProperty.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  function checkMask(value, bitmask) {
    return (value & bitmask) === bitmask;
  }
  var DOMPropertyInjection = {
    MUST_USE_PROPERTY: 0x1,
    HAS_SIDE_EFFECTS: 0x2,
    HAS_BOOLEAN_VALUE: 0x4,
    HAS_NUMERIC_VALUE: 0x8,
    HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
    HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
    injectDOMPropertyConfig: function(domPropertyConfig) {
      var Injection = DOMPropertyInjection;
      var Properties = domPropertyConfig.Properties || {};
      var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
      var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
      var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
      var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
      if (domPropertyConfig.isCustomAttribute) {
        DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
      }
      for (var propName in Properties) {
        !!DOMProperty.properties.hasOwnProperty(propName) ? "production" !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : void 0;
        var lowerCased = propName.toLowerCase();
        var propConfig = Properties[propName];
        var propertyInfo = {
          attributeName: lowerCased,
          attributeNamespace: null,
          propertyName: propName,
          mutationMethod: null,
          mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
          hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
          hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
          hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
          hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
          hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
        };
        !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? "production" !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : void 0;
        !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? "production" !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : void 0;
        if ("production" !== 'production') {
          DOMProperty.getPossibleStandardName[lowerCased] = propName;
        }
        if (DOMAttributeNames.hasOwnProperty(propName)) {
          var attributeName = DOMAttributeNames[propName];
          propertyInfo.attributeName = attributeName;
          if ("production" !== 'production') {
            DOMProperty.getPossibleStandardName[attributeName] = propName;
          }
        }
        if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
          propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
        }
        if (DOMPropertyNames.hasOwnProperty(propName)) {
          propertyInfo.propertyName = DOMPropertyNames[propName];
        }
        if (DOMMutationMethods.hasOwnProperty(propName)) {
          propertyInfo.mutationMethod = DOMMutationMethods[propName];
        }
        DOMProperty.properties[propName] = propertyInfo;
      }
    }
  };
  var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
  var DOMProperty = {
    ID_ATTRIBUTE_NAME: 'data-reactid',
    ROOT_ATTRIBUTE_NAME: 'data-reactroot',
    ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
    ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\uB7\\u0300-\\u036F\\u203F-\\u2040',
    properties: {},
    getPossibleStandardName: "production" !== 'production' ? {} : null,
    _isCustomAttributeFunctions: [],
    isCustomAttribute: function(attributeName) {
      for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
        var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
        if (isCustomAttributeFn(attributeName)) {
          return true;
        }
      }
      return false;
    },
    injection: DOMPropertyInjection
  };
  module.exports = DOMProperty;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMComponentFlags.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMComponentFlags = {hasCachedChildNodes: 1 << 0};
  module.exports = ReactDOMComponentFlags;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMComponentTree.js", ["./DOMProperty", "./ReactDOMComponentFlags", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('./DOMProperty');
  var ReactDOMComponentFlags = $__require('./ReactDOMComponentFlags');
  var invariant = $__require('fbjs/lib/invariant');
  var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
  var Flags = ReactDOMComponentFlags;
  var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);
  function getRenderedNativeOrTextFromComponent(component) {
    var rendered;
    while (rendered = component._renderedComponent) {
      component = rendered;
    }
    return component;
  }
  function precacheNode(inst, node) {
    var nativeInst = getRenderedNativeOrTextFromComponent(inst);
    nativeInst._nativeNode = node;
    node[internalInstanceKey] = nativeInst;
  }
  function uncacheNode(inst) {
    var node = inst._nativeNode;
    if (node) {
      delete node[internalInstanceKey];
      inst._nativeNode = null;
    }
  }
  function precacheChildNodes(inst, node) {
    if (inst._flags & Flags.hasCachedChildNodes) {
      return;
    }
    var children = inst._renderedChildren;
    var childNode = node.firstChild;
    outer: for (var name in children) {
      if (!children.hasOwnProperty(name)) {
        continue;
      }
      var childInst = children[name];
      var childID = getRenderedNativeOrTextFromComponent(childInst)._domID;
      if (childID == null) {
        continue;
      }
      for (; childNode !== null; childNode = childNode.nextSibling) {
        if (childNode.nodeType === 1 && childNode.getAttribute(ATTR_NAME) === String(childID) || childNode.nodeType === 8 && childNode.nodeValue === ' react-text: ' + childID + ' ' || childNode.nodeType === 8 && childNode.nodeValue === ' react-empty: ' + childID + ' ') {
          precacheNode(childInst, childNode);
          continue outer;
        }
      }
      !false ? "production" !== 'production' ? invariant(false, 'Unable to find element with ID %s.', childID) : invariant(false) : void 0;
    }
    inst._flags |= Flags.hasCachedChildNodes;
  }
  function getClosestInstanceFromNode(node) {
    if (node[internalInstanceKey]) {
      return node[internalInstanceKey];
    }
    var parents = [];
    while (!node[internalInstanceKey]) {
      parents.push(node);
      if (node.parentNode) {
        node = node.parentNode;
      } else {
        return null;
      }
    }
    var closest;
    var inst;
    for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
      closest = inst;
      if (parents.length) {
        precacheChildNodes(inst, node);
      }
    }
    return closest;
  }
  function getInstanceFromNode(node) {
    var inst = getClosestInstanceFromNode(node);
    if (inst != null && inst._nativeNode === node) {
      return inst;
    } else {
      return null;
    }
  }
  function getNodeFromInstance(inst) {
    !(inst._nativeNode !== undefined) ? "production" !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
    if (inst._nativeNode) {
      return inst._nativeNode;
    }
    var parents = [];
    while (!inst._nativeNode) {
      parents.push(inst);
      !inst._nativeParent ? "production" !== 'production' ? invariant(false, 'React DOM tree root should always have a node reference.') : invariant(false) : void 0;
      inst = inst._nativeParent;
    }
    for (; parents.length; inst = parents.pop()) {
      precacheChildNodes(inst, inst._nativeNode);
    }
    return inst._nativeNode;
  }
  var ReactDOMComponentTree = {
    getClosestInstanceFromNode: getClosestInstanceFromNode,
    getInstanceFromNode: getInstanceFromNode,
    getNodeFromInstance: getNodeFromInstance,
    precacheChildNodes: precacheChildNodes,
    precacheNode: precacheNode,
    uncacheNode: uncacheNode
  };
  module.exports = ReactDOMComponentTree;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/validateDOMNesting.js", ["object-assign", "fbjs/lib/emptyFunction", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var emptyFunction = $__require('fbjs/lib/emptyFunction');
  var warning = $__require('fbjs/lib/warning');
  var validateDOMNesting = emptyFunction;
  if ("production" !== 'production') {
    var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];
    var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', 'foreignObject', 'desc', 'title'];
    var buttonScopeTags = inScopeTags.concat(['button']);
    var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
    var emptyAncestorInfo = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    var updatedAncestorInfo = function(oldInfo, tag, instance) {
      var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
      var info = {
        tag: tag,
        instance: instance
      };
      if (inScopeTags.indexOf(tag) !== -1) {
        ancestorInfo.aTagInScope = null;
        ancestorInfo.buttonTagInScope = null;
        ancestorInfo.nobrTagInScope = null;
      }
      if (buttonScopeTags.indexOf(tag) !== -1) {
        ancestorInfo.pTagInButtonScope = null;
      }
      if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
        ancestorInfo.listItemTagAutoclosing = null;
        ancestorInfo.dlItemTagAutoclosing = null;
      }
      ancestorInfo.current = info;
      if (tag === 'form') {
        ancestorInfo.formTag = info;
      }
      if (tag === 'a') {
        ancestorInfo.aTagInScope = info;
      }
      if (tag === 'button') {
        ancestorInfo.buttonTagInScope = info;
      }
      if (tag === 'nobr') {
        ancestorInfo.nobrTagInScope = info;
      }
      if (tag === 'p') {
        ancestorInfo.pTagInButtonScope = info;
      }
      if (tag === 'li') {
        ancestorInfo.listItemTagAutoclosing = info;
      }
      if (tag === 'dd' || tag === 'dt') {
        ancestorInfo.dlItemTagAutoclosing = info;
      }
      return ancestorInfo;
    };
    var isTagValidWithParent = function(tag, parentTag) {
      switch (parentTag) {
        case 'select':
          return tag === 'option' || tag === 'optgroup' || tag === '#text';
        case 'optgroup':
          return tag === 'option' || tag === '#text';
        case 'option':
          return tag === '#text';
        case 'tr':
          return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'tbody':
        case 'thead':
        case 'tfoot':
          return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'colgroup':
          return tag === 'col' || tag === 'template';
        case 'table':
          return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'head':
          return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
        case 'html':
          return tag === 'head' || tag === 'body';
        case '#document':
          return tag === 'html';
      }
      switch (tag) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';
        case 'rp':
        case 'rt':
          return impliedEndTags.indexOf(parentTag) === -1;
        case 'body':
        case 'caption':
        case 'col':
        case 'colgroup':
        case 'frame':
        case 'head':
        case 'html':
        case 'tbody':
        case 'td':
        case 'tfoot':
        case 'th':
        case 'thead':
        case 'tr':
          return parentTag == null;
      }
      return true;
    };
    var findInvalidAncestorForTag = function(tag, ancestorInfo) {
      switch (tag) {
        case 'address':
        case 'article':
        case 'aside':
        case 'blockquote':
        case 'center':
        case 'details':
        case 'dialog':
        case 'dir':
        case 'div':
        case 'dl':
        case 'fieldset':
        case 'figcaption':
        case 'figure':
        case 'footer':
        case 'header':
        case 'hgroup':
        case 'main':
        case 'menu':
        case 'nav':
        case 'ol':
        case 'p':
        case 'section':
        case 'summary':
        case 'ul':
        case 'pre':
        case 'listing':
        case 'table':
        case 'hr':
        case 'xmp':
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return ancestorInfo.pTagInButtonScope;
        case 'form':
          return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
        case 'li':
          return ancestorInfo.listItemTagAutoclosing;
        case 'dd':
        case 'dt':
          return ancestorInfo.dlItemTagAutoclosing;
        case 'button':
          return ancestorInfo.buttonTagInScope;
        case 'a':
          return ancestorInfo.aTagInScope;
        case 'nobr':
          return ancestorInfo.nobrTagInScope;
      }
      return null;
    };
    var findOwnerStack = function(instance) {
      if (!instance) {
        return [];
      }
      var stack = [];
      do {
        stack.push(instance);
      } while (instance = instance._currentElement._owner);
      stack.reverse();
      return stack;
    };
    var didWarn = {};
    validateDOMNesting = function(childTag, childInstance, ancestorInfo) {
      ancestorInfo = ancestorInfo || emptyAncestorInfo;
      var parentInfo = ancestorInfo.current;
      var parentTag = parentInfo && parentInfo.tag;
      var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
      var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
      var problematic = invalidParent || invalidAncestor;
      if (problematic) {
        var ancestorTag = problematic.tag;
        var ancestorInstance = problematic.instance;
        var childOwner = childInstance && childInstance._currentElement._owner;
        var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;
        var childOwners = findOwnerStack(childOwner);
        var ancestorOwners = findOwnerStack(ancestorOwner);
        var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
        var i;
        var deepestCommon = -1;
        for (i = 0; i < minStackLen; i++) {
          if (childOwners[i] === ancestorOwners[i]) {
            deepestCommon = i;
          } else {
            break;
          }
        }
        var UNKNOWN = '(unknown)';
        var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function(inst) {
          return inst.getName() || UNKNOWN;
        });
        var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function(inst) {
          return inst.getName() || UNKNOWN;
        });
        var ownerInfo = [].concat(deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag, invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');
        var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
        if (didWarn[warnKey]) {
          return;
        }
        didWarn[warnKey] = true;
        var tagDisplayName = childTag;
        if (childTag !== '#text') {
          tagDisplayName = '<' + childTag + '>';
        }
        if (invalidParent) {
          var info = '';
          if (ancestorTag === 'table' && childTag === 'tr') {
            info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
          }
          "production" !== 'production' ? warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>. ' + 'See %s.%s', tagDisplayName, ancestorTag, ownerInfo, info) : void 0;
        } else {
          "production" !== 'production' ? warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>. See %s.', tagDisplayName, ancestorTag, ownerInfo) : void 0;
        }
      }
    };
    validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;
    validateDOMNesting.isTagValidInContext = function(tag, ancestorInfo) {
      ancestorInfo = ancestorInfo || emptyAncestorInfo;
      var parentInfo = ancestorInfo.current;
      var parentTag = parentInfo && parentInfo.tag;
      return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
    };
  }
  module.exports = validateDOMNesting;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMContainerInfo.js", ["./validateDOMNesting", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var validateDOMNesting = $__require('./validateDOMNesting');
  var DOC_NODE_TYPE = 9;
  function ReactDOMContainerInfo(topLevelWrapper, node) {
    var info = {
      _topLevelWrapper: topLevelWrapper,
      _idCounter: 1,
      _ownerDocument: node ? node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : null,
      _node: node,
      _tag: node ? node.nodeName.toLowerCase() : null,
      _namespaceURI: node ? node.namespaceURI : null
    };
    if ("production" !== 'production') {
      info._ancestorInfo = node ? validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
    }
    return info;
  }
  module.exports = ReactDOMContainerInfo;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMFeatureFlags.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMFeatureFlags = {useCreateElement: true};
  module.exports = ReactDOMFeatureFlags;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/adler32.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var MOD = 65521;
  function adler32(data) {
    var a = 1;
    var b = 0;
    var i = 0;
    var l = data.length;
    var m = l & ~0x3;
    while (i < m) {
      var n = Math.min(i + 4096, m);
      for (; i < n; i += 4) {
        b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
      }
      a %= MOD;
      b %= MOD;
    }
    for (; i < l; i++) {
      b += a += data.charCodeAt(i);
    }
    a %= MOD;
    b %= MOD;
    return a | b << 16;
  }
  module.exports = adler32;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactMarkupChecksum.js", ["./adler32", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var adler32 = $__require('./adler32');
  var TAG_END = /\/?>/;
  var COMMENT_START = /^<\!\-\-/;
  var ReactMarkupChecksum = {
    CHECKSUM_ATTR_NAME: 'data-react-checksum',
    addChecksumToMarkup: function(markup) {
      var checksum = adler32(markup);
      if (COMMENT_START.test(markup)) {
        return markup;
      } else {
        return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
      }
    },
    canReuseMarkup: function(markup, element) {
      var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
      existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
      var markupChecksum = adler32(markup);
      return markupChecksum === existingChecksum;
    }
  };
  module.exports = ReactMarkupChecksum;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactComponentEnvironment.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  var injected = false;
  var ReactComponentEnvironment = {
    unmountIDFromEnvironment: null,
    replaceNodeWithMarkup: null,
    processChildrenUpdates: null,
    injection: {injectEnvironment: function(environment) {
        !!injected ? "production" !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : void 0;
        ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
        ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
        ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
        injected = true;
      }}
  };
  module.exports = ReactComponentEnvironment;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactErrorUtils.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var caughtError = null;
  function invokeGuardedCallback(name, func, a, b) {
    try {
      return func(a, b);
    } catch (x) {
      if (caughtError === null) {
        caughtError = x;
      }
      return undefined;
    }
  }
  var ReactErrorUtils = {
    invokeGuardedCallback: invokeGuardedCallback,
    invokeGuardedCallbackWithCatch: invokeGuardedCallback,
    rethrowCaughtError: function() {
      if (caughtError) {
        var error = caughtError;
        caughtError = null;
        throw error;
      }
    }
  };
  if ("production" !== 'production') {
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
      var fakeNode = document.createElement('react');
      ReactErrorUtils.invokeGuardedCallback = function(name, func, a, b) {
        var boundFunc = func.bind(null, a, b);
        var evtType = 'react-' + name;
        fakeNode.addEventListener(evtType, boundFunc, false);
        var evt = document.createEvent('Event');
        evt.initEvent(evtType, false, false);
        fakeNode.dispatchEvent(evt);
        fakeNode.removeEventListener(evtType, boundFunc, false);
      };
    }
  }
  module.exports = ReactErrorUtils;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactNodeTypes.js", ["./ReactElement", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('./ReactElement');
  var invariant = $__require('fbjs/lib/invariant');
  var ReactNodeTypes = {
    NATIVE: 0,
    COMPOSITE: 1,
    EMPTY: 2,
    getType: function(node) {
      if (node === null || node === false) {
        return ReactNodeTypes.EMPTY;
      } else if (ReactElement.isValidElement(node)) {
        if (typeof node.type === 'function') {
          return ReactNodeTypes.COMPOSITE;
        } else {
          return ReactNodeTypes.NATIVE;
        }
      }
      !false ? "production" !== 'production' ? invariant(false, 'Unexpected node: %s', node) : invariant(false) : void 0;
    }
  };
  module.exports = ReactNodeTypes;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactInstanceMap.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactInstanceMap = {
    remove: function(key) {
      key._reactInternalInstance = undefined;
    },
    get: function(key) {
      return key._reactInternalInstance;
    },
    has: function(key) {
      return key._reactInternalInstance !== undefined;
    },
    set: function(key, value) {
      key._reactInternalInstance = value;
    }
  };
  module.exports = ReactInstanceMap;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/CallbackQueue.js", ["object-assign", "./PooledClass", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var PooledClass = $__require('./PooledClass');
  var invariant = $__require('fbjs/lib/invariant');
  function CallbackQueue() {
    this._callbacks = null;
    this._contexts = null;
  }
  _assign(CallbackQueue.prototype, {
    enqueue: function(callback, context) {
      this._callbacks = this._callbacks || [];
      this._contexts = this._contexts || [];
      this._callbacks.push(callback);
      this._contexts.push(context);
    },
    notifyAll: function() {
      var callbacks = this._callbacks;
      var contexts = this._contexts;
      if (callbacks) {
        !(callbacks.length === contexts.length) ? "production" !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : void 0;
        this._callbacks = null;
        this._contexts = null;
        for (var i = 0; i < callbacks.length; i++) {
          callbacks[i].call(contexts[i]);
        }
        callbacks.length = 0;
        contexts.length = 0;
      }
    },
    checkpoint: function() {
      return this._callbacks ? this._callbacks.length : 0;
    },
    rollback: function(len) {
      if (this._callbacks) {
        this._callbacks.length = len;
        this._contexts.length = len;
      }
    },
    reset: function() {
      this._callbacks = null;
      this._contexts = null;
    },
    destructor: function() {
      this.reset();
    }
  });
  PooledClass.addPoolingTo(CallbackQueue);
  module.exports = CallbackQueue;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactFeatureFlags.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactFeatureFlags = {logTopLevelRenders: false};
  module.exports = ReactFeatureFlags;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactPerf.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactPerf = {
    enableMeasure: false,
    storedMeasure: _noMeasure,
    measureMethods: function(object, objectName, methodNames) {
      if ("production" !== 'production') {
        for (var key in methodNames) {
          if (!methodNames.hasOwnProperty(key)) {
            continue;
          }
          object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
        }
      }
    },
    measure: function(objName, fnName, func) {
      if ("production" !== 'production') {
        var measuredFunc = null;
        var wrapper = function() {
          if (ReactPerf.enableMeasure) {
            if (!measuredFunc) {
              measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
            }
            return measuredFunc.apply(this, arguments);
          }
          return func.apply(this, arguments);
        };
        wrapper.displayName = objName + '_' + fnName;
        return wrapper;
      }
      return func;
    },
    injection: {injectMeasure: function(measure) {
        ReactPerf.storedMeasure = measure;
      }}
  };
  function _noMeasure(objName, fnName, func) {
    return func;
  }
  module.exports = ReactPerf;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactOwner.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  var ReactOwner = {
    isValidOwner: function(object) {
      return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
    },
    addComponentAsRefTo: function(component, ref, owner) {
      !ReactOwner.isValidOwner(owner) ? "production" !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : void 0;
      owner.attachRef(ref, component);
    },
    removeComponentAsRefFrom: function(component, ref, owner) {
      !ReactOwner.isValidOwner(owner) ? "production" !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : void 0;
      var ownerPublicInstance = owner.getPublicInstance();
      if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
        owner.detachRef(ref);
      }
    }
  };
  module.exports = ReactOwner;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactRef.js", ["./ReactOwner", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactOwner = $__require('./ReactOwner');
  var ReactRef = {};
  function attachRef(ref, component, owner) {
    if (typeof ref === 'function') {
      ref(component.getPublicInstance());
    } else {
      ReactOwner.addComponentAsRefTo(component, ref, owner);
    }
  }
  function detachRef(ref, component, owner) {
    if (typeof ref === 'function') {
      ref(null);
    } else {
      ReactOwner.removeComponentAsRefFrom(component, ref, owner);
    }
  }
  ReactRef.attachRefs = function(instance, element) {
    if (element === null || element === false) {
      return;
    }
    var ref = element.ref;
    if (ref != null) {
      attachRef(ref, instance, element._owner);
    }
  };
  ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    return (prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref);
  };
  ReactRef.detachRefs = function(instance, element) {
    if (element === null || element === false) {
      return;
    }
    var ref = element.ref;
    if (ref != null) {
      detachRef(ref, instance, element._owner);
    }
  };
  module.exports = ReactRef;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactReconciler.js", ["./ReactRef", "./ReactInstrumentation", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactRef = $__require('./ReactRef');
  var ReactInstrumentation = $__require('./ReactInstrumentation');
  function attachRefs() {
    ReactRef.attachRefs(this, this._currentElement);
  }
  var ReactReconciler = {
    mountComponent: function(internalInstance, transaction, nativeParent, nativeContainerInfo, context) {
      var markup = internalInstance.mountComponent(transaction, nativeParent, nativeContainerInfo, context);
      if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
      }
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onMountComponent(internalInstance);
      }
      return markup;
    },
    getNativeNode: function(internalInstance) {
      return internalInstance.getNativeNode();
    },
    unmountComponent: function(internalInstance, safely) {
      ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
      internalInstance.unmountComponent(safely);
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onUnmountComponent(internalInstance);
      }
    },
    receiveComponent: function(internalInstance, nextElement, transaction, context) {
      var prevElement = internalInstance._currentElement;
      if (nextElement === prevElement && context === internalInstance._context) {
        return;
      }
      var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
      if (refsChanged) {
        ReactRef.detachRefs(internalInstance, prevElement);
      }
      internalInstance.receiveComponent(nextElement, transaction, context);
      if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
      }
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onUpdateComponent(internalInstance);
      }
    },
    performUpdateIfNecessary: function(internalInstance, transaction) {
      internalInstance.performUpdateIfNecessary(transaction);
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onUpdateComponent(internalInstance);
      }
    }
  };
  module.exports = ReactReconciler;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/Transaction.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  var Mixin = {
    reinitializeTransaction: function() {
      this.transactionWrappers = this.getTransactionWrappers();
      if (this.wrapperInitData) {
        this.wrapperInitData.length = 0;
      } else {
        this.wrapperInitData = [];
      }
      this._isInTransaction = false;
    },
    _isInTransaction: false,
    getTransactionWrappers: null,
    isInTransaction: function() {
      return !!this._isInTransaction;
    },
    perform: function(method, scope, a, b, c, d, e, f) {
      !!this.isInTransaction() ? "production" !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : void 0;
      var errorThrown;
      var ret;
      try {
        this._isInTransaction = true;
        errorThrown = true;
        this.initializeAll(0);
        ret = method.call(scope, a, b, c, d, e, f);
        errorThrown = false;
      } finally {
        try {
          if (errorThrown) {
            try {
              this.closeAll(0);
            } catch (err) {}
          } else {
            this.closeAll(0);
          }
        } finally {
          this._isInTransaction = false;
        }
      }
      return ret;
    },
    initializeAll: function(startIndex) {
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
        var wrapper = transactionWrappers[i];
        try {
          this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
          this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
        } finally {
          if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
            try {
              this.initializeAll(i + 1);
            } catch (err) {}
          }
        }
      }
    },
    closeAll: function(startIndex) {
      !this.isInTransaction() ? "production" !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : void 0;
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
        var wrapper = transactionWrappers[i];
        var initData = this.wrapperInitData[i];
        var errorThrown;
        try {
          errorThrown = true;
          if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
            wrapper.close.call(this, initData);
          }
          errorThrown = false;
        } finally {
          if (errorThrown) {
            try {
              this.closeAll(i + 1);
            } catch (e) {}
          }
        }
      }
      this.wrapperInitData.length = 0;
    }
  };
  var Transaction = {
    Mixin: Mixin,
    OBSERVED_ERROR: {}
  };
  module.exports = Transaction;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactUpdates.js", ["object-assign", "./CallbackQueue", "./PooledClass", "./ReactFeatureFlags", "./ReactPerf", "./ReactReconciler", "./Transaction", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var CallbackQueue = $__require('./CallbackQueue');
  var PooledClass = $__require('./PooledClass');
  var ReactFeatureFlags = $__require('./ReactFeatureFlags');
  var ReactPerf = $__require('./ReactPerf');
  var ReactReconciler = $__require('./ReactReconciler');
  var Transaction = $__require('./Transaction');
  var invariant = $__require('fbjs/lib/invariant');
  var dirtyComponents = [];
  var asapCallbackQueue = CallbackQueue.getPooled();
  var asapEnqueued = false;
  var batchingStrategy = null;
  function ensureInjected() {
    !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : void 0;
  }
  var NESTED_UPDATES = {
    initialize: function() {
      this.dirtyComponentsLength = dirtyComponents.length;
    },
    close: function() {
      if (this.dirtyComponentsLength !== dirtyComponents.length) {
        dirtyComponents.splice(0, this.dirtyComponentsLength);
        flushBatchedUpdates();
      } else {
        dirtyComponents.length = 0;
      }
    }
  };
  var UPDATE_QUEUEING = {
    initialize: function() {
      this.callbackQueue.reset();
    },
    close: function() {
      this.callbackQueue.notifyAll();
    }
  };
  var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
  function ReactUpdatesFlushTransaction() {
    this.reinitializeTransaction();
    this.dirtyComponentsLength = null;
    this.callbackQueue = CallbackQueue.getPooled();
    this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
  }
  _assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    destructor: function() {
      this.dirtyComponentsLength = null;
      CallbackQueue.release(this.callbackQueue);
      this.callbackQueue = null;
      ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
      this.reconcileTransaction = null;
    },
    perform: function(method, scope, a) {
      return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
    }
  });
  PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
  function batchedUpdates(callback, a, b, c, d, e) {
    ensureInjected();
    batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
  }
  function mountOrderComparator(c1, c2) {
    return c1._mountOrder - c2._mountOrder;
  }
  function runBatchedUpdates(transaction) {
    var len = transaction.dirtyComponentsLength;
    !(len === dirtyComponents.length) ? "production" !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : void 0;
    dirtyComponents.sort(mountOrderComparator);
    for (var i = 0; i < len; i++) {
      var component = dirtyComponents[i];
      var callbacks = component._pendingCallbacks;
      component._pendingCallbacks = null;
      var markerName;
      if (ReactFeatureFlags.logTopLevelRenders) {
        var namedComponent = component;
        if (component._currentElement.props === component._renderedComponent._currentElement) {
          namedComponent = component._renderedComponent;
        }
        markerName = 'React update: ' + namedComponent.getName();
        console.time(markerName);
      }
      ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);
      if (markerName) {
        console.timeEnd(markerName);
      }
      if (callbacks) {
        for (var j = 0; j < callbacks.length; j++) {
          transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
        }
      }
    }
  }
  var flushBatchedUpdates = function() {
    while (dirtyComponents.length || asapEnqueued) {
      if (dirtyComponents.length) {
        var transaction = ReactUpdatesFlushTransaction.getPooled();
        transaction.perform(runBatchedUpdates, null, transaction);
        ReactUpdatesFlushTransaction.release(transaction);
      }
      if (asapEnqueued) {
        asapEnqueued = false;
        var queue = asapCallbackQueue;
        asapCallbackQueue = CallbackQueue.getPooled();
        queue.notifyAll();
        CallbackQueue.release(queue);
      }
    }
  };
  flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);
  function enqueueUpdate(component) {
    ensureInjected();
    if (!batchingStrategy.isBatchingUpdates) {
      batchingStrategy.batchedUpdates(enqueueUpdate, component);
      return;
    }
    dirtyComponents.push(component);
  }
  function asap(callback, context) {
    !batchingStrategy.isBatchingUpdates ? "production" !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : void 0;
    asapCallbackQueue.enqueue(callback, context);
    asapEnqueued = true;
  }
  var ReactUpdatesInjection = {
    injectReconcileTransaction: function(ReconcileTransaction) {
      !ReconcileTransaction ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : void 0;
      ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
    },
    injectBatchingStrategy: function(_batchingStrategy) {
      !_batchingStrategy ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : void 0;
      !(typeof _batchingStrategy.batchedUpdates === 'function') ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : void 0;
      !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : void 0;
      batchingStrategy = _batchingStrategy;
    }
  };
  var ReactUpdates = {
    ReactReconcileTransaction: null,
    batchedUpdates: batchedUpdates,
    enqueueUpdate: enqueueUpdate,
    flushBatchedUpdates: flushBatchedUpdates,
    injection: ReactUpdatesInjection,
    asap: asap
  };
  module.exports = ReactUpdates;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactUpdateQueue.js", ["./ReactCurrentOwner", "./ReactInstanceMap", "./ReactUpdates", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var ReactInstanceMap = $__require('./ReactInstanceMap');
  var ReactUpdates = $__require('./ReactUpdates');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  function enqueueUpdate(internalInstance) {
    ReactUpdates.enqueueUpdate(internalInstance);
  }
  function formatUnexpectedArgument(arg) {
    var type = typeof arg;
    if (type !== 'object') {
      return type;
    }
    var displayName = arg.constructor && arg.constructor.name || type;
    var keys = Object.keys(arg);
    if (keys.length > 0 && keys.length < 20) {
      return displayName + ' (keys: ' + keys.join(', ') + ')';
    }
    return displayName;
  }
  function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
    var internalInstance = ReactInstanceMap.get(publicInstance);
    if (!internalInstance) {
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : void 0;
      }
      return null;
    }
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition (such as ' + 'within `render` or another component\'s constructor). Render methods ' + 'should be a pure function of props and state; constructor ' + 'side-effects are an anti-pattern, but can be moved to ' + '`componentWillMount`.', callerName) : void 0;
    }
    return internalInstance;
  }
  var ReactUpdateQueue = {
    isMounted: function(publicInstance) {
      if ("production" !== 'production') {
        var owner = ReactCurrentOwner.current;
        if (owner !== null) {
          "production" !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
          owner._warnedAboutRefsInRender = true;
        }
      }
      var internalInstance = ReactInstanceMap.get(publicInstance);
      if (internalInstance) {
        return !!internalInstance._renderedComponent;
      } else {
        return false;
      }
    },
    enqueueCallback: function(publicInstance, callback, callerName) {
      ReactUpdateQueue.validateCallback(callback, callerName);
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
      if (!internalInstance) {
        return null;
      }
      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
      enqueueUpdate(internalInstance);
    },
    enqueueCallbackInternal: function(internalInstance, callback) {
      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
      enqueueUpdate(internalInstance);
    },
    enqueueForceUpdate: function(publicInstance) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
      if (!internalInstance) {
        return;
      }
      internalInstance._pendingForceUpdate = true;
      enqueueUpdate(internalInstance);
    },
    enqueueReplaceState: function(publicInstance, completeState) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
      if (!internalInstance) {
        return;
      }
      internalInstance._pendingStateQueue = [completeState];
      internalInstance._pendingReplaceState = true;
      enqueueUpdate(internalInstance);
    },
    enqueueSetState: function(publicInstance, partialState) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
      if (!internalInstance) {
        return;
      }
      var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
      queue.push(partialState);
      enqueueUpdate(internalInstance);
    },
    enqueueElementInternal: function(internalInstance, newElement) {
      internalInstance._pendingElement = newElement;
      enqueueUpdate(internalInstance);
    },
    validateCallback: function(callback, callerName) {
      !(!callback || typeof callback === 'function') ? "production" !== 'production' ? invariant(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, formatUnexpectedArgument(callback)) : invariant(false) : void 0;
    }
  };
  module.exports = ReactUpdateQueue;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactCompositeComponent.js", ["object-assign", "./ReactComponentEnvironment", "./ReactCurrentOwner", "./ReactElement", "./ReactErrorUtils", "./ReactInstanceMap", "./ReactInstrumentation", "./ReactNodeTypes", "./ReactPerf", "./ReactPropTypeLocations", "./ReactPropTypeLocationNames", "./ReactReconciler", "./ReactUpdateQueue", "fbjs/lib/emptyObject", "fbjs/lib/invariant", "./shouldUpdateReactComponent", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var ReactComponentEnvironment = $__require('./ReactComponentEnvironment');
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var ReactElement = $__require('./ReactElement');
  var ReactErrorUtils = $__require('./ReactErrorUtils');
  var ReactInstanceMap = $__require('./ReactInstanceMap');
  var ReactInstrumentation = $__require('./ReactInstrumentation');
  var ReactNodeTypes = $__require('./ReactNodeTypes');
  var ReactPerf = $__require('./ReactPerf');
  var ReactPropTypeLocations = $__require('./ReactPropTypeLocations');
  var ReactPropTypeLocationNames = $__require('./ReactPropTypeLocationNames');
  var ReactReconciler = $__require('./ReactReconciler');
  var ReactUpdateQueue = $__require('./ReactUpdateQueue');
  var emptyObject = $__require('fbjs/lib/emptyObject');
  var invariant = $__require('fbjs/lib/invariant');
  var shouldUpdateReactComponent = $__require('./shouldUpdateReactComponent');
  var warning = $__require('fbjs/lib/warning');
  function getDeclarationErrorAddendum(component) {
    var owner = component._currentElement._owner || null;
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  function StatelessComponent(Component) {}
  StatelessComponent.prototype.render = function() {
    var Component = ReactInstanceMap.get(this)._currentElement.type;
    var element = Component(this.props, this.context, this.updater);
    warnIfInvalidElement(Component, element);
    return element;
  };
  function warnIfInvalidElement(Component, element) {
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(element === null || element === false || ReactElement.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : void 0;
    }
  }
  function shouldConstruct(Component) {
    return Component.prototype && Component.prototype.isReactComponent;
  }
  var nextMountID = 1;
  var ReactCompositeComponentMixin = {
    construct: function(element) {
      this._currentElement = element;
      this._rootNodeID = null;
      this._instance = null;
      this._nativeParent = null;
      this._nativeContainerInfo = null;
      this._pendingElement = null;
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;
      this._renderedNodeType = null;
      this._renderedComponent = null;
      this._context = null;
      this._mountOrder = 0;
      this._topLevelWrapper = null;
      this._pendingCallbacks = null;
      this._calledComponentWillUnmount = false;
    },
    mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
      this._context = context;
      this._mountOrder = nextMountID++;
      this._nativeParent = nativeParent;
      this._nativeContainerInfo = nativeContainerInfo;
      var publicProps = this._processProps(this._currentElement.props);
      var publicContext = this._processContext(context);
      var Component = this._currentElement.type;
      var inst = this._constructComponent(publicProps, publicContext);
      var renderedElement;
      if (!shouldConstruct(Component) && (inst == null || inst.render == null)) {
        renderedElement = inst;
        warnIfInvalidElement(Component, renderedElement);
        !(inst === null || inst === false || ReactElement.isValidElement(inst)) ? "production" !== 'production' ? invariant(false, '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : invariant(false) : void 0;
        inst = new StatelessComponent(Component);
      }
      if ("production" !== 'production') {
        if (inst.render == null) {
          "production" !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component') : void 0;
        }
        var propsMutated = inst.props !== publicProps;
        var componentName = Component.displayName || Component.name || 'Component';
        "production" !== 'production' ? warning(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + 'up the same props that your component\'s constructor was passed.', componentName, componentName) : void 0;
      }
      inst.props = publicProps;
      inst.context = publicContext;
      inst.refs = emptyObject;
      inst.updater = ReactUpdateQueue;
      this._instance = inst;
      ReactInstanceMap.set(inst, this);
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : void 0;
        "production" !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : void 0;
        "production" !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : void 0;
        "production" !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : void 0;
        "production" !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : void 0;
        "production" !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : void 0;
        "production" !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : void 0;
      }
      var initialState = inst.state;
      if (initialState === undefined) {
        inst.state = initialState = null;
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? "production" !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : void 0;
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;
      var markup;
      if (inst.unstable_handleError) {
        markup = this.performInitialMountWithErrorHandling(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
      } else {
        markup = this.performInitialMount(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
      }
      if (inst.componentDidMount) {
        transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
      }
      return markup;
    },
    _constructComponent: function(publicProps, publicContext) {
      if ("production" !== 'production') {
        ReactCurrentOwner.current = this;
        try {
          return this._constructComponentWithoutOwner(publicProps, publicContext);
        } finally {
          ReactCurrentOwner.current = null;
        }
      } else {
        return this._constructComponentWithoutOwner(publicProps, publicContext);
      }
    },
    _constructComponentWithoutOwner: function(publicProps, publicContext) {
      var Component = this._currentElement.type;
      if (shouldConstruct(Component)) {
        return new Component(publicProps, publicContext, ReactUpdateQueue);
      } else {
        return Component(publicProps, publicContext, ReactUpdateQueue);
      }
    },
    performInitialMountWithErrorHandling: function(renderedElement, nativeParent, nativeContainerInfo, transaction, context) {
      var markup;
      var checkpoint = transaction.checkpoint();
      try {
        markup = this.performInitialMount(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
      } catch (e) {
        transaction.rollback(checkpoint);
        this._instance.unstable_handleError(e);
        if (this._pendingStateQueue) {
          this._instance.state = this._processPendingState(this._instance.props, this._instance.context);
        }
        checkpoint = transaction.checkpoint();
        this._renderedComponent.unmountComponent(true);
        transaction.rollback(checkpoint);
        markup = this.performInitialMount(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
      }
      return markup;
    },
    performInitialMount: function(renderedElement, nativeParent, nativeContainerInfo, transaction, context) {
      var inst = this._instance;
      if (inst.componentWillMount) {
        inst.componentWillMount();
        if (this._pendingStateQueue) {
          inst.state = this._processPendingState(inst.props, inst.context);
        }
      }
      if (renderedElement === undefined) {
        renderedElement = this._renderValidatedComponent();
      }
      this._renderedNodeType = ReactNodeTypes.getType(renderedElement);
      this._renderedComponent = this._instantiateReactComponent(renderedElement);
      var markup = ReactReconciler.mountComponent(this._renderedComponent, transaction, nativeParent, nativeContainerInfo, this._processChildContext(context));
      return markup;
    },
    getNativeNode: function() {
      return ReactReconciler.getNativeNode(this._renderedComponent);
    },
    unmountComponent: function(safely) {
      if (!this._renderedComponent) {
        return;
      }
      var inst = this._instance;
      if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
        inst._calledComponentWillUnmount = true;
        if (safely) {
          var name = this.getName() + '.componentWillUnmount()';
          ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
        } else {
          inst.componentWillUnmount();
        }
      }
      if (this._renderedComponent) {
        ReactReconciler.unmountComponent(this._renderedComponent, safely);
        this._renderedNodeType = null;
        this._renderedComponent = null;
        this._instance = null;
      }
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;
      this._pendingCallbacks = null;
      this._pendingElement = null;
      this._context = null;
      this._rootNodeID = null;
      this._topLevelWrapper = null;
      ReactInstanceMap.remove(inst);
    },
    _maskContext: function(context) {
      var Component = this._currentElement.type;
      var contextTypes = Component.contextTypes;
      if (!contextTypes) {
        return emptyObject;
      }
      var maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      return maskedContext;
    },
    _processContext: function(context) {
      var maskedContext = this._maskContext(context);
      if ("production" !== 'production') {
        var Component = this._currentElement.type;
        if (Component.contextTypes) {
          this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
        }
      }
      return maskedContext;
    },
    _processChildContext: function(currentContext) {
      var Component = this._currentElement.type;
      var inst = this._instance;
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onBeginProcessingChildContext();
      }
      var childContext = inst.getChildContext && inst.getChildContext();
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onEndProcessingChildContext();
      }
      if (childContext) {
        !(typeof Component.childContextTypes === 'object') ? "production" !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : void 0;
        if ("production" !== 'production') {
          this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
        }
        for (var name in childContext) {
          !(name in Component.childContextTypes) ? "production" !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : void 0;
        }
        return _assign({}, currentContext, childContext);
      }
      return currentContext;
    },
    _processProps: function(newProps) {
      if ("production" !== 'production') {
        var Component = this._currentElement.type;
        if (Component.propTypes) {
          this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
        }
      }
      return newProps;
    },
    _checkPropTypes: function(propTypes, props, location) {
      var componentName = this.getName();
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error;
          try {
            !(typeof propTypes[propName] === 'function') ? "production" !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
            error = propTypes[propName](props, propName, componentName, location);
          } catch (ex) {
            error = ex;
          }
          if (error instanceof Error) {
            var addendum = getDeclarationErrorAddendum(this);
            if (location === ReactPropTypeLocations.prop) {
              "production" !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : void 0;
            } else {
              "production" !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : void 0;
            }
          }
        }
      }
    },
    receiveComponent: function(nextElement, transaction, nextContext) {
      var prevElement = this._currentElement;
      var prevContext = this._context;
      this._pendingElement = null;
      this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
    },
    performUpdateIfNecessary: function(transaction) {
      if (this._pendingElement != null) {
        ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
      }
      if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
        this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
      }
    },
    updateComponent: function(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
      var inst = this._instance;
      var willReceive = false;
      var nextContext;
      var nextProps;
      if (this._context === nextUnmaskedContext) {
        nextContext = inst.context;
      } else {
        nextContext = this._processContext(nextUnmaskedContext);
        willReceive = true;
      }
      if (prevParentElement === nextParentElement) {
        nextProps = nextParentElement.props;
      } else {
        nextProps = this._processProps(nextParentElement.props);
        willReceive = true;
      }
      if (willReceive && inst.componentWillReceiveProps) {
        inst.componentWillReceiveProps(nextProps, nextContext);
      }
      var nextState = this._processPendingState(nextProps, nextContext);
      var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : void 0;
      }
      if (shouldUpdate) {
        this._pendingForceUpdate = false;
        this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
      } else {
        this._currentElement = nextParentElement;
        this._context = nextUnmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
      }
    },
    _processPendingState: function(props, context) {
      var inst = this._instance;
      var queue = this._pendingStateQueue;
      var replace = this._pendingReplaceState;
      this._pendingReplaceState = false;
      this._pendingStateQueue = null;
      if (!queue) {
        return inst.state;
      }
      if (replace && queue.length === 1) {
        return queue[0];
      }
      var nextState = _assign({}, replace ? queue[0] : inst.state);
      for (var i = replace ? 1 : 0; i < queue.length; i++) {
        var partial = queue[i];
        _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
      }
      return nextState;
    },
    _performComponentUpdate: function(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
      var inst = this._instance;
      var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
      var prevProps;
      var prevState;
      var prevContext;
      if (hasComponentDidUpdate) {
        prevProps = inst.props;
        prevState = inst.state;
        prevContext = inst.context;
      }
      if (inst.componentWillUpdate) {
        inst.componentWillUpdate(nextProps, nextState, nextContext);
      }
      this._currentElement = nextElement;
      this._context = unmaskedContext;
      inst.props = nextProps;
      inst.state = nextState;
      inst.context = nextContext;
      this._updateRenderedComponent(transaction, unmaskedContext);
      if (hasComponentDidUpdate) {
        transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
      }
    },
    _updateRenderedComponent: function(transaction, context) {
      var prevComponentInstance = this._renderedComponent;
      var prevRenderedElement = prevComponentInstance._currentElement;
      var nextRenderedElement = this._renderValidatedComponent();
      if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
        ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
      } else {
        var oldNativeNode = ReactReconciler.getNativeNode(prevComponentInstance);
        ReactReconciler.unmountComponent(prevComponentInstance, false);
        this._renderedNodeType = ReactNodeTypes.getType(nextRenderedElement);
        this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
        var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, transaction, this._nativeParent, this._nativeContainerInfo, this._processChildContext(context));
        this._replaceNodeWithMarkup(oldNativeNode, nextMarkup);
      }
    },
    _replaceNodeWithMarkup: function(oldNativeNode, nextMarkup) {
      ReactComponentEnvironment.replaceNodeWithMarkup(oldNativeNode, nextMarkup);
    },
    _renderValidatedComponentWithoutOwnerOrContext: function() {
      var inst = this._instance;
      var renderedComponent = inst.render();
      if ("production" !== 'production') {
        if (renderedComponent === undefined && inst.render._isMockFunction) {
          renderedComponent = null;
        }
      }
      return renderedComponent;
    },
    _renderValidatedComponent: function() {
      var renderedComponent;
      ReactCurrentOwner.current = this;
      try {
        renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
      } finally {
        ReactCurrentOwner.current = null;
      }
      !(renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? "production" !== 'production' ? invariant(false, '%s.render(): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : void 0;
      return renderedComponent;
    },
    attachRef: function(ref, component) {
      var inst = this.getPublicInstance();
      !(inst != null) ? "production" !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : void 0;
      var publicComponentInstance = component.getPublicInstance();
      if ("production" !== 'production') {
        var componentName = component && component.getName ? component.getName() : 'a component';
        "production" !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : void 0;
      }
      var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
      refs[ref] = publicComponentInstance;
    },
    detachRef: function(ref) {
      var refs = this.getPublicInstance().refs;
      delete refs[ref];
    },
    getName: function() {
      var type = this._currentElement.type;
      var constructor = this._instance && this._instance.constructor;
      return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
    },
    getPublicInstance: function() {
      var inst = this._instance;
      if (inst instanceof StatelessComponent) {
        return null;
      }
      return inst;
    },
    _instantiateReactComponent: null
  };
  ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
    mountComponent: 'mountComponent',
    updateComponent: 'updateComponent',
    _renderValidatedComponent: '_renderValidatedComponent'
  });
  var ReactCompositeComponent = {Mixin: ReactCompositeComponentMixin};
  module.exports = ReactCompositeComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactEmptyComponent.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var emptyComponentFactory;
  var ReactEmptyComponentInjection = {injectEmptyComponentFactory: function(factory) {
      emptyComponentFactory = factory;
    }};
  var ReactEmptyComponent = {create: function(instantiate) {
      return emptyComponentFactory(instantiate);
    }};
  ReactEmptyComponent.injection = ReactEmptyComponentInjection;
  module.exports = ReactEmptyComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactNativeComponent.js", ["object-assign", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var invariant = $__require('fbjs/lib/invariant');
  var autoGenerateWrapperClass = null;
  var genericComponentClass = null;
  var tagToComponentClass = {};
  var textComponentClass = null;
  var ReactNativeComponentInjection = {
    injectGenericComponentClass: function(componentClass) {
      genericComponentClass = componentClass;
    },
    injectTextComponentClass: function(componentClass) {
      textComponentClass = componentClass;
    },
    injectComponentClasses: function(componentClasses) {
      _assign(tagToComponentClass, componentClasses);
    }
  };
  function getComponentClassForElement(element) {
    if (typeof element.type === 'function') {
      return element.type;
    }
    var tag = element.type;
    var componentClass = tagToComponentClass[tag];
    if (componentClass == null) {
      tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
    }
    return componentClass;
  }
  function createInternalComponent(element) {
    !genericComponentClass ? "production" !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : void 0;
    return new genericComponentClass(element);
  }
  function createInstanceForText(text) {
    return new textComponentClass(text);
  }
  function isTextComponent(component) {
    return component instanceof textComponentClass;
  }
  var ReactNativeComponent = {
    getComponentClassForElement: getComponentClassForElement,
    createInternalComponent: createInternalComponent,
    createInstanceForText: createInstanceForText,
    isTextComponent: isTextComponent,
    injection: ReactNativeComponentInjection
  };
  module.exports = ReactNativeComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/instantiateReactComponent.js", ["object-assign", "./ReactCompositeComponent", "./ReactEmptyComponent", "./ReactNativeComponent", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var ReactCompositeComponent = $__require('./ReactCompositeComponent');
  var ReactEmptyComponent = $__require('./ReactEmptyComponent');
  var ReactNativeComponent = $__require('./ReactNativeComponent');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  var ReactCompositeComponentWrapper = function(element) {
    this.construct(element);
  };
  _assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {_instantiateReactComponent: instantiateReactComponent});
  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  function isInternalComponentType(type) {
    return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
  }
  function instantiateReactComponent(node) {
    var instance;
    if (node === null || node === false) {
      instance = ReactEmptyComponent.create(instantiateReactComponent);
    } else if (typeof node === 'object') {
      var element = node;
      !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? "production" !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : void 0;
      if (typeof element.type === 'string') {
        instance = ReactNativeComponent.createInternalComponent(element);
      } else if (isInternalComponentType(element.type)) {
        instance = new element.type(element);
      } else {
        instance = new ReactCompositeComponentWrapper(element);
      }
    } else if (typeof node === 'string' || typeof node === 'number') {
      instance = ReactNativeComponent.createInstanceForText(node);
    } else {
      !false ? "production" !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : void 0;
    }
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getNativeNode === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : void 0;
    }
    instance._mountIndex = 0;
    instance._mountImage = null;
    if ("production" !== 'production') {
      instance._isOwnerNecessary = false;
      instance._warnedAboutRefsInRender = false;
    }
    if ("production" !== 'production') {
      if (Object.preventExtensions) {
        Object.preventExtensions(instance);
      }
    }
    return instance;
  }
  module.exports = instantiateReactComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/createMicrosoftUnsafeLocalFunction.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var createMicrosoftUnsafeLocalFunction = function(func) {
    if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
      return function(arg0, arg1, arg2, arg3) {
        MSApp.execUnsafeLocalFunction(function() {
          return func(arg0, arg1, arg2, arg3);
        });
      };
    } else {
      return func;
    }
  };
  module.exports = createMicrosoftUnsafeLocalFunction;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/setInnerHTML.js", ["fbjs/lib/ExecutionEnvironment", "./createMicrosoftUnsafeLocalFunction", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
  var WHITESPACE_TEST = /^[ \r\n\t\f]/;
  var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
  var createMicrosoftUnsafeLocalFunction = $__require('./createMicrosoftUnsafeLocalFunction');
  var setInnerHTML = createMicrosoftUnsafeLocalFunction(function(node, html) {
    node.innerHTML = html;
  });
  if (ExecutionEnvironment.canUseDOM) {
    var testElement = document.createElement('div');
    testElement.innerHTML = ' ';
    if (testElement.innerHTML === '') {
      setInnerHTML = function(node, html) {
        if (node.parentNode) {
          node.parentNode.replaceChild(node, node);
        }
        if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
          node.innerHTML = String.fromCharCode(0xFEFF) + html;
          var textNode = node.firstChild;
          if (textNode.data.length === 1) {
            node.removeChild(textNode);
          } else {
            textNode.deleteData(0, 1);
          }
        } else {
          node.innerHTML = html;
        }
      };
    }
    testElement = null;
  }
  module.exports = setInnerHTML;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/shouldUpdateReactComponent.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function shouldUpdateReactComponent(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    if (prevEmpty || nextEmpty) {
      return prevEmpty === nextEmpty;
    }
    var prevType = typeof prevElement;
    var nextType = typeof nextElement;
    if (prevType === 'string' || prevType === 'number') {
      return nextType === 'string' || nextType === 'number';
    } else {
      return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
    }
  }
  module.exports = shouldUpdateReactComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactMount.js", ["./DOMLazyTree", "./DOMProperty", "./ReactBrowserEventEmitter", "./ReactCurrentOwner", "./ReactDOMComponentTree", "./ReactDOMContainerInfo", "./ReactDOMFeatureFlags", "./ReactElement", "./ReactFeatureFlags", "./ReactInstrumentation", "./ReactMarkupChecksum", "./ReactPerf", "./ReactReconciler", "./ReactUpdateQueue", "./ReactUpdates", "fbjs/lib/emptyObject", "./instantiateReactComponent", "fbjs/lib/invariant", "./setInnerHTML", "./shouldUpdateReactComponent", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var DOMLazyTree = $__require('./DOMLazyTree');
  var DOMProperty = $__require('./DOMProperty');
  var ReactBrowserEventEmitter = $__require('./ReactBrowserEventEmitter');
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactDOMContainerInfo = $__require('./ReactDOMContainerInfo');
  var ReactDOMFeatureFlags = $__require('./ReactDOMFeatureFlags');
  var ReactElement = $__require('./ReactElement');
  var ReactFeatureFlags = $__require('./ReactFeatureFlags');
  var ReactInstrumentation = $__require('./ReactInstrumentation');
  var ReactMarkupChecksum = $__require('./ReactMarkupChecksum');
  var ReactPerf = $__require('./ReactPerf');
  var ReactReconciler = $__require('./ReactReconciler');
  var ReactUpdateQueue = $__require('./ReactUpdateQueue');
  var ReactUpdates = $__require('./ReactUpdates');
  var emptyObject = $__require('fbjs/lib/emptyObject');
  var instantiateReactComponent = $__require('./instantiateReactComponent');
  var invariant = $__require('fbjs/lib/invariant');
  var setInnerHTML = $__require('./setInnerHTML');
  var shouldUpdateReactComponent = $__require('./shouldUpdateReactComponent');
  var warning = $__require('fbjs/lib/warning');
  var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
  var ROOT_ATTR_NAME = DOMProperty.ROOT_ATTRIBUTE_NAME;
  var ELEMENT_NODE_TYPE = 1;
  var DOC_NODE_TYPE = 9;
  var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
  var instancesByReactRootID = {};
  function firstDifferenceIndex(string1, string2) {
    var minLen = Math.min(string1.length, string2.length);
    for (var i = 0; i < minLen; i++) {
      if (string1.charAt(i) !== string2.charAt(i)) {
        return i;
      }
    }
    return string1.length === string2.length ? -1 : minLen;
  }
  function getReactRootElementInContainer(container) {
    if (!container) {
      return null;
    }
    if (container.nodeType === DOC_NODE_TYPE) {
      return container.documentElement;
    } else {
      return container.firstChild;
    }
  }
  function internalGetID(node) {
    return node.getAttribute && node.getAttribute(ATTR_NAME) || '';
  }
  function mountComponentIntoNode(wrapperInstance, container, transaction, shouldReuseMarkup, context) {
    var markerName;
    if (ReactFeatureFlags.logTopLevelRenders) {
      var wrappedElement = wrapperInstance._currentElement.props;
      var type = wrappedElement.type;
      markerName = 'React mount: ' + (typeof type === 'string' ? type : type.displayName || type.name);
      console.time(markerName);
    }
    var markup = ReactReconciler.mountComponent(wrapperInstance, transaction, null, ReactDOMContainerInfo(wrapperInstance, container), context);
    if (markerName) {
      console.timeEnd(markerName);
    }
    wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
    ReactMount._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
  }
  function batchedMountComponentIntoNode(componentInstance, container, shouldReuseMarkup, context) {
    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(!shouldReuseMarkup && ReactDOMFeatureFlags.useCreateElement);
    transaction.perform(mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
    ReactUpdates.ReactReconcileTransaction.release(transaction);
  }
  function unmountComponentFromNode(instance, container, safely) {
    ReactReconciler.unmountComponent(instance, safely);
    if (container.nodeType === DOC_NODE_TYPE) {
      container = container.documentElement;
    }
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }
  function hasNonRootReactChild(container) {
    var rootEl = getReactRootElementInContainer(container);
    if (rootEl) {
      var inst = ReactDOMComponentTree.getInstanceFromNode(rootEl);
      return !!(inst && inst._nativeParent);
    }
  }
  function getNativeRootInstanceInContainer(container) {
    var rootEl = getReactRootElementInContainer(container);
    var prevNativeInstance = rootEl && ReactDOMComponentTree.getInstanceFromNode(rootEl);
    return prevNativeInstance && !prevNativeInstance._nativeParent ? prevNativeInstance : null;
  }
  function getTopLevelWrapperInContainer(container) {
    var root = getNativeRootInstanceInContainer(container);
    return root ? root._nativeContainerInfo._topLevelWrapper : null;
  }
  var topLevelRootCounter = 1;
  var TopLevelWrapper = function() {
    this.rootID = topLevelRootCounter++;
  };
  TopLevelWrapper.prototype.isReactComponent = {};
  if ("production" !== 'production') {
    TopLevelWrapper.displayName = 'TopLevelWrapper';
  }
  TopLevelWrapper.prototype.render = function() {
    return this.props;
  };
  var ReactMount = {
    TopLevelWrapper: TopLevelWrapper,
    _instancesByReactRootID: instancesByReactRootID,
    scrollMonitor: function(container, renderCallback) {
      renderCallback();
    },
    _updateRootComponent: function(prevComponent, nextElement, container, callback) {
      ReactMount.scrollMonitor(container, function() {
        ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
        if (callback) {
          ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
        }
      });
      return prevComponent;
    },
    _renderNewRootComponent: function(nextElement, container, shouldReuseMarkup, context) {
      "production" !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
      !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? "production" !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : void 0;
      ReactBrowserEventEmitter.ensureScrollValueMonitoring();
      var componentInstance = instantiateReactComponent(nextElement);
      ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);
      var wrapperID = componentInstance._instance.rootID;
      instancesByReactRootID[wrapperID] = componentInstance;
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onMountRootComponent(componentInstance);
      }
      return componentInstance;
    },
    renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
      !(parentComponent != null && parentComponent._reactInternalInstance != null) ? "production" !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : void 0;
      return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
    },
    _renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
      ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
      !ReactElement.isValidElement(nextElement) ? "production" !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : void 0;
      "production" !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;
      var nextWrappedElement = ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);
      var prevComponent = getTopLevelWrapperInContainer(container);
      if (prevComponent) {
        var prevWrappedElement = prevComponent._currentElement;
        var prevElement = prevWrappedElement.props;
        if (shouldUpdateReactComponent(prevElement, nextElement)) {
          var publicInst = prevComponent._renderedComponent.getPublicInstance();
          var updatedCallback = callback && function() {
            callback.call(publicInst);
          };
          ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
          return publicInst;
        } else {
          ReactMount.unmountComponentAtNode(container);
        }
      }
      var reactRootElement = getReactRootElementInContainer(container);
      var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
      var containerHasNonRootReactChild = hasNonRootReactChild(container);
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;
        if (!containerHasReactMarkup || reactRootElement.nextSibling) {
          var rootElementSibling = reactRootElement;
          while (rootElementSibling) {
            if (internalGetID(rootElementSibling)) {
              "production" !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : void 0;
              break;
            }
            rootElementSibling = rootElementSibling.nextSibling;
          }
        }
      }
      var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
      var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
      if (callback) {
        callback.call(component);
      }
      return component;
    },
    render: function(nextElement, container, callback) {
      return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
    },
    unmountComponentAtNode: function(container) {
      "production" !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
      !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? "production" !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : void 0;
      var prevComponent = getTopLevelWrapperInContainer(container);
      if (!prevComponent) {
        var containerHasNonRootReactChild = hasNonRootReactChild(container);
        var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(ROOT_ATTR_NAME);
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
        }
        return false;
      }
      delete instancesByReactRootID[prevComponent._instance.rootID];
      ReactUpdates.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);
      return true;
    },
    _mountImageIntoNode: function(markup, container, instance, shouldReuseMarkup, transaction) {
      !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? "production" !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : void 0;
      if (shouldReuseMarkup) {
        var rootElement = getReactRootElementInContainer(container);
        if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
          ReactDOMComponentTree.precacheNode(instance, rootElement);
          return;
        } else {
          var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
          rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
          var rootMarkup = rootElement.outerHTML;
          rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
          var normalizedMarkup = markup;
          if ("production" !== 'production') {
            var normalizer;
            if (container.nodeType === ELEMENT_NODE_TYPE) {
              normalizer = document.createElement('div');
              normalizer.innerHTML = markup;
              normalizedMarkup = normalizer.innerHTML;
            } else {
              normalizer = document.createElement('iframe');
              document.body.appendChild(normalizer);
              normalizer.contentDocument.write(markup);
              normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
              document.body.removeChild(normalizer);
            }
          }
          var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
          var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
          !(container.nodeType !== DOC_NODE_TYPE) ? "production" !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : void 0;
          if ("production" !== 'production') {
            "production" !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : void 0;
          }
        }
      }
      !(container.nodeType !== DOC_NODE_TYPE) ? "production" !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : void 0;
      if (transaction.useCreateElement) {
        while (container.lastChild) {
          container.removeChild(container.lastChild);
        }
        DOMLazyTree.insertTreeBefore(container, markup, null);
      } else {
        setInnerHTML(container, markup);
        ReactDOMComponentTree.precacheNode(instance, container.firstChild);
      }
    }
  };
  ReactPerf.measureMethods(ReactMount, 'ReactMount', {
    _renderNewRootComponent: '_renderNewRootComponent',
    _mountImageIntoNode: '_mountImageIntoNode'
  });
  module.exports = ReactMount;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/renderSubtreeIntoContainer.js", ["./ReactMount", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactMount = $__require('./ReactMount');
  module.exports = ReactMount.renderSubtreeIntoContainer;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/ExecutionEnvironment.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM
  };
  module.exports = ExecutionEnvironment;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOM.js", ["./ReactDOMComponentTree", "./ReactDefaultInjection", "./ReactMount", "./ReactPerf", "./ReactReconciler", "./ReactUpdates", "./ReactVersion", "./findDOMNode", "./getNativeComponentFromComposite", "./renderSubtreeIntoContainer", "fbjs/lib/warning", "fbjs/lib/ExecutionEnvironment", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMComponentTree = $__require('./ReactDOMComponentTree');
  var ReactDefaultInjection = $__require('./ReactDefaultInjection');
  var ReactMount = $__require('./ReactMount');
  var ReactPerf = $__require('./ReactPerf');
  var ReactReconciler = $__require('./ReactReconciler');
  var ReactUpdates = $__require('./ReactUpdates');
  var ReactVersion = $__require('./ReactVersion');
  var findDOMNode = $__require('./findDOMNode');
  var getNativeComponentFromComposite = $__require('./getNativeComponentFromComposite');
  var renderSubtreeIntoContainer = $__require('./renderSubtreeIntoContainer');
  var warning = $__require('fbjs/lib/warning');
  ReactDefaultInjection.inject();
  var render = ReactPerf.measure('React', 'render', ReactMount.render);
  var React = {
    findDOMNode: findDOMNode,
    render: render,
    unmountComponentAtNode: ReactMount.unmountComponentAtNode,
    version: ReactVersion,
    unstable_batchedUpdates: ReactUpdates.batchedUpdates,
    unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
      ComponentTree: {
        getClosestInstanceFromNode: ReactDOMComponentTree.getClosestInstanceFromNode,
        getNodeFromInstance: function(inst) {
          if (inst._renderedComponent) {
            inst = getNativeComponentFromComposite(inst);
          }
          if (inst) {
            return ReactDOMComponentTree.getNodeFromInstance(inst);
          } else {
            return null;
          }
        }
      },
      Mount: ReactMount,
      Reconciler: ReactReconciler
    });
  }
  if ("production" !== 'production') {
    var ExecutionEnvironment = $__require('fbjs/lib/ExecutionEnvironment');
    if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
        if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
          var showFileUrlMessage = window.location.protocol.indexOf('http') === -1 && navigator.userAgent.indexOf('Firefox') === -1;
          console.debug('Download the React DevTools ' + (showFileUrlMessage ? 'and use an HTTP server (instead of a file: URL) ' : '') + 'for a better development experience: ' + 'https://fb.me/react-devtools');
        }
      }
      var testFunc = function testFn() {};
      "production" !== 'production' ? warning((testFunc.name || testFunc.toString()).indexOf('testFn') !== -1, 'It looks like you\'re using a minified copy of the development build ' + 'of React. When deploying React apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See https://fb.me/react-minification for more details.') : void 0;
      var ieCompatibilityMode = document.documentMode && document.documentMode < 8;
      "production" !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;
      var expectedFeatures = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim];
      for (var i = 0; i < expectedFeatures.length; i++) {
        if (!expectedFeatures[i]) {
          "production" !== 'production' ? warning(false, 'One or more ES5 shims expected by React are not available: ' + 'https://fb.me/react-warning-polyfills') : void 0;
          break;
        }
      }
    }
  }
  module.exports = React;
  return module.exports;
});

System.registerDynamic("npm:react-dom@15.0.2.json", [], false, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic("npm:react-dom@15.0.2/index.js", ["react/lib/ReactDOM"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('react/lib/ReactDOM');
  return module.exports;
});

System.registerDynamic("npm:react-input-autosize@0.6.13.json", [], false, function() {
  return {
    "main": "lib/AutosizeInput.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      },
      "dist/react-input-autosize.js": {
        "cjsRequireDetection": false
      }
    }
  };
});

System.registerDynamic("npm:react-input-autosize@0.6.13/lib/AutosizeInput.js", ["react"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var React = $__require('react');
  var sizerStyle = {
    position: 'absolute',
    visibility: 'hidden',
    height: 0,
    width: 0,
    overflow: 'scroll',
    whiteSpace: 'pre'
  };
  var nextFrame = typeof window !== 'undefined' ? (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })().bind(window) : undefined;
  var AutosizeInput = React.createClass({
    displayName: 'AutosizeInput',
    propTypes: {
      value: React.PropTypes.any,
      defaultValue: React.PropTypes.any,
      onChange: React.PropTypes.func,
      style: React.PropTypes.object,
      className: React.PropTypes.string,
      minWidth: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
      inputStyle: React.PropTypes.object,
      inputClassName: React.PropTypes.string
    },
    getDefaultProps: function getDefaultProps() {
      return {minWidth: 1};
    },
    getInitialState: function getInitialState() {
      return {inputWidth: this.props.minWidth};
    },
    componentDidMount: function componentDidMount() {
      this.copyInputStyles();
      this.updateInputWidth();
    },
    componentDidUpdate: function componentDidUpdate() {
      this.updateInputWidth();
    },
    copyInputStyles: function copyInputStyles() {
      if (!this.isMounted() || !window.getComputedStyle) {
        return;
      }
      var inputStyle = window.getComputedStyle(this.refs.input);
      if (!inputStyle) {
        return;
      }
      var widthNode = this.refs.sizer;
      widthNode.style.fontSize = inputStyle.fontSize;
      widthNode.style.fontFamily = inputStyle.fontFamily;
      widthNode.style.fontWeight = inputStyle.fontWeight;
      widthNode.style.fontStyle = inputStyle.fontStyle;
      widthNode.style.letterSpacing = inputStyle.letterSpacing;
      if (this.props.placeholder) {
        var placeholderNode = this.refs.placeholderSizer;
        placeholderNode.style.fontSize = inputStyle.fontSize;
        placeholderNode.style.fontFamily = inputStyle.fontFamily;
        placeholderNode.style.fontWeight = inputStyle.fontWeight;
        placeholderNode.style.fontStyle = inputStyle.fontStyle;
        placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
      }
    },
    updateInputWidth: function updateInputWidth() {
      if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
        return;
      }
      var newInputWidth = undefined;
      if (this.props.placeholder) {
        newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
      } else {
        newInputWidth = this.refs.sizer.scrollWidth + 2;
      }
      if (newInputWidth < this.props.minWidth) {
        newInputWidth = this.props.minWidth;
      }
      if (newInputWidth !== this.state.inputWidth) {
        this.setState({inputWidth: newInputWidth});
      }
    },
    getInput: function getInput() {
      return this.refs.input;
    },
    focus: function focus() {
      this.refs.input.focus();
    },
    blur: function blur() {
      this.refs.input.blur();
    },
    select: function select() {
      this.refs.input.select();
    },
    render: function render() {
      var sizerValue = this.props.defaultValue || this.props.value || '';
      var wrapperStyle = this.props.style || {};
      if (!wrapperStyle.display)
        wrapperStyle.display = 'inline-block';
      var inputStyle = _extends({}, this.props.inputStyle);
      inputStyle.width = this.state.inputWidth + 'px';
      inputStyle.boxSizing = 'content-box';
      var placeholder = this.props.placeholder ? React.createElement('div', {
        ref: 'placeholderSizer',
        style: sizerStyle
      }, this.props.placeholder) : null;
      return React.createElement('div', {
        className: this.props.className,
        style: wrapperStyle
      }, React.createElement('input', _extends({}, this.props, {
        ref: 'input',
        className: this.props.inputClassName,
        style: inputStyle
      })), React.createElement('div', {
        ref: 'sizer',
        style: sizerStyle
      }, sizerValue), placeholder);
    }
  });
  module.exports = AutosizeInput;
  return module.exports;
});

System.registerDynamic("npm:react-select@1.0.0-beta13/lib/utils/stripDiacritics.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var map = [{
    'base': 'A',
    'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
  }, {
    'base': 'AA',
    'letters': /[\uA732]/g
  }, {
    'base': 'AE',
    'letters': /[\u00C6\u01FC\u01E2]/g
  }, {
    'base': 'AO',
    'letters': /[\uA734]/g
  }, {
    'base': 'AU',
    'letters': /[\uA736]/g
  }, {
    'base': 'AV',
    'letters': /[\uA738\uA73A]/g
  }, {
    'base': 'AY',
    'letters': /[\uA73C]/g
  }, {
    'base': 'B',
    'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
  }, {
    'base': 'C',
    'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
  }, {
    'base': 'D',
    'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
  }, {
    'base': 'DZ',
    'letters': /[\u01F1\u01C4]/g
  }, {
    'base': 'Dz',
    'letters': /[\u01F2\u01C5]/g
  }, {
    'base': 'E',
    'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
  }, {
    'base': 'F',
    'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
  }, {
    'base': 'G',
    'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
  }, {
    'base': 'H',
    'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
  }, {
    'base': 'I',
    'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
  }, {
    'base': 'J',
    'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g
  }, {
    'base': 'K',
    'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
  }, {
    'base': 'L',
    'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
  }, {
    'base': 'LJ',
    'letters': /[\u01C7]/g
  }, {
    'base': 'Lj',
    'letters': /[\u01C8]/g
  }, {
    'base': 'M',
    'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
  }, {
    'base': 'N',
    'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
  }, {
    'base': 'NJ',
    'letters': /[\u01CA]/g
  }, {
    'base': 'Nj',
    'letters': /[\u01CB]/g
  }, {
    'base': 'O',
    'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
  }, {
    'base': 'OI',
    'letters': /[\u01A2]/g
  }, {
    'base': 'OO',
    'letters': /[\uA74E]/g
  }, {
    'base': 'OU',
    'letters': /[\u0222]/g
  }, {
    'base': 'P',
    'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
  }, {
    'base': 'Q',
    'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
  }, {
    'base': 'R',
    'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
  }, {
    'base': 'S',
    'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
  }, {
    'base': 'T',
    'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
  }, {
    'base': 'TZ',
    'letters': /[\uA728]/g
  }, {
    'base': 'U',
    'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
  }, {
    'base': 'V',
    'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
  }, {
    'base': 'VY',
    'letters': /[\uA760]/g
  }, {
    'base': 'W',
    'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
  }, {
    'base': 'X',
    'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
  }, {
    'base': 'Y',
    'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
  }, {
    'base': 'Z',
    'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
  }, {
    'base': 'a',
    'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
  }, {
    'base': 'aa',
    'letters': /[\uA733]/g
  }, {
    'base': 'ae',
    'letters': /[\u00E6\u01FD\u01E3]/g
  }, {
    'base': 'ao',
    'letters': /[\uA735]/g
  }, {
    'base': 'au',
    'letters': /[\uA737]/g
  }, {
    'base': 'av',
    'letters': /[\uA739\uA73B]/g
  }, {
    'base': 'ay',
    'letters': /[\uA73D]/g
  }, {
    'base': 'b',
    'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
  }, {
    'base': 'c',
    'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
  }, {
    'base': 'd',
    'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
  }, {
    'base': 'dz',
    'letters': /[\u01F3\u01C6]/g
  }, {
    'base': 'e',
    'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
  }, {
    'base': 'f',
    'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
  }, {
    'base': 'g',
    'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
  }, {
    'base': 'h',
    'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
  }, {
    'base': 'hv',
    'letters': /[\u0195]/g
  }, {
    'base': 'i',
    'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
  }, {
    'base': 'j',
    'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
  }, {
    'base': 'k',
    'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
  }, {
    'base': 'l',
    'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
  }, {
    'base': 'lj',
    'letters': /[\u01C9]/g
  }, {
    'base': 'm',
    'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
  }, {
    'base': 'n',
    'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
  }, {
    'base': 'nj',
    'letters': /[\u01CC]/g
  }, {
    'base': 'o',
    'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
  }, {
    'base': 'oi',
    'letters': /[\u01A3]/g
  }, {
    'base': 'ou',
    'letters': /[\u0223]/g
  }, {
    'base': 'oo',
    'letters': /[\uA74F]/g
  }, {
    'base': 'p',
    'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
  }, {
    'base': 'q',
    'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
  }, {
    'base': 'r',
    'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
  }, {
    'base': 's',
    'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
  }, {
    'base': 't',
    'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
  }, {
    'base': 'tz',
    'letters': /[\uA729]/g
  }, {
    'base': 'u',
    'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
  }, {
    'base': 'v',
    'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
  }, {
    'base': 'vy',
    'letters': /[\uA761]/g
  }, {
    'base': 'w',
    'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
  }, {
    'base': 'x',
    'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
  }, {
    'base': 'y',
    'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
  }, {
    'base': 'z',
    'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
  }];
  module.exports = function stripDiacritics(str) {
    for (var i = 0; i < map.length; i++) {
      str = str.replace(map[i].letters, map[i].base);
    }
    return str;
  };
  return module.exports;
});

System.registerDynamic("npm:react-select@1.0.0-beta13/lib/Async.js", ["react", "./Select", "./utils/stripDiacritics"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _react = $__require('react');
  var _react2 = _interopRequireDefault(_react);
  var _Select = $__require('./Select');
  var _Select2 = _interopRequireDefault(_Select);
  var _utilsStripDiacritics = $__require('./utils/stripDiacritics');
  var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);
  var requestId = 0;
  function initCache(cache) {
    if (cache && typeof cache !== 'object') {
      cache = {};
    }
    return cache ? cache : null;
  }
  function updateCache(cache, input, data) {
    if (!cache)
      return;
    cache[input] = data;
  }
  function getFromCache(cache, input) {
    if (!cache)
      return;
    for (var i = input.length; i >= 0; --i) {
      var cacheKey = input.slice(0, i);
      if (cache[cacheKey] && (input === cacheKey || cache[cacheKey].complete)) {
        return cache[cacheKey];
      }
    }
  }
  function thenPromise(promise, callback) {
    if (!promise || typeof promise.then !== 'function')
      return;
    return promise.then(function(data) {
      callback(null, data);
    }, function(err) {
      callback(err);
    });
  }
  var stringOrNode = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]);
  var Async = _react2['default'].createClass({
    displayName: 'Async',
    propTypes: {
      cache: _react2['default'].PropTypes.any,
      ignoreAccents: _react2['default'].PropTypes.bool,
      ignoreCase: _react2['default'].PropTypes.bool,
      isLoading: _react2['default'].PropTypes.bool,
      loadOptions: _react2['default'].PropTypes.func.isRequired,
      loadingPlaceholder: _react2['default'].PropTypes.string,
      minimumInput: _react2['default'].PropTypes.number,
      noResultsText: stringOrNode,
      onInputChange: _react2['default'].PropTypes.func,
      placeholder: stringOrNode,
      searchPromptText: _react2['default'].PropTypes.string,
      searchingText: _react2['default'].PropTypes.string
    },
    getDefaultProps: function getDefaultProps() {
      return {
        cache: true,
        ignoreAccents: true,
        ignoreCase: true,
        loadingPlaceholder: 'Loading...',
        minimumInput: 0,
        searchingText: 'Searching...',
        searchPromptText: 'Type to search'
      };
    },
    getInitialState: function getInitialState() {
      return {
        cache: initCache(this.props.cache),
        isLoading: false,
        options: []
      };
    },
    componentWillMount: function componentWillMount() {
      this._lastInput = '';
    },
    componentDidMount: function componentDidMount() {
      this.loadOptions('');
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (nextProps.cache !== this.props.cache) {
        this.setState({cache: initCache(nextProps.cache)});
      }
    },
    focus: function focus() {
      this.refs.select.focus();
    },
    resetState: function resetState() {
      this._currentRequestId = -1;
      this.setState({
        isLoading: false,
        options: []
      });
    },
    getResponseHandler: function getResponseHandler(input) {
      var _this = this;
      var _requestId = this._currentRequestId = requestId++;
      return function(err, data) {
        if (err)
          throw err;
        if (!_this.isMounted())
          return;
        updateCache(_this.state.cache, input, data);
        if (_requestId !== _this._currentRequestId)
          return;
        _this.setState({
          isLoading: false,
          options: data && data.options || []
        });
      };
    },
    loadOptions: function loadOptions(input) {
      if (this.props.onInputChange) {
        var nextState = this.props.onInputChange(input);
        if (nextState != null) {
          input = '' + nextState;
        }
      }
      if (this.props.ignoreAccents)
        input = (0, _utilsStripDiacritics2['default'])(input);
      if (this.props.ignoreCase)
        input = input.toLowerCase();
      this._lastInput = input;
      if (input.length < this.props.minimumInput) {
        return this.resetState();
      }
      var cacheResult = getFromCache(this.state.cache, input);
      if (cacheResult) {
        return this.setState({options: cacheResult.options});
      }
      this.setState({isLoading: true});
      var responseHandler = this.getResponseHandler(input);
      return thenPromise(this.props.loadOptions(input, responseHandler), responseHandler);
    },
    render: function render() {
      var noResultsText = this.props.noResultsText;
      var _state = this.state;
      var isLoading = _state.isLoading;
      var options = _state.options;
      if (this.props.isLoading)
        isLoading = true;
      var placeholder = isLoading ? this.props.loadingPlaceholder : this.props.placeholder;
      if (!options.length) {
        if (this._lastInput.length < this.props.minimumInput)
          noResultsText = this.props.searchPromptText;
        if (isLoading)
          noResultsText = this.props.searchingText;
      }
      return _react2['default'].createElement(_Select2['default'], _extends({}, this.props, {
        ref: 'select',
        isLoading: isLoading,
        noResultsText: noResultsText,
        onInputChange: this.loadOptions,
        options: options,
        placeholder: placeholder
      }));
    }
  });
  module.exports = Async;
  return module.exports;
});

System.registerDynamic("npm:react-select@1.0.0-beta13/lib/Option.js", ["react", "classnames"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _react = $__require('react');
  var _react2 = _interopRequireDefault(_react);
  var _classnames = $__require('classnames');
  var _classnames2 = _interopRequireDefault(_classnames);
  var Option = _react2['default'].createClass({
    displayName: 'Option',
    propTypes: {
      children: _react2['default'].PropTypes.node,
      className: _react2['default'].PropTypes.string,
      isDisabled: _react2['default'].PropTypes.bool,
      isFocused: _react2['default'].PropTypes.bool,
      isSelected: _react2['default'].PropTypes.bool,
      onFocus: _react2['default'].PropTypes.func,
      onSelect: _react2['default'].PropTypes.func,
      onUnfocus: _react2['default'].PropTypes.func,
      option: _react2['default'].PropTypes.object.isRequired
    },
    blockEvent: function blockEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.target.tagName !== 'A' || !('href' in event.target)) {
        return;
      }
      if (event.target.target) {
        window.open(event.target.href, event.target.target);
      } else {
        window.location.href = event.target.href;
      }
    },
    handleMouseDown: function handleMouseDown(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.onSelect(this.props.option, event);
    },
    handleMouseEnter: function handleMouseEnter(event) {
      this.onFocus(event);
    },
    handleMouseMove: function handleMouseMove(event) {
      this.onFocus(event);
    },
    handleTouchEnd: function handleTouchEnd(event) {
      if (this.dragging)
        return;
      this.handleMouseDown(event);
    },
    handleTouchMove: function handleTouchMove(event) {
      this.dragging = true;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.dragging = false;
    },
    onFocus: function onFocus(event) {
      if (!this.props.isFocused) {
        this.props.onFocus(this.props.option, event);
      }
    },
    render: function render() {
      var option = this.props.option;
      var className = (0, _classnames2['default'])(this.props.className, option.className);
      return option.disabled ? _react2['default'].createElement('div', {
        className: className,
        onMouseDown: this.blockEvent,
        onClick: this.blockEvent
      }, this.props.children) : _react2['default'].createElement('div', {
        className: className,
        style: option.style,
        onMouseDown: this.handleMouseDown,
        onMouseEnter: this.handleMouseEnter,
        onMouseMove: this.handleMouseMove,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        title: option.title
      }, this.props.children);
    }
  });
  module.exports = Option;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/PooledClass.js", ["fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('fbjs/lib/invariant');
  var oneArgumentPooler = function(copyFieldsFrom) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, copyFieldsFrom);
      return instance;
    } else {
      return new Klass(copyFieldsFrom);
    }
  };
  var twoArgumentPooler = function(a1, a2) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2);
      return instance;
    } else {
      return new Klass(a1, a2);
    }
  };
  var threeArgumentPooler = function(a1, a2, a3) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3);
      return instance;
    } else {
      return new Klass(a1, a2, a3);
    }
  };
  var fourArgumentPooler = function(a1, a2, a3, a4) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3, a4);
      return instance;
    } else {
      return new Klass(a1, a2, a3, a4);
    }
  };
  var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3, a4, a5);
      return instance;
    } else {
      return new Klass(a1, a2, a3, a4, a5);
    }
  };
  var standardReleaser = function(instance) {
    var Klass = this;
    !(instance instanceof Klass) ? "production" !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : void 0;
    instance.destructor();
    if (Klass.instancePool.length < Klass.poolSize) {
      Klass.instancePool.push(instance);
    }
  };
  var DEFAULT_POOL_SIZE = 10;
  var DEFAULT_POOLER = oneArgumentPooler;
  var addPoolingTo = function(CopyConstructor, pooler) {
    var NewKlass = CopyConstructor;
    NewKlass.instancePool = [];
    NewKlass.getPooled = pooler || DEFAULT_POOLER;
    if (!NewKlass.poolSize) {
      NewKlass.poolSize = DEFAULT_POOL_SIZE;
    }
    NewKlass.release = standardReleaser;
    return NewKlass;
  };
  var PooledClass = {
    addPoolingTo: addPoolingTo,
    oneArgumentPooler: oneArgumentPooler,
    twoArgumentPooler: twoArgumentPooler,
    threeArgumentPooler: threeArgumentPooler,
    fourArgumentPooler: fourArgumentPooler,
    fiveArgumentPooler: fiveArgumentPooler
  };
  module.exports = PooledClass;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/KeyEscapeUtils.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function(match) {
      return escaperLookup[match];
    });
    return '$' + escapedString;
  }
  function unescape(key) {
    var unescapeRegex = /(=0|=2)/g;
    var unescaperLookup = {
      '=0': '=',
      '=2': ':'
    };
    var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
    return ('' + keySubstring).replace(unescapeRegex, function(match) {
      return unescaperLookup[match];
    });
  }
  var KeyEscapeUtils = {
    escape: escape,
    unescape: unescape
  };
  module.exports = KeyEscapeUtils;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/traverseAllChildren.js", ["./ReactCurrentOwner", "./ReactElement", "./getIteratorFn", "fbjs/lib/invariant", "./KeyEscapeUtils", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var ReactElement = $__require('./ReactElement');
  var getIteratorFn = $__require('./getIteratorFn');
  var invariant = $__require('fbjs/lib/invariant');
  var KeyEscapeUtils = $__require('./KeyEscapeUtils');
  var warning = $__require('fbjs/lib/warning');
  var SEPARATOR = '.';
  var SUBSEPARATOR = ':';
  var didWarnAboutMaps = false;
  function getComponentKey(component, index) {
    if (component && typeof component === 'object' && component.key != null) {
      return KeyEscapeUtils.escape(component.key);
    }
    return index.toString(36);
  }
  function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    var type = typeof children;
    if (type === 'undefined' || type === 'boolean') {
      children = null;
    }
    if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
      callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
      return 1;
    }
    var child;
    var nextName;
    var subtreeCount = 0;
    var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        nextName = nextNamePrefix + getComponentKey(child, i);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else {
      var iteratorFn = getIteratorFn(children);
      if (iteratorFn) {
        var iterator = iteratorFn.call(children);
        var step;
        if (iteratorFn !== children.entries) {
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          if ("production" !== 'production') {
            "production" !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : void 0;
            didWarnAboutMaps = true;
          }
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              child = entry[1];
              nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          }
        }
      } else if (type === 'object') {
        var addendum = '';
        if ("production" !== 'production') {
          addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
          if (children._isReactElement) {
            addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
          }
          if (ReactCurrentOwner.current) {
            var name = ReactCurrentOwner.current.getName();
            if (name) {
              addendum += ' Check the render method of `' + name + '`.';
            }
          }
        }
        var childrenString = String(children);
        !false ? "production" !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : void 0;
      }
    }
    return subtreeCount;
  }
  function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
      return 0;
    }
    return traverseAllChildrenImpl(children, '', callback, traverseContext);
  }
  module.exports = traverseAllChildren;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactChildren.js", ["./PooledClass", "./ReactElement", "fbjs/lib/emptyFunction", "./traverseAllChildren", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var PooledClass = $__require('./PooledClass');
  var ReactElement = $__require('./ReactElement');
  var emptyFunction = $__require('fbjs/lib/emptyFunction');
  var traverseAllChildren = $__require('./traverseAllChildren');
  var twoArgumentPooler = PooledClass.twoArgumentPooler;
  var fourArgumentPooler = PooledClass.fourArgumentPooler;
  var userProvidedKeyEscapeRegex = /\/+/g;
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
  }
  function ForEachBookKeeping(forEachFunction, forEachContext) {
    this.func = forEachFunction;
    this.context = forEachContext;
    this.count = 0;
  }
  ForEachBookKeeping.prototype.destructor = function() {
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func;
    var context = bookKeeping.context;
    func.call(context, child, bookKeeping.count++);
  }
  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }
    var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    ForEachBookKeeping.release(traverseContext);
  }
  function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
    this.result = mapResult;
    this.keyPrefix = keyPrefix;
    this.func = mapFunction;
    this.context = mapContext;
    this.count = 0;
  }
  MapBookKeeping.prototype.destructor = function() {
    this.result = null;
    this.keyPrefix = null;
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result;
    var keyPrefix = bookKeeping.keyPrefix;
    var func = bookKeeping.func;
    var context = bookKeeping.context;
    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
    } else if (mappedChild != null) {
      if (ReactElement.isValidElement(mappedChild)) {
        mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
      }
      result.push(mappedChild);
    }
  }
  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    MapBookKeeping.release(traverseContext);
  }
  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }
  function forEachSingleChildDummy(traverseContext, child, name) {
    return null;
  }
  function countChildren(children, context) {
    return traverseAllChildren(children, forEachSingleChildDummy, null);
  }
  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
    return result;
  }
  var ReactChildren = {
    forEach: forEachChildren,
    map: mapChildren,
    mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
    count: countChildren,
    toArray: toArray
  };
  module.exports = ReactChildren;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactInvalidSetStateWarningDevTool.js", ["fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var warning = $__require('fbjs/lib/warning');
  if ("production" !== 'production') {
    var processingChildContext = false;
    var warnInvalidSetState = function() {
      "production" !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
    };
  }
  var ReactInvalidSetStateWarningDevTool = {
    onBeginProcessingChildContext: function() {
      processingChildContext = true;
    },
    onEndProcessingChildContext: function() {
      processingChildContext = false;
    },
    onSetState: function() {
      warnInvalidSetState();
    }
  };
  module.exports = ReactInvalidSetStateWarningDevTool;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDebugTool.js", ["./ReactInvalidSetStateWarningDevTool", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactInvalidSetStateWarningDevTool = $__require('./ReactInvalidSetStateWarningDevTool');
  var warning = $__require('fbjs/lib/warning');
  var eventHandlers = [];
  var handlerDoesThrowForEvent = {};
  function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
    if ("production" !== 'production') {
      eventHandlers.forEach(function(handler) {
        try {
          if (handler[handlerFunctionName]) {
            handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
          }
        } catch (e) {
          "production" !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
          handlerDoesThrowForEvent[handlerFunctionName] = true;
        }
      });
    }
  }
  var ReactDebugTool = {
    addDevtool: function(devtool) {
      eventHandlers.push(devtool);
    },
    removeDevtool: function(devtool) {
      for (var i = 0; i < eventHandlers.length; i++) {
        if (eventHandlers[i] === devtool) {
          eventHandlers.splice(i, 1);
          i--;
        }
      }
    },
    onBeginProcessingChildContext: function() {
      emitEvent('onBeginProcessingChildContext');
    },
    onEndProcessingChildContext: function() {
      emitEvent('onEndProcessingChildContext');
    },
    onSetState: function() {
      emitEvent('onSetState');
    },
    onMountRootComponent: function(internalInstance) {
      emitEvent('onMountRootComponent', internalInstance);
    },
    onMountComponent: function(internalInstance) {
      emitEvent('onMountComponent', internalInstance);
    },
    onUpdateComponent: function(internalInstance) {
      emitEvent('onUpdateComponent', internalInstance);
    },
    onUnmountComponent: function(internalInstance) {
      emitEvent('onUnmountComponent', internalInstance);
    }
  };
  ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
  module.exports = ReactDebugTool;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactInstrumentation.js", ["./ReactDebugTool", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactDebugTool = $__require('./ReactDebugTool');
  module.exports = {debugTool: ReactDebugTool};
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactComponent.js", ["./ReactNoopUpdateQueue", "./ReactInstrumentation", "./canDefineProperty", "fbjs/lib/emptyObject", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactNoopUpdateQueue = $__require('./ReactNoopUpdateQueue');
  var ReactInstrumentation = $__require('./ReactInstrumentation');
  var canDefineProperty = $__require('./canDefineProperty');
  var emptyObject = $__require('fbjs/lib/emptyObject');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  function ReactComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  ReactComponent.prototype.isReactComponent = {};
  ReactComponent.prototype.setState = function(partialState, callback) {
    !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? "production" !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : void 0;
    if ("production" !== 'production') {
      ReactInstrumentation.debugTool.onSetState();
      "production" !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
    }
    this.updater.enqueueSetState(this, partialState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'setState');
    }
  };
  ReactComponent.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'forceUpdate');
    }
  };
  if ("production" !== 'production') {
    var deprecatedAPIs = {
      isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
      replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
    };
    var defineDeprecationWarning = function(methodName, info) {
      if (canDefineProperty) {
        Object.defineProperty(ReactComponent.prototype, methodName, {get: function() {
            "production" !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
            return undefined;
          }});
      }
    };
    for (var fnName in deprecatedAPIs) {
      if (deprecatedAPIs.hasOwnProperty(fnName)) {
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
    }
  }
  module.exports = ReactComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactNoopUpdateQueue.js", ["fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var warning = $__require('fbjs/lib/warning');
  function warnTDZ(publicInstance, callerName) {
    if ("production" !== 'production') {
      "production" !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : void 0;
    }
  }
  var ReactNoopUpdateQueue = {
    isMounted: function(publicInstance) {
      return false;
    },
    enqueueCallback: function(publicInstance, callback) {},
    enqueueForceUpdate: function(publicInstance) {
      warnTDZ(publicInstance, 'forceUpdate');
    },
    enqueueReplaceState: function(publicInstance, completeState) {
      warnTDZ(publicInstance, 'replaceState');
    },
    enqueueSetState: function(publicInstance, partialState) {
      warnTDZ(publicInstance, 'setState');
    }
  };
  module.exports = ReactNoopUpdateQueue;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/emptyObject.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var emptyObject = {};
  if ("production" !== 'production') {
    Object.freeze(emptyObject);
  }
  module.exports = emptyObject;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/keyOf.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var keyOf = function(oneKeyObj) {
    var key;
    for (key in oneKeyObj) {
      if (!oneKeyObj.hasOwnProperty(key)) {
        continue;
      }
      return key;
    }
    return null;
  };
  module.exports = keyOf;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactClass.js", ["object-assign", "./ReactComponent", "./ReactElement", "./ReactPropTypeLocations", "./ReactPropTypeLocationNames", "./ReactNoopUpdateQueue", "fbjs/lib/emptyObject", "fbjs/lib/invariant", "fbjs/lib/keyMirror", "fbjs/lib/keyOf", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var ReactComponent = $__require('./ReactComponent');
  var ReactElement = $__require('./ReactElement');
  var ReactPropTypeLocations = $__require('./ReactPropTypeLocations');
  var ReactPropTypeLocationNames = $__require('./ReactPropTypeLocationNames');
  var ReactNoopUpdateQueue = $__require('./ReactNoopUpdateQueue');
  var emptyObject = $__require('fbjs/lib/emptyObject');
  var invariant = $__require('fbjs/lib/invariant');
  var keyMirror = $__require('fbjs/lib/keyMirror');
  var keyOf = $__require('fbjs/lib/keyOf');
  var warning = $__require('fbjs/lib/warning');
  var MIXINS_KEY = keyOf({mixins: null});
  var SpecPolicy = keyMirror({
    DEFINE_ONCE: null,
    DEFINE_MANY: null,
    OVERRIDE_BASE: null,
    DEFINE_MANY_MERGED: null
  });
  var injectedMixins = [];
  var ReactClassInterface = {
    mixins: SpecPolicy.DEFINE_MANY,
    statics: SpecPolicy.DEFINE_MANY,
    propTypes: SpecPolicy.DEFINE_MANY,
    contextTypes: SpecPolicy.DEFINE_MANY,
    childContextTypes: SpecPolicy.DEFINE_MANY,
    getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
    getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
    getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
    render: SpecPolicy.DEFINE_ONCE,
    componentWillMount: SpecPolicy.DEFINE_MANY,
    componentDidMount: SpecPolicy.DEFINE_MANY,
    componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
    shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
    componentWillUpdate: SpecPolicy.DEFINE_MANY,
    componentDidUpdate: SpecPolicy.DEFINE_MANY,
    componentWillUnmount: SpecPolicy.DEFINE_MANY,
    updateComponent: SpecPolicy.OVERRIDE_BASE
  };
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if ("production" !== 'production') {
        validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
      }
      Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
    },
    contextTypes: function(Constructor, contextTypes) {
      if ("production" !== 'production') {
        validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
      }
      Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
    },
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if ("production" !== 'production') {
        validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };
  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        "production" !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
      }
    }
  }
  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
    if (ReactClassMixin.hasOwnProperty(name)) {
      !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? "production" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : void 0;
    }
    if (isAlreadyDefined) {
      !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? "production" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : void 0;
    }
  }
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      return;
    }
    !(typeof spec !== 'function') ? "production" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.') : invariant(false) : void 0;
    !!ReactElement.isValidElement(spec) ? "production" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : void 0;
    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }
    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }
      if (name === MIXINS_KEY) {
        continue;
      }
      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);
      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];
            !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? "production" !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : void 0;
            if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if ("production" !== 'production') {
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }
  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }
      var isReserved = name in RESERVED_SPEC_KEYS;
      !!isReserved ? "production" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : void 0;
      var isInherited = name in Constructor;
      !!isInherited ? "production" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : void 0;
      Constructor[name] = property;
    }
  }
  function mergeIntoWithNoDuplicateKeys(one, two) {
    !(one && two && typeof one === 'object' && typeof two === 'object') ? "production" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : void 0;
    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        !(one[key] === undefined) ? "production" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : void 0;
        one[key] = two[key];
      }
    }
    return one;
  }
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if ("production" !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (newThis !== component && newThis !== null) {
          "production" !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
        } else if (!args.length) {
          "production" !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }
  var ReactClassMixin = {
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'replaceState');
      }
    },
    isMounted: function() {
      return this.updater.isMounted(this);
    }
  };
  var ReactClassComponent = function() {};
  _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
  var ReactClass = {
    createClass: function(spec) {
      var Constructor = function(props, context, updater) {
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
        }
        if (this.__reactAutoBindPairs.length) {
          bindAutoBindMethods(this);
        }
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
        this.state = null;
        var initialState = this.getInitialState ? this.getInitialState() : null;
        if ("production" !== 'production') {
          if (initialState === undefined && this.getInitialState._isMockFunction) {
            initialState = null;
          }
        }
        !(typeof initialState === 'object' && !Array.isArray(initialState)) ? "production" !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : void 0;
        this.state = initialState;
      };
      Constructor.prototype = new ReactClassComponent();
      Constructor.prototype.constructor = Constructor;
      Constructor.prototype.__reactAutoBindPairs = [];
      injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
      mixSpecIntoComponent(Constructor, spec);
      if (Constructor.getDefaultProps) {
        Constructor.defaultProps = Constructor.getDefaultProps();
      }
      if ("production" !== 'production') {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps.isReactClassApproved = {};
        }
        if (Constructor.prototype.getInitialState) {
          Constructor.prototype.getInitialState.isReactClassApproved = {};
        }
      }
      !Constructor.prototype.render ? "production" !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : void 0;
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
        "production" !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
      }
      for (var methodName in ReactClassInterface) {
        if (!Constructor.prototype[methodName]) {
          Constructor.prototype[methodName] = null;
        }
      }
      return Constructor;
    },
    injection: {injectMixin: function(mixin) {
        injectedMixins.push(mixin);
      }}
  };
  module.exports = ReactClass;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/mapObject.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function mapObject(object, callback, context) {
    if (!object) {
      return null;
    }
    var result = {};
    for (var name in object) {
      if (hasOwnProperty.call(object, name)) {
        result[name] = callback.call(context, object[name], name, object);
      }
    }
    return result;
  }
  module.exports = mapObject;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactDOMFactories.js", ["./ReactElement", "./ReactElementValidator", "fbjs/lib/mapObject", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('./ReactElement');
  var ReactElementValidator = $__require('./ReactElementValidator');
  var mapObject = $__require('fbjs/lib/mapObject');
  function createDOMFactory(tag) {
    if ("production" !== 'production') {
      return ReactElementValidator.createFactory(tag);
    }
    return ReactElement.createFactory(tag);
  }
  var ReactDOMFactories = mapObject({
    a: 'a',
    abbr: 'abbr',
    address: 'address',
    area: 'area',
    article: 'article',
    aside: 'aside',
    audio: 'audio',
    b: 'b',
    base: 'base',
    bdi: 'bdi',
    bdo: 'bdo',
    big: 'big',
    blockquote: 'blockquote',
    body: 'body',
    br: 'br',
    button: 'button',
    canvas: 'canvas',
    caption: 'caption',
    cite: 'cite',
    code: 'code',
    col: 'col',
    colgroup: 'colgroup',
    data: 'data',
    datalist: 'datalist',
    dd: 'dd',
    del: 'del',
    details: 'details',
    dfn: 'dfn',
    dialog: 'dialog',
    div: 'div',
    dl: 'dl',
    dt: 'dt',
    em: 'em',
    embed: 'embed',
    fieldset: 'fieldset',
    figcaption: 'figcaption',
    figure: 'figure',
    footer: 'footer',
    form: 'form',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    head: 'head',
    header: 'header',
    hgroup: 'hgroup',
    hr: 'hr',
    html: 'html',
    i: 'i',
    iframe: 'iframe',
    img: 'img',
    input: 'input',
    ins: 'ins',
    kbd: 'kbd',
    keygen: 'keygen',
    label: 'label',
    legend: 'legend',
    li: 'li',
    link: 'link',
    main: 'main',
    map: 'map',
    mark: 'mark',
    menu: 'menu',
    menuitem: 'menuitem',
    meta: 'meta',
    meter: 'meter',
    nav: 'nav',
    noscript: 'noscript',
    object: 'object',
    ol: 'ol',
    optgroup: 'optgroup',
    option: 'option',
    output: 'output',
    p: 'p',
    param: 'param',
    picture: 'picture',
    pre: 'pre',
    progress: 'progress',
    q: 'q',
    rp: 'rp',
    rt: 'rt',
    ruby: 'ruby',
    s: 's',
    samp: 'samp',
    script: 'script',
    section: 'section',
    select: 'select',
    small: 'small',
    source: 'source',
    span: 'span',
    strong: 'strong',
    style: 'style',
    sub: 'sub',
    summary: 'summary',
    sup: 'sup',
    table: 'table',
    tbody: 'tbody',
    td: 'td',
    textarea: 'textarea',
    tfoot: 'tfoot',
    th: 'th',
    thead: 'thead',
    time: 'time',
    title: 'title',
    tr: 'tr',
    track: 'track',
    u: 'u',
    ul: 'ul',
    'var': 'var',
    video: 'video',
    wbr: 'wbr',
    circle: 'circle',
    clipPath: 'clipPath',
    defs: 'defs',
    ellipse: 'ellipse',
    g: 'g',
    image: 'image',
    line: 'line',
    linearGradient: 'linearGradient',
    mask: 'mask',
    path: 'path',
    pattern: 'pattern',
    polygon: 'polygon',
    polyline: 'polyline',
    radialGradient: 'radialGradient',
    rect: 'rect',
    stop: 'stop',
    svg: 'svg',
    text: 'text',
    tspan: 'tspan'
  }, createDOMFactory);
  module.exports = ReactDOMFactories;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/keyMirror.js", ["./invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var invariant = $__require('./invariant');
  var keyMirror = function(obj) {
    var ret = {};
    var key;
    !(obj instanceof Object && !Array.isArray(obj)) ? "production" !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
      ret[key] = key;
    }
    return ret;
  };
  module.exports = keyMirror;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactPropTypeLocations.js", ["fbjs/lib/keyMirror", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('fbjs/lib/keyMirror');
  var ReactPropTypeLocations = keyMirror({
    prop: null,
    context: null,
    childContext: null
  });
  module.exports = ReactPropTypeLocations;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactElementValidator.js", ["./ReactElement", "./ReactPropTypeLocations", "./ReactPropTypeLocationNames", "./ReactCurrentOwner", "./canDefineProperty", "./getIteratorFn", "fbjs/lib/invariant", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('./ReactElement');
  var ReactPropTypeLocations = $__require('./ReactPropTypeLocations');
  var ReactPropTypeLocationNames = $__require('./ReactPropTypeLocationNames');
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var canDefineProperty = $__require('./canDefineProperty');
  var getIteratorFn = $__require('./getIteratorFn');
  var invariant = $__require('fbjs/lib/invariant');
  var warning = $__require('fbjs/lib/warning');
  function getDeclarationErrorAddendum() {
    if (ReactCurrentOwner.current) {
      var name = ReactCurrentOwner.current.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }
  var ownerHasKeyUseWarning = {};
  var loggedTypeFailures = {};
  function validateExplicitKey(element, parentType) {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }
    element._store.validated = true;
    var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
    if (addenda === null) {
      return;
    }
    "production" !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : void 0;
  }
  function getAddendaForKeyUse(messageType, element, parentType) {
    var addendum = getDeclarationErrorAddendum();
    if (!addendum) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
      if (parentName) {
        addendum = ' Check the top-level render call using <' + parentName + '>.';
      }
    }
    var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
    if (memoizer[addendum]) {
      return null;
    }
    memoizer[addendum] = true;
    var addenda = {
      parentOrOwner: addendum,
      url: ' See https://fb.me/react-warning-keys for more information.',
      childOwner: null
    };
    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
      addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
    }
    return addenda;
  }
  function validateChildKeys(node, parentType) {
    if (typeof node !== 'object') {
      return;
    }
    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];
        if (ReactElement.isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (ReactElement.isValidElement(node)) {
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);
      if (iteratorFn) {
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;
          while (!(step = iterator.next()).done) {
            if (ReactElement.isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
  function checkPropTypes(componentName, propTypes, props, location) {
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error;
        try {
          !(typeof propTypes[propName] === 'function') ? "production" !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
          error = propTypes[propName](props, propName, componentName, location);
        } catch (ex) {
          error = ex;
        }
        "production" !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : void 0;
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var addendum = getDeclarationErrorAddendum();
          "production" !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : void 0;
        }
      }
    }
  }
  function validatePropTypes(element) {
    var componentClass = element.type;
    if (typeof componentClass !== 'function') {
      return;
    }
    var name = componentClass.displayName || componentClass.name;
    if (componentClass.propTypes) {
      checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
    }
    if (typeof componentClass.getDefaultProps === 'function') {
      "production" !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
    }
  }
  var ReactElementValidator = {
    createElement: function(type, props, children) {
      var validType = typeof type === 'string' || typeof type === 'function';
      "production" !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
      var element = ReactElement.createElement.apply(this, arguments);
      if (element == null) {
        return element;
      }
      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }
      validatePropTypes(element);
      return element;
    },
    createFactory: function(type) {
      var validatedFactory = ReactElementValidator.createElement.bind(null, type);
      validatedFactory.type = type;
      if ("production" !== 'production') {
        if (canDefineProperty) {
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function() {
              "production" !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
              Object.defineProperty(this, 'type', {value: type});
              return type;
            }
          });
        }
      }
      return validatedFactory;
    },
    cloneElement: function(element, props, children) {
      var newElement = ReactElement.cloneElement.apply(this, arguments);
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }
      validatePropTypes(newElement);
      return newElement;
    }
  };
  module.exports = ReactElementValidator;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactPropTypeLocationNames.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactPropTypeLocationNames = {};
  if ("production" !== 'production') {
    ReactPropTypeLocationNames = {
      prop: 'prop',
      context: 'context',
      childContext: 'child context'
    };
  }
  module.exports = ReactPropTypeLocationNames;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/getIteratorFn.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  module.exports = getIteratorFn;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactPropTypes.js", ["./ReactElement", "./ReactPropTypeLocationNames", "fbjs/lib/emptyFunction", "./getIteratorFn", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('./ReactElement');
  var ReactPropTypeLocationNames = $__require('./ReactPropTypeLocationNames');
  var emptyFunction = $__require('fbjs/lib/emptyFunction');
  var getIteratorFn = $__require('./getIteratorFn');
  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];
        var preciseType = getPreciseType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function() {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function() {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }
    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  module.exports = ReactPropTypes;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactVersion.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = '15.0.2';
  return module.exports;
});

System.registerDynamic("npm:object-assign@4.1.0.json", [], false, function() {
  return {
    "main": "index",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic("npm:object-assign@4.1.0/index.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String('abc');
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (Object.getOwnPropertySymbols) {
        symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactCurrentOwner.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = {current: null};
  module.exports = ReactCurrentOwner;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/canDefineProperty.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var canDefineProperty = false;
  if ("production" !== 'production') {
    try {
      Object.defineProperty({}, 'x', {get: function() {}});
      canDefineProperty = true;
    } catch (x) {}
  }
  module.exports = canDefineProperty;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/ReactElement.js", ["object-assign", "./ReactCurrentOwner", "fbjs/lib/warning", "./canDefineProperty", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var ReactCurrentOwner = $__require('./ReactCurrentOwner');
  var warning = $__require('fbjs/lib/warning');
  var canDefineProperty = $__require('./canDefineProperty');
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
  var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  var specialPropKeyWarningShown,
      specialPropRefWarningShown;
  var ReactElement = function(type, key, ref, self, source, owner, props) {
    var element = {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key,
      ref: ref,
      props: props,
      _owner: owner
    };
    if ("production" !== 'production') {
      element._store = {};
      if (canDefineProperty) {
        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        });
        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        });
        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
      } else {
        element._store.validated = false;
        element._self = self;
        element._source = source;
      }
      if (Object.freeze) {
        Object.freeze(element.props);
        Object.freeze(element);
      }
    }
    return element;
  };
  ReactElement.createElement = function(type, config, children) {
    var propName;
    var props = {};
    var key = null;
    var ref = null;
    var self = null;
    var source = null;
    if (config != null) {
      if ("production" !== 'production') {
        ref = !config.hasOwnProperty('ref') || Object.getOwnPropertyDescriptor(config, 'ref').get ? null : config.ref;
        key = !config.hasOwnProperty('key') || Object.getOwnPropertyDescriptor(config, 'key').get ? null : '' + config.key;
      } else {
        ref = config.ref === undefined ? null : config.ref;
        key = config.key === undefined ? null : '' + config.key;
      }
      self = config.__self === undefined ? null : config.__self;
      source = config.__source === undefined ? null : config.__source;
      for (propName in config) {
        if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      }
    }
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }
    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;
      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }
    if ("production" !== 'production') {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        if (!props.hasOwnProperty('key')) {
          Object.defineProperty(props, 'key', {
            get: function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                "production" !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
              }
              return undefined;
            },
            configurable: true
          });
        }
        if (!props.hasOwnProperty('ref')) {
          Object.defineProperty(props, 'ref', {
            get: function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                "production" !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
              }
              return undefined;
            },
            configurable: true
          });
        }
      }
    }
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  };
  ReactElement.createFactory = function(type) {
    var factory = ReactElement.createElement.bind(null, type);
    factory.type = type;
    return factory;
  };
  ReactElement.cloneAndReplaceKey = function(oldElement, newKey) {
    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
    return newElement;
  };
  ReactElement.cloneElement = function(element, config, children) {
    var propName;
    var props = _assign({}, element.props);
    var key = element.key;
    var ref = element.ref;
    var self = element._self;
    var source = element._source;
    var owner = element._owner;
    if (config != null) {
      if (config.ref !== undefined) {
        ref = config.ref;
        owner = ReactCurrentOwner.current;
      }
      if (config.key !== undefined) {
        key = '' + config.key;
      }
      var defaultProps;
      if (element.type && element.type.defaultProps) {
        defaultProps = element.type.defaultProps;
      }
      for (propName in config) {
        if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          if (config[propName] === undefined && defaultProps !== undefined) {
            props[propName] = defaultProps[propName];
          } else {
            props[propName] = config[propName];
          }
        }
      }
    }
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }
    return ReactElement(element.type, key, ref, self, source, owner, props);
  };
  ReactElement.isValidElement = function(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };
  module.exports = ReactElement;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/invariant.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function invariant(condition, format, a, b, c, d, e, f) {
    if ("production" !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }
    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function() {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }
      error.framesToPop = 1;
      throw error;
    }
  }
  module.exports = invariant;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/onlyChild.js", ["./ReactElement", "fbjs/lib/invariant", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('./ReactElement');
  var invariant = $__require('fbjs/lib/invariant');
  function onlyChild(children) {
    !ReactElement.isValidElement(children) ? "production" !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : void 0;
    return children;
  }
  module.exports = onlyChild;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2/lib/emptyFunction.js", ["process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }
  function emptyFunction() {}
  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() {
    return this;
  };
  emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
  };
  module.exports = emptyFunction;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.2.json", [], false, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*": {
        "globals": {
          "process": "process"
        }
      },
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic("npm:fbjs@0.8.2/lib/warning.js", ["./emptyFunction", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var emptyFunction = $__require('./emptyFunction');
  var warning = emptyFunction;
  if ("production" !== 'production') {
    warning = function(condition, format) {
      for (var _len = arguments.length,
          args = Array(_len > 2 ? _len - 2 : 0),
          _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (format.indexOf('Failed Composite propType: ') === 0) {
        return;
      }
      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      }
    };
  }
  module.exports = warning;
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2/lib/React.js", ["object-assign", "./ReactChildren", "./ReactComponent", "./ReactClass", "./ReactDOMFactories", "./ReactElement", "./ReactElementValidator", "./ReactPropTypes", "./ReactVersion", "./onlyChild", "fbjs/lib/warning", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('object-assign');
  var ReactChildren = $__require('./ReactChildren');
  var ReactComponent = $__require('./ReactComponent');
  var ReactClass = $__require('./ReactClass');
  var ReactDOMFactories = $__require('./ReactDOMFactories');
  var ReactElement = $__require('./ReactElement');
  var ReactElementValidator = $__require('./ReactElementValidator');
  var ReactPropTypes = $__require('./ReactPropTypes');
  var ReactVersion = $__require('./ReactVersion');
  var onlyChild = $__require('./onlyChild');
  var warning = $__require('fbjs/lib/warning');
  var createElement = ReactElement.createElement;
  var createFactory = ReactElement.createFactory;
  var cloneElement = ReactElement.cloneElement;
  if ("production" !== 'production') {
    createElement = ReactElementValidator.createElement;
    createFactory = ReactElementValidator.createFactory;
    cloneElement = ReactElementValidator.cloneElement;
  }
  var __spread = _assign;
  if ("production" !== 'production') {
    var warned = false;
    __spread = function() {
      "production" !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
      warned = true;
      return _assign.apply(null, arguments);
    };
  }
  var React = {
    Children: {
      map: ReactChildren.map,
      forEach: ReactChildren.forEach,
      count: ReactChildren.count,
      toArray: ReactChildren.toArray,
      only: onlyChild
    },
    Component: ReactComponent,
    createElement: createElement,
    cloneElement: cloneElement,
    isValidElement: ReactElement.isValidElement,
    PropTypes: ReactPropTypes,
    createClass: ReactClass.createClass,
    createFactory: createFactory,
    createMixin: function(mixin) {
      return mixin;
    },
    DOM: ReactDOMFactories,
    version: ReactVersion,
    __spread: __spread
  };
  module.exports = React;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.2.0-alpha.json", [], false, function() {
  return {
    "main": "./process.js"
  };
});

System.registerDynamic("github:jspm/nodelibs-process@0.2.0-alpha/process.js", ["@system-env"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var productionEnv = $__require('@system-env').production;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {NODE_ENV: productionEnv ? 'production' : 'development'};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

System.registerDynamic("npm:react@15.0.2.json", [], false, function() {
  return {
    "main": "react.js",
    "format": "cjs",
    "meta": {
      "*": {
        "globals": {
          "process": "process"
        }
      },
      "*.json": {
        "format": "json"
      },
      "dist/react-with-addons.js": {
        "cjsRequireDetection": false
      },
      "dist/react.js": {
        "cjsRequireDetection": false
      }
    }
  };
});

System.registerDynamic("npm:react@15.0.2/react.js", ["./lib/React", "process"], true, function($__require, exports, module) {
  "use strict";
  var process = $__require("process");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('./lib/React');
  return module.exports;
});

System.registerDynamic("npm:classnames@2.2.5.json", [], false, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic("npm:classnames@2.2.5/index.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(' ');
    }
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
      define('classnames', [], function() {
        return classNames;
      });
    } else {
      window.classNames = classNames;
    }
  }());
  return module.exports;
});

System.registerDynamic("npm:react-select@1.0.0-beta13/lib/Value.js", ["react", "classnames"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _react = $__require('react');
  var _react2 = _interopRequireDefault(_react);
  var _classnames = $__require('classnames');
  var _classnames2 = _interopRequireDefault(_classnames);
  var Value = _react2['default'].createClass({
    displayName: 'Value',
    propTypes: {
      children: _react2['default'].PropTypes.node,
      disabled: _react2['default'].PropTypes.bool,
      onClick: _react2['default'].PropTypes.func,
      onRemove: _react2['default'].PropTypes.func,
      value: _react2['default'].PropTypes.object.isRequired
    },
    handleMouseDown: function handleMouseDown(event) {
      if (event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      if (this.props.onClick) {
        event.stopPropagation();
        this.props.onClick(this.props.value, event);
        return;
      }
      if (this.props.value.href) {
        event.stopPropagation();
      }
    },
    onRemove: function onRemove(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.onRemove(this.props.value);
    },
    handleTouchEndRemove: function handleTouchEndRemove(event) {
      if (this.dragging)
        return;
      this.onRemove(event);
    },
    handleTouchMove: function handleTouchMove(event) {
      this.dragging = true;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.dragging = false;
    },
    renderRemoveIcon: function renderRemoveIcon() {
      if (this.props.disabled || !this.props.onRemove)
        return;
      return _react2['default'].createElement('span', {
        className: 'Select-value-icon',
        onMouseDown: this.onRemove,
        onTouchEnd: this.handleTouchEndRemove,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove
      }, '×');
    },
    renderLabel: function renderLabel() {
      var className = 'Select-value-label';
      return this.props.onClick || this.props.value.href ? _react2['default'].createElement('a', {
        className: className,
        href: this.props.value.href,
        target: this.props.value.target,
        onMouseDown: this.handleMouseDown,
        onTouchEnd: this.handleMouseDown
      }, this.props.children) : _react2['default'].createElement('span', {className: className}, this.props.children);
    },
    render: function render() {
      return _react2['default'].createElement('div', {
        className: (0, _classnames2['default'])('Select-value', this.props.value.className),
        style: this.props.value.style,
        title: this.props.value.title
      }, this.renderRemoveIcon(), this.renderLabel());
    }
  });
  module.exports = Value;
  return module.exports;
});

System.registerDynamic("npm:react-select@1.0.0-beta13.json", [], false, function() {
  return {
    "main": "lib/Select.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      },
      ".publish/app.js": {
        "cjsRequireDetection": false
      },
      ".publish/bundle.js": {
        "cjsRequireDetection": false
      },
      ".publish/common.js": {
        "cjsRequireDetection": false
      },
      ".publish/standalone.js": {
        "cjsRequireDetection": false
      },
      "dist/react-select.js": {
        "cjsRequireDetection": false
      }
    }
  };
});

System.registerDynamic("npm:react-select@1.0.0-beta13/lib/Select.js", ["react", "react-dom", "react-input-autosize", "classnames", "./utils/stripDiacritics", "./Async", "./Option", "./Value"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _react = $__require('react');
  var _react2 = _interopRequireDefault(_react);
  var _reactDom = $__require('react-dom');
  var _reactDom2 = _interopRequireDefault(_reactDom);
  var _reactInputAutosize = $__require('react-input-autosize');
  var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);
  var _classnames = $__require('classnames');
  var _classnames2 = _interopRequireDefault(_classnames);
  var _utilsStripDiacritics = $__require('./utils/stripDiacritics');
  var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);
  var _Async = $__require('./Async');
  var _Async2 = _interopRequireDefault(_Async);
  var _Option = $__require('./Option');
  var _Option2 = _interopRequireDefault(_Option);
  var _Value = $__require('./Value');
  var _Value2 = _interopRequireDefault(_Value);
  function stringifyValue(value) {
    if (typeof value === 'object') {
      return JSON.stringify(value);
    } else {
      return value;
    }
  }
  var stringOrNode = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]);
  var Select = _react2['default'].createClass({
    displayName: 'Select',
    propTypes: {
      addLabelText: _react2['default'].PropTypes.string,
      allowCreate: _react2['default'].PropTypes.bool,
      autoBlur: _react2['default'].PropTypes.bool,
      autofocus: _react2['default'].PropTypes.bool,
      autosize: _react2['default'].PropTypes.bool,
      backspaceRemoves: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string,
      clearAllText: stringOrNode,
      clearValueText: stringOrNode,
      clearable: _react2['default'].PropTypes.bool,
      delimiter: _react2['default'].PropTypes.string,
      disabled: _react2['default'].PropTypes.bool,
      escapeClearsValue: _react2['default'].PropTypes.bool,
      filterOption: _react2['default'].PropTypes.func,
      filterOptions: _react2['default'].PropTypes.any,
      ignoreAccents: _react2['default'].PropTypes.bool,
      ignoreCase: _react2['default'].PropTypes.bool,
      inputProps: _react2['default'].PropTypes.object,
      inputRenderer: _react2['default'].PropTypes.func,
      isLoading: _react2['default'].PropTypes.bool,
      joinValues: _react2['default'].PropTypes.bool,
      labelKey: _react2['default'].PropTypes.string,
      matchPos: _react2['default'].PropTypes.string,
      matchProp: _react2['default'].PropTypes.string,
      menuBuffer: _react2['default'].PropTypes.number,
      menuContainerStyle: _react2['default'].PropTypes.object,
      menuRenderer: _react2['default'].PropTypes.func,
      menuStyle: _react2['default'].PropTypes.object,
      multi: _react2['default'].PropTypes.bool,
      name: _react2['default'].PropTypes.string,
      newOptionCreator: _react2['default'].PropTypes.func,
      noResultsText: stringOrNode,
      onBlur: _react2['default'].PropTypes.func,
      onBlurResetsInput: _react2['default'].PropTypes.bool,
      onChange: _react2['default'].PropTypes.func,
      onClose: _react2['default'].PropTypes.func,
      onFocus: _react2['default'].PropTypes.func,
      onInputChange: _react2['default'].PropTypes.func,
      onMenuScrollToBottom: _react2['default'].PropTypes.func,
      onOpen: _react2['default'].PropTypes.func,
      onValueClick: _react2['default'].PropTypes.func,
      openAfterFocus: _react2['default'].PropTypes.bool,
      openOnFocus: _react2['default'].PropTypes.bool,
      optionClassName: _react2['default'].PropTypes.string,
      optionComponent: _react2['default'].PropTypes.func,
      optionRenderer: _react2['default'].PropTypes.func,
      options: _react2['default'].PropTypes.array,
      placeholder: stringOrNode,
      required: _react2['default'].PropTypes.bool,
      resetValue: _react2['default'].PropTypes.any,
      scrollMenuIntoView: _react2['default'].PropTypes.bool,
      searchable: _react2['default'].PropTypes.bool,
      simpleValue: _react2['default'].PropTypes.bool,
      style: _react2['default'].PropTypes.object,
      tabIndex: _react2['default'].PropTypes.string,
      tabSelectsValue: _react2['default'].PropTypes.bool,
      value: _react2['default'].PropTypes.any,
      valueComponent: _react2['default'].PropTypes.func,
      valueKey: _react2['default'].PropTypes.string,
      valueRenderer: _react2['default'].PropTypes.func,
      wrapperStyle: _react2['default'].PropTypes.object
    },
    statics: {Async: _Async2['default']},
    getDefaultProps: function getDefaultProps() {
      return {
        addLabelText: 'Add "{label}"?',
        autosize: true,
        allowCreate: false,
        backspaceRemoves: true,
        clearable: true,
        clearAllText: 'Clear all',
        clearValueText: 'Clear value',
        delimiter: ',',
        disabled: false,
        escapeClearsValue: true,
        filterOptions: true,
        ignoreAccents: true,
        ignoreCase: true,
        inputProps: {},
        isLoading: false,
        joinValues: false,
        labelKey: 'label',
        matchPos: 'any',
        matchProp: 'any',
        menuBuffer: 0,
        multi: false,
        noResultsText: 'No results found',
        onBlurResetsInput: true,
        openAfterFocus: false,
        optionComponent: _Option2['default'],
        placeholder: 'Select...',
        required: false,
        resetValue: null,
        scrollMenuIntoView: true,
        searchable: true,
        simpleValue: false,
        tabSelectsValue: true,
        valueComponent: _Value2['default'],
        valueKey: 'value'
      };
    },
    getInitialState: function getInitialState() {
      return {
        inputValue: '',
        isFocused: false,
        isLoading: false,
        isOpen: false,
        isPseudoFocused: false,
        required: false
      };
    },
    componentWillMount: function componentWillMount() {
      var valueArray = this.getValueArray(this.props.value);
      if (this.props.required) {
        this.setState({required: this.handleRequired(valueArray[0], this.props.multi)});
      }
    },
    componentDidMount: function componentDidMount() {
      if (this.props.autofocus) {
        this.focus();
      }
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      var valueArray = this.getValueArray(nextProps.value);
      if (nextProps.required) {
        this.setState({required: this.handleRequired(valueArray[0], nextProps.multi)});
      }
    },
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen !== this.state.isOpen) {
        var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
        handler && handler();
      }
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
      if (this.refs.menu && this.refs.focused && this.state.isOpen && !this.hasScrolledToOption) {
        var focusedOptionNode = _reactDom2['default'].findDOMNode(this.refs.focused);
        var menuNode = _reactDom2['default'].findDOMNode(this.refs.menu);
        menuNode.scrollTop = focusedOptionNode.offsetTop;
        this.hasScrolledToOption = true;
      } else if (!this.state.isOpen) {
        this.hasScrolledToOption = false;
      }
      if (this._scrollToFocusedOptionOnUpdate && this.refs.focused && this.refs.menu) {
        this._scrollToFocusedOptionOnUpdate = false;
        var focusedDOM = _reactDom2['default'].findDOMNode(this.refs.focused);
        var menuDOM = _reactDom2['default'].findDOMNode(this.refs.menu);
        var focusedRect = focusedDOM.getBoundingClientRect();
        var menuRect = menuDOM.getBoundingClientRect();
        if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
          menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
        }
      }
      if (this.props.scrollMenuIntoView && this.refs.menuContainer) {
        var menuContainerRect = this.refs.menuContainer.getBoundingClientRect();
        if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
          window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
        }
      }
      if (prevProps.disabled !== this.props.disabled) {
        this.setState({isFocused: false});
      }
    },
    focus: function focus() {
      if (!this.refs.input)
        return;
      this.refs.input.focus();
      if (this.props.openAfterFocus) {
        this.setState({isOpen: true});
      }
    },
    blurInput: function blurInput() {
      if (!this.refs.input)
        return;
      this.refs.input.blur();
    },
    handleTouchMove: function handleTouchMove(event) {
      this.dragging = true;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.dragging = false;
    },
    handleTouchEnd: function handleTouchEnd(event) {
      if (this.dragging)
        return;
      this.handleMouseDown(event);
    },
    handleTouchEndClearValue: function handleTouchEndClearValue(event) {
      if (this.dragging)
        return;
      this.clearValue(event);
    },
    handleMouseDown: function handleMouseDown(event) {
      if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      if (!this.props.searchable) {
        this.focus();
        return this.setState({isOpen: !this.state.isOpen});
      }
      if (this.state.isFocused) {
        this.setState({
          isOpen: true,
          isPseudoFocused: false
        });
      } else {
        this._openAfterFocus = true;
        this.focus();
      }
    },
    handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
      if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      if (!this.state.isOpen) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      this.closeMenu();
    },
    handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
      if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      this._openAfterFocus = true;
      this.focus();
    },
    closeMenu: function closeMenu() {
      this.setState({
        isOpen: false,
        isPseudoFocused: this.state.isFocused && !this.props.multi,
        inputValue: ''
      });
      this.hasScrolledToOption = false;
    },
    handleInputFocus: function handleInputFocus(event) {
      var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
      this.setState({
        isFocused: true,
        isOpen: isOpen
      });
      this._openAfterFocus = false;
    },
    handleInputBlur: function handleInputBlur(event) {
      if (this.refs.menu && document.activeElement === this.refs.menu) {
        this.focus();
        return;
      }
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
      var onBlurredState = {
        isFocused: false,
        isOpen: false,
        isPseudoFocused: false
      };
      if (this.props.onBlurResetsInput) {
        onBlurredState.inputValue = '';
      }
      this.setState(onBlurredState);
    },
    handleInputChange: function handleInputChange(event) {
      var newInputValue = event.target.value;
      if (this.state.inputValue !== event.target.value && this.props.onInputChange) {
        var nextState = this.props.onInputChange(newInputValue);
        if (nextState != null) {
          newInputValue = '' + nextState;
        }
      }
      this.setState({
        isOpen: true,
        isPseudoFocused: false,
        inputValue: newInputValue
      });
    },
    handleKeyDown: function handleKeyDown(event) {
      if (this.props.disabled)
        return;
      switch (event.keyCode) {
        case 8:
          if (!this.state.inputValue && this.props.backspaceRemoves) {
            event.preventDefault();
            this.popValue();
          }
          return;
        case 9:
          if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
            return;
          }
          this.selectFocusedOption();
          return;
        case 13:
          if (!this.state.isOpen)
            return;
          event.stopPropagation();
          this.selectFocusedOption();
          break;
        case 27:
          if (this.state.isOpen) {
            this.closeMenu();
          } else if (this.props.clearable && this.props.escapeClearsValue) {
            this.clearValue(event);
          }
          break;
        case 38:
          this.focusPreviousOption();
          break;
        case 40:
          this.focusNextOption();
          break;
        default:
          return;
      }
      event.preventDefault();
    },
    handleValueClick: function handleValueClick(option, event) {
      if (!this.props.onValueClick)
        return;
      this.props.onValueClick(option, event);
    },
    handleMenuScroll: function handleMenuScroll(event) {
      if (!this.props.onMenuScrollToBottom)
        return;
      var target = event.target;
      if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
        this.props.onMenuScrollToBottom();
      }
    },
    handleRequired: function handleRequired(value, multi) {
      if (!value)
        return true;
      return multi ? value.length === 0 : Object.keys(value).length === 0;
    },
    getOptionLabel: function getOptionLabel(op) {
      return op[this.props.labelKey];
    },
    getValueArray: function getValueArray(value) {
      if (this.props.multi) {
        if (typeof value === 'string')
          value = value.split(this.props.delimiter);
        if (!Array.isArray(value)) {
          if (value === null || value === undefined)
            return [];
          value = [value];
        }
        return value.map(this.expandValue).filter(function(i) {
          return i;
        });
      }
      var expandedValue = this.expandValue(value);
      return expandedValue ? [expandedValue] : [];
    },
    expandValue: function expandValue(value) {
      if (typeof value !== 'string' && typeof value !== 'number')
        return value;
      var _props = this.props;
      var options = _props.options;
      var valueKey = _props.valueKey;
      if (!options)
        return;
      for (var i = 0; i < options.length; i++) {
        if (options[i][valueKey] === value)
          return options[i];
      }
    },
    setValue: function setValue(value) {
      var _this = this;
      if (this.props.autoBlur) {
        this.blurInput();
      }
      if (!this.props.onChange)
        return;
      if (this.props.required) {
        var required = this.handleRequired(value, this.props.multi);
        this.setState({required: required});
      }
      if (this.props.simpleValue && value) {
        value = this.props.multi ? value.map(function(i) {
          return i[_this.props.valueKey];
        }).join(this.props.delimiter) : value[this.props.valueKey];
      }
      this.props.onChange(value);
    },
    selectValue: function selectValue(value) {
      this.hasScrolledToOption = false;
      if (this.props.multi) {
        this.addValue(value);
        this.setState({inputValue: ''});
      } else {
        this.setValue(value);
        this.setState({
          isOpen: false,
          inputValue: '',
          isPseudoFocused: this.state.isFocused
        });
      }
    },
    addValue: function addValue(value) {
      var valueArray = this.getValueArray(this.props.value);
      this.setValue(valueArray.concat(value));
    },
    popValue: function popValue() {
      var valueArray = this.getValueArray(this.props.value);
      if (!valueArray.length)
        return;
      if (valueArray[valueArray.length - 1].clearableValue === false)
        return;
      this.setValue(valueArray.slice(0, valueArray.length - 1));
    },
    removeValue: function removeValue(value) {
      var valueArray = this.getValueArray(this.props.value);
      this.setValue(valueArray.filter(function(i) {
        return i !== value;
      }));
      this.focus();
    },
    clearValue: function clearValue(event) {
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      this.setValue(this.props.resetValue);
      this.setState({
        isOpen: false,
        inputValue: ''
      }, this.focus);
    },
    focusOption: function focusOption(option) {
      this.setState({focusedOption: option});
    },
    focusNextOption: function focusNextOption() {
      this.focusAdjacentOption('next');
    },
    focusPreviousOption: function focusPreviousOption() {
      this.focusAdjacentOption('previous');
    },
    focusAdjacentOption: function focusAdjacentOption(dir) {
      var options = this._visibleOptions.filter(function(i) {
        return !i.disabled;
      });
      this._scrollToFocusedOptionOnUpdate = true;
      if (!this.state.isOpen) {
        this.setState({
          isOpen: true,
          inputValue: '',
          focusedOption: this._focusedOption || options[dir === 'next' ? 0 : options.length - 1]
        });
        return;
      }
      if (!options.length)
        return;
      var focusedIndex = -1;
      for (var i = 0; i < options.length; i++) {
        if (this._focusedOption === options[i]) {
          focusedIndex = i;
          break;
        }
      }
      var focusedOption = options[0];
      if (dir === 'next' && focusedIndex > -1 && focusedIndex < options.length - 1) {
        focusedOption = options[focusedIndex + 1];
      } else if (dir === 'previous') {
        if (focusedIndex > 0) {
          focusedOption = options[focusedIndex - 1];
        } else {
          focusedOption = options[options.length - 1];
        }
      }
      this.setState({focusedOption: focusedOption});
    },
    selectFocusedOption: function selectFocusedOption() {
      if (this._focusedOption) {
        return this.selectValue(this._focusedOption);
      }
    },
    renderLoading: function renderLoading() {
      if (!this.props.isLoading)
        return;
      return _react2['default'].createElement('span', {
        className: 'Select-loading-zone',
        'aria-hidden': 'true'
      }, _react2['default'].createElement('span', {className: 'Select-loading'}));
    },
    renderValue: function renderValue(valueArray, isOpen) {
      var _this2 = this;
      var renderLabel = this.props.valueRenderer || this.getOptionLabel;
      var ValueComponent = this.props.valueComponent;
      if (!valueArray.length) {
        return !this.state.inputValue ? _react2['default'].createElement('div', {className: 'Select-placeholder'}, this.props.placeholder) : null;
      }
      var onClick = this.props.onValueClick ? this.handleValueClick : null;
      if (this.props.multi) {
        return valueArray.map(function(value, i) {
          return _react2['default'].createElement(ValueComponent, {
            disabled: _this2.props.disabled || value.clearableValue === false,
            key: 'value-' + i + '-' + value[_this2.props.valueKey],
            onClick: onClick,
            onRemove: _this2.removeValue,
            value: value
          }, renderLabel(value));
        });
      } else if (!this.state.inputValue) {
        if (isOpen)
          onClick = null;
        return _react2['default'].createElement(ValueComponent, {
          disabled: this.props.disabled,
          onClick: onClick,
          value: valueArray[0]
        }, renderLabel(valueArray[0]));
      }
    },
    renderInput: function renderInput(valueArray) {
      if (this.props.inputRenderer) {
        return this.props.inputRenderer();
      } else {
        var className = (0, _classnames2['default'])('Select-input', this.props.inputProps.className);
        if (this.props.disabled || !this.props.searchable) {
          return _react2['default'].createElement('div', _extends({}, this.props.inputProps, {
            className: className,
            tabIndex: this.props.tabIndex || 0,
            onBlur: this.handleInputBlur,
            onFocus: this.handleInputFocus,
            ref: 'input',
            style: {
              border: 0,
              width: 1,
              display: 'inline-block'
            }
          }));
        }
        if (this.props.autosize) {
          return _react2['default'].createElement(_reactInputAutosize2['default'], _extends({}, this.props.inputProps, {
            className: className,
            tabIndex: this.props.tabIndex,
            onBlur: this.handleInputBlur,
            onChange: this.handleInputChange,
            onFocus: this.handleInputFocus,
            minWidth: '5',
            ref: 'input',
            required: this.state.required,
            value: this.state.inputValue
          }));
        }
        return _react2['default'].createElement('div', {className: className}, _react2['default'].createElement('input', _extends({}, this.props.inputProps, {
          tabIndex: this.props.tabIndex,
          onBlur: this.handleInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          ref: 'input',
          required: this.state.required,
          value: this.state.inputValue
        })));
      }
    },
    renderClear: function renderClear() {
      if (!this.props.clearable || !this.props.value || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading)
        return;
      return _react2['default'].createElement('span', {
        className: 'Select-clear-zone',
        title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
        'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
        onMouseDown: this.clearValue,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEndClearValue
      }, _react2['default'].createElement('span', {
        className: 'Select-clear',
        dangerouslySetInnerHTML: {__html: '&times;'}
      }));
    },
    renderArrow: function renderArrow() {
      return _react2['default'].createElement('span', {
        className: 'Select-arrow-zone',
        onMouseDown: this.handleMouseDownOnArrow
      }, _react2['default'].createElement('span', {
        className: 'Select-arrow',
        onMouseDown: this.handleMouseDownOnArrow
      }));
    },
    filterOptions: function filterOptions(excludeOptions) {
      var _this3 = this;
      var filterValue = this.state.inputValue;
      var options = this.props.options || [];
      if (typeof this.props.filterOptions === 'function') {
        return this.props.filterOptions.call(this, options, filterValue, excludeOptions);
      } else if (this.props.filterOptions) {
        if (this.props.ignoreAccents) {
          filterValue = (0, _utilsStripDiacritics2['default'])(filterValue);
        }
        if (this.props.ignoreCase) {
          filterValue = filterValue.toLowerCase();
        }
        if (excludeOptions)
          excludeOptions = excludeOptions.map(function(i) {
            return i[_this3.props.valueKey];
          });
        return options.filter(function(option) {
          if (excludeOptions && excludeOptions.indexOf(option[_this3.props.valueKey]) > -1)
            return false;
          if (_this3.props.filterOption)
            return _this3.props.filterOption.call(_this3, option, filterValue);
          if (!filterValue)
            return true;
          var valueTest = String(option[_this3.props.valueKey]);
          var labelTest = String(option[_this3.props.labelKey]);
          if (_this3.props.ignoreAccents) {
            if (_this3.props.matchProp !== 'label')
              valueTest = (0, _utilsStripDiacritics2['default'])(valueTest);
            if (_this3.props.matchProp !== 'value')
              labelTest = (0, _utilsStripDiacritics2['default'])(labelTest);
          }
          if (_this3.props.ignoreCase) {
            if (_this3.props.matchProp !== 'label')
              valueTest = valueTest.toLowerCase();
            if (_this3.props.matchProp !== 'value')
              labelTest = labelTest.toLowerCase();
          }
          return _this3.props.matchPos === 'start' ? _this3.props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || _this3.props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : _this3.props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || _this3.props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
        });
      } else {
        return options;
      }
    },
    renderMenu: function renderMenu(options, valueArray, focusedOption) {
      var _this4 = this;
      if (options && options.length) {
        if (this.props.menuRenderer) {
          return this.props.menuRenderer({
            focusedOption: focusedOption,
            focusOption: this.focusOption,
            labelKey: this.props.labelKey,
            options: options,
            selectValue: this.selectValue,
            valueArray: valueArray
          });
        } else {
          var _ret = (function() {
            var Option = _this4.props.optionComponent;
            var renderLabel = _this4.props.optionRenderer || _this4.getOptionLabel;
            return {v: options.map(function(option, i) {
                var isSelected = valueArray && valueArray.indexOf(option) > -1;
                var isFocused = option === focusedOption;
                var optionRef = isFocused ? 'focused' : null;
                var optionClass = (0, _classnames2['default'])(_this4.props.optionClassName, {
                  'Select-option': true,
                  'is-selected': isSelected,
                  'is-focused': isFocused,
                  'is-disabled': option.disabled
                });
                return _react2['default'].createElement(Option, {
                  className: optionClass,
                  isDisabled: option.disabled,
                  isFocused: isFocused,
                  key: 'option-' + i + '-' + option[_this4.props.valueKey],
                  onSelect: _this4.selectValue,
                  onFocus: _this4.focusOption,
                  option: option,
                  isSelected: isSelected,
                  ref: optionRef
                }, renderLabel(option));
              })};
          })();
          if (typeof _ret === 'object')
            return _ret.v;
        }
      } else if (this.props.noResultsText) {
        return _react2['default'].createElement('div', {className: 'Select-noresults'}, this.props.noResultsText);
      } else {
        return null;
      }
    },
    renderHiddenField: function renderHiddenField(valueArray) {
      var _this5 = this;
      if (!this.props.name)
        return;
      if (this.props.joinValues) {
        var value = valueArray.map(function(i) {
          return stringifyValue(i[_this5.props.valueKey]);
        }).join(this.props.delimiter);
        return _react2['default'].createElement('input', {
          type: 'hidden',
          ref: 'value',
          name: this.props.name,
          value: value,
          disabled: this.props.disabled
        });
      }
      return valueArray.map(function(item, index) {
        return _react2['default'].createElement('input', {
          key: 'hidden.' + index,
          type: 'hidden',
          ref: 'value' + index,
          name: _this5.props.name,
          value: stringifyValue(item[_this5.props.valueKey]),
          disabled: _this5.props.disabled
        });
      });
    },
    getFocusableOption: function getFocusableOption(selectedOption) {
      var options = this._visibleOptions;
      if (!options.length)
        return;
      var focusedOption = this.state.focusedOption || selectedOption;
      if (focusedOption && options.indexOf(focusedOption) > -1)
        return focusedOption;
      for (var i = 0; i < options.length; i++) {
        if (!options[i].disabled)
          return options[i];
      }
    },
    renderOuter: function renderOuter(options, valueArray, focusedOption) {
      var menu = this.renderMenu(options, valueArray, focusedOption);
      if (!menu) {
        return null;
      }
      return _react2['default'].createElement('div', {
        ref: 'menuContainer',
        className: 'Select-menu-outer',
        style: this.props.menuContainerStyle
      }, _react2['default'].createElement('div', {
        ref: 'menu',
        className: 'Select-menu',
        style: this.props.menuStyle,
        onScroll: this.handleMenuScroll,
        onMouseDown: this.handleMouseDownOnMenu
      }, menu));
    },
    render: function render() {
      var valueArray = this.getValueArray(this.props.value);
      var options = this._visibleOptions = this.filterOptions(this.props.multi ? valueArray : null);
      var isOpen = this.state.isOpen;
      if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue)
        isOpen = false;
      var focusedOption = this._focusedOption = this.getFocusableOption(valueArray[0]);
      var className = (0, _classnames2['default'])('Select', this.props.className, {
        'Select--multi': this.props.multi,
        'Select--single': !this.props.multi,
        'is-disabled': this.props.disabled,
        'is-focused': this.state.isFocused,
        'is-loading': this.props.isLoading,
        'is-open': isOpen,
        'is-pseudo-focused': this.state.isPseudoFocused,
        'is-searchable': this.props.searchable,
        'has-value': valueArray.length
      });
      return _react2['default'].createElement('div', {
        ref: 'wrapper',
        className: className,
        style: this.props.wrapperStyle
      }, this.renderHiddenField(valueArray), _react2['default'].createElement('div', {
        ref: 'control',
        className: 'Select-control',
        style: this.props.style,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onTouchEnd: this.handleTouchEnd,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove
      }, this.renderValue(valueArray, isOpen), this.renderInput(valueArray), this.renderLoading(), this.renderClear(), this.renderArrow()), isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null);
    }
  });
  exports['default'] = Select;
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:strict-uri-encode@1.1.0.json", [], false, function() {
  return {
    "main": "index",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic("npm:strict-uri-encode@1.1.0/index.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  };
  return module.exports;
});

System.registerDynamic("npm:query-string@4.1.0.json", [], false, function() {
  return {
    "main": "index",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic("npm:query-string@4.1.0/index.js", ["strict-uri-encode"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var strictUriEncode = $__require('strict-uri-encode');
  function encode(value, strict) {
    return strict ? strictUriEncode(value) : encodeURIComponent(value);
  }
  exports.extract = function(str) {
    return str.split('?')[1] || '';
  };
  exports.parse = function(str) {
    var ret = Object.create(null);
    if (typeof str !== 'string') {
      return ret;
    }
    str = str.trim().replace(/^(\?|#|&)/, '');
    if (!str) {
      return ret;
    }
    str.split('&').forEach(function(param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;
      key = decodeURIComponent(key);
      val = val === undefined ? null : decodeURIComponent(val);
      if (ret[key] === undefined) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
    });
    return ret;
  };
  exports.stringify = function(obj, opts) {
    opts = opts || {};
    var strict = opts.strict !== false;
    return obj ? Object.keys(obj).sort().map(function(key) {
      var val = obj[key];
      if (val === undefined) {
        return '';
      }
      if (val === null) {
        return key;
      }
      if (Array.isArray(val)) {
        var result = [];
        val.slice().sort().forEach(function(val2) {
          if (val2 === undefined) {
            return;
          }
          if (val2 === null) {
            result.push(encode(key, strict));
          } else {
            result.push(encode(key, strict) + '=' + encode(val2, strict));
          }
        });
        return result.join('&');
      }
      return encode(key, strict) + '=' + encode(val, strict);
    }).filter(function(x) {
      return x.length > 0;
    }).join('&') : '';
  };
  return module.exports;
});

System.register("bin/app.js", ["react", "react-dom", "react-select", "query-string"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var React,
      ReactDOM,
      react_select_1,
      query_string_1;
  var users,
      idToName,
      nameToId,
      GameRender,
      defaultState,
      GUI;
  function getUnique(data, attribute) {
    return [...new Set(Object.keys(data).map((k) => data[k]).map((game) => game[attribute]))];
  }
  function serializeState(state) {
    const obj = {
      map: state.mapFilter && state.mapFilter.map((x) => x.value).join("."),
      players: state.playerFilter && state.playerFilter.map((x) => x.value).join("."),
      winner: state.winnerFilter && state.winnerFilter.value,
      looser: state.looserFilter && state.looserFilter.value
    };
    for (const x in obj)
      if (!obj[x])
        delete obj[x];
    console.log(obj);
    return query_string_1.default.stringify(obj);
  }
  function deserializeState(state) {
    const obj = query_string_1.default.parse(state);
    return {
      displayLimit: 200,
      mapFilter: obj.map ? obj.map.split(".").map((x) => ({
        value: x,
        label: x
      })) : null,
      playerFilter: obj.players ? obj.players.split(".").map((x) => ({
        value: +x,
        label: idToName.get(+x)
      })) : null,
      winnerFilter: obj.winner ? {
        value: +obj.winner,
        label: idToName.get(+obj.winner)
      } : null,
      looserFilter: obj.looser ? {
        value: +obj.looser,
        label: idToName.get(+obj.looser)
      } : null
    };
  }
  function render(stuff) {
    window.root = ReactDOM.render(stuff, document.querySelector("#root"));
  }
  function jsonOrError(resp) {
    if (resp.ok)
      return resp.json();
    else
      throw resp.status + " " + resp.statusText;
  }
  return {
    setters: [function(React_1) {
      React = React_1;
    }, function(ReactDOM_1) {
      ReactDOM = ReactDOM_1;
    }, function(react_select_1_1) {
      react_select_1 = react_select_1_1;
    }, function(query_string_1_1) {
      query_string_1 = query_string_1_1;
    }],
    execute: function() {
      idToName = new Map(), nameToId = new Map();
      GameRender = class GameRender extends React.Component {
        render() {
          const {data,
            id} = this.props;
          const hrefs = data.ranking.map((id) => React.createElement("a", {href: `https://codeit.itdhosting.de:1337/profile.php?id=${id}`}, idToName.get(id)));
          return React.createElement("tr", null, React.createElement("td", null, id), React.createElement("td", null, data.date), React.createElement("td", null, data.map), React.createElement("td", null, data.mapSize), React.createElement("td", null, data.rounds), React.createElement("td", null, hrefs[0], " (", data.resources[0], ") "), React.createElement("td", null, hrefs[1], " (", data.resources[1], ") "), React.createElement("td", null, React.createElement("a", {href: `https://codeit.itdhosting.de:1337/replay.php?game=${id}`}, "Show Replay")));
        }
      };
      defaultState = {
        displayLimit: 200,
        mapFilter: [],
        playerFilter: [],
        winnerFilter: null,
        looserFilter: null
      };
      GUI = class GUI extends React.Component {
        constructor(props) {
          super(props);
          const data = props.data;
          this.maps = getUnique(data, "map").map((map) => ({
            value: map,
            label: map
          }));
          this.players = users.map((user) => ({
            value: user.id,
            label: user.name
          }));
          this.state = defaultState;
          this.ids = Object.keys(data).map((x) => +x).sort((a, b) => b - a);
        }
        componentWillUpdate(props, newState) {
          if (this.state.displayLimit == newState.displayLimit)
            newState.displayLimit = defaultState.displayLimit;
        }
        render() {
          const data = this.props.data;
          const {mapFilter,
            playerFilter,
            winnerFilter,
            looserFilter,
            displayLimit} = this.state;
          let ids = [];
          for (const id of this.ids) {
            const game = data[id];
            if ((!mapFilter || mapFilter.length == 0 || mapFilter.some((selectedMap) => game.map === selectedMap.value)) && (!playerFilter || playerFilter.length == 0 || playerFilter.every((player) => game.ranking.indexOf(+player.value) >= 0)) && (!winnerFilter || game.ranking[0] === winnerFilter.value) && (!looserFilter || game.ranking[1] === looserFilter.value)) {
              ids.push(id);
            }
          }
          const length = ids.length;
          ids = ids.slice(0, displayLimit);
          return React.createElement("div", null, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-sm-3"}, React.createElement("label", null, "Filter map"), React.createElement(react_select_1.default, {
            multi: true,
            value: mapFilter,
            options: this.maps,
            onChange: (v) => this.setState({mapFilter: v})
          })), React.createElement("div", {className: "col-sm-3"}, React.createElement("label", null, "Filter players"), React.createElement(react_select_1.default, {
            multi: true,
            value: playerFilter,
            options: this.players,
            onChange: (v) => this.setState({playerFilter: v})
          })), React.createElement("div", {className: "col-sm-3"}, React.createElement("label", null, "Filter winner"), React.createElement(react_select_1.default, {
            value: winnerFilter,
            options: playerFilter && playerFilter.length == 2 ? playerFilter : this.players,
            onChange: (v) => this.setState({winnerFilter: v})
          })), React.createElement("div", {className: "col-sm-3"}, React.createElement("label", null, "Filter looser"), React.createElement(react_select_1.default, {
            value: looserFilter,
            options: playerFilter && playerFilter.length == 2 ? playerFilter : this.players,
            onChange: (v) => this.setState({looserFilter: v})
          }))), React.createElement("hr", null), React.createElement("div", {className: "alert alert-info"}, "Found ", length, " games"), React.createElement("table", {className: "table table-responsive"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Date"), React.createElement("th", null, "Map"), React.createElement("th", null, "Map Size"), React.createElement("th", null, "Rounds"), React.createElement("th", null, "Winner (Resources) "), React.createElement("th", null, "Looser (Resources) "), React.createElement("th", null, "Replay"))), React.createElement("tbody", null, ids.map((id) => React.createElement(GameRender, {
            key: id,
            id: +id,
            data: data[id]
          })))), length > displayLimit ? React.createElement("div", {className: "alert alert-danger"}, length - displayLimit, " more not displayed.", " ", React.createElement("a", {
            href: "#",
            onClick: (e) => {
              e.preventDefault();
              this.setState({displayLimit: displayLimit * 2});
            }
          }, "Show more")) : "");
        }
        componentDidUpdate() {
          history.replaceState(null, null, "?" + serializeState(this.state));
        }
      };
      render(React.createElement("div", null, "Loading json..."));
      fetch("../data/usernames.json").then(jsonOrError).then((data) => {
        users = data;
        for (const {id,
          name} of data) {
          idToName.set(id, name);
          nameToId.set(name, id);
        }
      }).then(() => defaultState = deserializeState(location.search)).then(() => fetch("../data/games.json")).then(jsonOrError).then((data) => render(React.createElement(GUI, {data: data}))).catch((e) => {
        console.error(e);
        render(React.createElement("div", {class: "alert alert-danger"}, e.toString()));
      });
    }
  };
});

//# sourceMappingURL=bundle.js.map