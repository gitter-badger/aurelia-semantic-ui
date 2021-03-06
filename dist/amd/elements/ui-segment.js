define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Segment - http://semantic-ui.com/elements/segment.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UISegmentsAttribute = exports.UISegmentAttribute = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _dec3, _class4;

	let UISegmentAttribute = exports.UISegmentAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }segment`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec(_class = (_class2 = class UISegmentAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'loading', _descriptor, this), _initDefineProp(this, 'disabled', _descriptor2, this), _initDefineProp(this, 'color', _descriptor3, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UISegmentsAttribute = exports.UISegmentsAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }segments`), _dec3(_class4 = class UISegmentsAttribute extends _uiAttribute.UIAttribute {}) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSwwREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsT0FBN0IsQ0FBakIsV0FLQywrQkFBYyxHQUFHLHFCQUFVLFlBQVYsNEJBSlosTUFBTSxrQkFBTixrQ0FBNkM7Ozs7Ozs7RUFBN0M7OztVQUVvQjs7Ozs7VUFDQzs7Ozs7O0tBT2YsNkRBRFosdUNBQWlCLENBQUMsR0FBRSxxQkFBVSxlQUFWLEVBQTBCLFFBQTdCLENBQWpCLG1CQUNNLE1BQU0sbUJBQU4sa0NBQThDLEVBQTlDIiwiZmlsZSI6ImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFNlZ21lbnQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3NlZ21lbnQuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjb21wdXRlZEZyb20sIGJpbmRhYmxlLCBpbmplY3QsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zZWdtZW50YCApXG5leHBvcnQgY2xhc3MgVUlTZWdtZW50QXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXNlZ21lbnRzYCApXG5leHBvcnQgY2xhc3MgVUlTZWdtZW50c0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
