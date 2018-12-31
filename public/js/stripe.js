(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/stripe"],{

/***/ "./resources/assets/js/stripe.js":
/*!***************************************!*\
  !*** ./resources/assets/js/stripe.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var elements = stripe.elements(); // Custom styling can be passed to options when creating an Element.\n// (Note that this demo uses a wider set of styles than the guide below.)\n\nvar style = {\n  base: {\n    color: '#32325d',\n    lineHeight: '18px',\n    fontFamily: '\"Helvetica Neue\", Helvetica, sans-serif',\n    fontSmoothing: 'antialiased',\n    fontSize: '16px',\n    '::placeholder': {\n      color: '#aab7c4'\n    }\n  },\n  invalid: {\n    color: '#fa755a',\n    iconColor: '#fa755a'\n  }\n}; // Create an instance of the card Element\n\nvar card = elements.create('card', {\n  hidePostalCode: true,\n  style: style\n}); // Add an instance of the card Element into the `card-element` <div>\n\ncard.mount('#card-element'); // Handle real-time validation errors from the card Element.\n\ncard.addEventListener('change', function (event) {\n  var displayError = document.getElementById('card-errors');\n\n  if (event.error) {\n    displayError.textContent = event.error.message;\n  } else {\n    displayError.textContent = '';\n  }\n}); // Handle form submission\n\nvar form = document.getElementById('payment-form');\nform.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var extraDetails = {\n    name: this.querySelector('input[name=cardholder-name]').value,\n    address_zip: this.querySelector('input[name=address-zip]').value\n  };\n  stripe.createToken(card, extraDetails).then(function (result) {\n    if (result.error) {\n      // Inform the user if there was an error\n      var errorElement = document.getElementById('card-errors');\n      errorElement.textContent = result.error.message;\n    } else {\n      // Send the token to your server\n      stripeTokenHandler(result.token);\n    }\n  });\n});\n\nfunction stripeTokenHandler(token) {\n  // Insert the token ID into the form so it gets submitted to the server\n  var form = document.getElementById('payment-form');\n  var hiddenInput = document.createElement('input');\n  hiddenInput.setAttribute('type', 'hidden');\n  hiddenInput.setAttribute('name', 'stripeToken');\n  hiddenInput.setAttribute('value', token.id);\n  form.appendChild(hiddenInput); // Submit the form\n\n  form.submit();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0cmlwZS5qcz9hZmNhIl0sIm5hbWVzIjpbImVsZW1lbnRzIiwic3RyaXBlIiwic3R5bGUiLCJiYXNlIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTbW9vdGhpbmciLCJmb250U2l6ZSIsImludmFsaWQiLCJpY29uQ29sb3IiLCJjYXJkIiwiY3JlYXRlIiwiaGlkZVBvc3RhbENvZGUiLCJtb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRpc3BsYXlFcnJvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnJvciIsInRleHRDb250ZW50IiwibWVzc2FnZSIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImV4dHJhRGV0YWlscyIsIm5hbWUiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJhZGRyZXNzX3ppcCIsImNyZWF0ZVRva2VuIiwidGhlbiIsInJlc3VsdCIsImVycm9yRWxlbWVudCIsInN0cmlwZVRva2VuSGFuZGxlciIsInRva2VuIiwiaGlkZGVuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsUUFBUSxHQUFHQyxNQUFNLENBQUNELFFBQVAsRUFBZixDLENBRUE7QUFDQTs7QUFDQSxJQUFJRSxLQUFLLEdBQUc7QUFDUkMsTUFBSSxFQUFFO0FBQ0ZDLFNBQUssRUFBRSxTQURMO0FBRUZDLGNBQVUsRUFBRSxNQUZWO0FBR0ZDLGNBQVUsRUFBRSx5Q0FIVjtBQUlGQyxpQkFBYSxFQUFFLGFBSmI7QUFLRkMsWUFBUSxFQUFFLE1BTFI7QUFNRixxQkFBaUI7QUFDYkosV0FBSyxFQUFFO0FBRE07QUFOZixHQURFO0FBV1JLLFNBQU8sRUFBRTtBQUNMTCxTQUFLLEVBQUUsU0FERjtBQUVMTSxhQUFTLEVBQUU7QUFGTjtBQVhELENBQVosQyxDQWlCQTs7QUFDQSxJQUFJQyxJQUFJLEdBQUdYLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUMvQkMsZ0JBQWMsRUFBRSxJQURlO0FBRS9CWCxPQUFLLEVBQUVBO0FBRndCLENBQXhCLENBQVgsQyxDQUtBOztBQUNBUyxJQUFJLENBQUNHLEtBQUwsQ0FBVyxlQUFYLEUsQ0FFQTs7QUFDQUgsSUFBSSxDQUFDSSxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFTQyxLQUFULEVBQWdCO0FBQzVDLE1BQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQW5COztBQUNBLE1BQUlILEtBQUssQ0FBQ0ksS0FBVixFQUFpQjtBQUNiSCxnQkFBWSxDQUFDSSxXQUFiLEdBQTJCTCxLQUFLLENBQUNJLEtBQU4sQ0FBWUUsT0FBdkM7QUFDSCxHQUZELE1BRU87QUFDSEwsZ0JBQVksQ0FBQ0ksV0FBYixHQUEyQixFQUEzQjtBQUNIO0FBQ0osQ0FQRCxFLENBU0E7O0FBQ0EsSUFBSUUsSUFBSSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBWDtBQUNBSSxJQUFJLENBQUNSLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDNUNBLE9BQUssQ0FBQ1EsY0FBTjtBQUVBLE1BQUlDLFlBQVksR0FBRztBQUNmQyxRQUFJLEVBQUUsS0FBS0MsYUFBTCxDQUFtQiw2QkFBbkIsRUFBa0RDLEtBRHpDO0FBRWZDLGVBQVcsRUFBRSxLQUFLRixhQUFMLENBQW1CLHlCQUFuQixFQUE4Q0M7QUFGNUMsR0FBbkI7QUFLQTNCLFFBQU0sQ0FBQzZCLFdBQVAsQ0FBbUJuQixJQUFuQixFQUF5QmMsWUFBekIsRUFBdUNNLElBQXZDLENBQTRDLFVBQVNDLE1BQVQsRUFBaUI7QUFDekQsUUFBSUEsTUFBTSxDQUFDWixLQUFYLEVBQWtCO0FBQ2Q7QUFDQSxVQUFJYSxZQUFZLEdBQUdmLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBYyxrQkFBWSxDQUFDWixXQUFiLEdBQTJCVyxNQUFNLENBQUNaLEtBQVAsQ0FBYUUsT0FBeEM7QUFDSCxLQUpELE1BSU87QUFDSDtBQUNBWSx3QkFBa0IsQ0FBQ0YsTUFBTSxDQUFDRyxLQUFSLENBQWxCO0FBQ0g7QUFDSixHQVREO0FBVUgsQ0FsQkQ7O0FBb0JBLFNBQVNELGtCQUFULENBQTRCQyxLQUE1QixFQUFtQztBQUMvQjtBQUNBLE1BQUlaLElBQUksR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQVg7QUFDQSxNQUFJaUIsV0FBVyxHQUFHbEIsUUFBUSxDQUFDbUIsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQUNBRCxhQUFXLENBQUNFLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsUUFBakM7QUFDQUYsYUFBVyxDQUFDRSxZQUFaLENBQXlCLE1BQXpCLEVBQWlDLGFBQWpDO0FBQ0FGLGFBQVcsQ0FBQ0UsWUFBWixDQUF5QixPQUF6QixFQUFrQ0gsS0FBSyxDQUFDSSxFQUF4QztBQUNBaEIsTUFBSSxDQUFDaUIsV0FBTCxDQUFpQkosV0FBakIsRUFQK0IsQ0FTL0I7O0FBQ0FiLE1BQUksQ0FBQ2tCLE1BQUw7QUFDSCIsImZpbGUiOiIuL3Jlc291cmNlcy9hc3NldHMvanMvc3RyaXBlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGVsZW1lbnRzID0gc3RyaXBlLmVsZW1lbnRzKCk7XG5cbi8vIEN1c3RvbSBzdHlsaW5nIGNhbiBiZSBwYXNzZWQgdG8gb3B0aW9ucyB3aGVuIGNyZWF0aW5nIGFuIEVsZW1lbnQuXG4vLyAoTm90ZSB0aGF0IHRoaXMgZGVtbyB1c2VzIGEgd2lkZXIgc2V0IG9mIHN0eWxlcyB0aGFuIHRoZSBndWlkZSBiZWxvdy4pXG52YXIgc3R5bGUgPSB7XG4gICAgYmFzZToge1xuICAgICAgICBjb2xvcjogJyMzMjMyNWQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjYWFiN2M0J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbnZhbGlkOiB7XG4gICAgICAgIGNvbG9yOiAnI2ZhNzU1YScsXG4gICAgICAgIGljb25Db2xvcjogJyNmYTc1NWEnXG4gICAgfVxufTtcblxuLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBjYXJkIEVsZW1lbnRcbnZhciBjYXJkID0gZWxlbWVudHMuY3JlYXRlKCdjYXJkJywge1xuICAgIGhpZGVQb3N0YWxDb2RlOiB0cnVlLFxuICAgIHN0eWxlOiBzdHlsZVxufSk7XG5cbi8vIEFkZCBhbiBpbnN0YW5jZSBvZiB0aGUgY2FyZCBFbGVtZW50IGludG8gdGhlIGBjYXJkLWVsZW1lbnRgIDxkaXY+XG5jYXJkLm1vdW50KCcjY2FyZC1lbGVtZW50Jyk7XG5cbi8vIEhhbmRsZSByZWFsLXRpbWUgdmFsaWRhdGlvbiBlcnJvcnMgZnJvbSB0aGUgY2FyZCBFbGVtZW50LlxuY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBkaXNwbGF5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1lcnJvcnMnKTtcbiAgICBpZiAoZXZlbnQuZXJyb3IpIHtcbiAgICAgICAgZGlzcGxheUVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3IubWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG59KTtcblxuLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxudmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudC1mb3JtJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBleHRyYURldGFpbHMgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1jYXJkaG9sZGVyLW5hbWVdJykudmFsdWUsXG4gICAgICAgIGFkZHJlc3NfemlwOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9YWRkcmVzcy16aXBdJykudmFsdWUsXG4gICAgfTtcblxuICAgIHN0cmlwZS5jcmVhdGVUb2tlbihjYXJkLCBleHRyYURldGFpbHMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIEluZm9ybSB0aGUgdXNlciBpZiB0aGVyZSB3YXMgYW4gZXJyb3JcbiAgICAgICAgICAgIHZhciBlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1lcnJvcnMnKTtcbiAgICAgICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IHJlc3VsdC5lcnJvci5tZXNzYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2VuZCB0aGUgdG9rZW4gdG8geW91ciBzZXJ2ZXJcbiAgICAgICAgICAgIHN0cmlwZVRva2VuSGFuZGxlcihyZXN1bHQudG9rZW4pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gc3RyaXBlVG9rZW5IYW5kbGVyKHRva2VuKSB7XG4gICAgLy8gSW5zZXJ0IHRoZSB0b2tlbiBJRCBpbnRvIHRoZSBmb3JtIHNvIGl0IGdldHMgc3VibWl0dGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50LWZvcm0nKTtcbiAgICB2YXIgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RyaXBlVG9rZW4nKTtcbiAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9rZW4uaWQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXQpO1xuXG4gICAgLy8gU3VibWl0IHRoZSBmb3JtXG4gICAgZm9ybS5zdWJtaXQoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/js/stripe.js\n");

/***/ }),

/***/ 2:
/*!*********************************************!*\
  !*** multi ./resources/assets/js/stripe.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/timothy/projects/monica/resources/assets/js/stripe.js */"./resources/assets/js/stripe.js");


/***/ })

},[[2,"/js/manifest"]]]);