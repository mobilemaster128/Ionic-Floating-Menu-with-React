import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Empty. Add your own CSS if you like
  'ion-floating-menu #floating-menu': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  '#floating-menu iconmenu-icon': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }]
  },
  '#floating-menu limenu-item': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'backgroundColor': 'transparent !important'
  },
  '#floating-menuactive limenu-item': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'backgroundColor': 'transparent !important'
  },
  '#floating-menuactive lileft-item': {
    'transform': 'translate(-100px, -70px) !important',
    'WebkitTransform': 'translate(-100px, -70px) !important',
    'transitionDelay': '50ms !important',
    'WebkitTransitionDelay': '50ms !important'
  },
  '#floating-menuactive licenter-item': {
    'transform': 'translateY(-125px) !important',
    'WebkitTransform': 'translateY(-125px) !important',
    'transitionDelay': '50ms !important',
    'WebkitTransitionDelay': '50ms !important'
  },
  '#floating-menuactive liright-item': {
    'transform': 'translate(100px, -70px) !important',
    'WebkitTransform': 'translate(100px, -70px) !important',
    'transitionDelay': '50ms !important',
    'WebkitTransitionDelay': '50ms !important'
  },
  '#floating-menu libottom-item': {
    'backgroundColor': '#fff !important',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#b2b2b2' }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    'transform': 'rotate(135deg)',
    'WebkitTransform': 'rotate(135deg)',
    'width': [{ 'unit': '%H', 'value': 1.2 }],
    'height': [{ 'unit': '%V', 'value': 1.2 }],
    'left': [{ 'unit': '%H', 'value': -0.1 }],
    'top': [{ 'unit': '%V', 'value': -0.1 }]
  },
  '#floating-menuactive libottom-item': {
    'transform': 'translate(0px, 0px) !important',
    'WebkitTransform': 'translate(0px, 0px) !important',
    'transitionDelay': '50ms !important',
    'WebkitTransitionDelay': '50ms !important',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }],
    'backgroundColor': 'rgba(239, 72, 54, 1.0) !important',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': '%H', 'value': 1.2 }],
    'height': [{ 'unit': '%V', 'value': 1.2 }],
    'left': [{ 'unit': '%H', 'value': -0.1 }],
    'top': [{ 'unit': '%V', 'value': -0.1 }]
  },
  '#floating-menu libackground-item': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'zIndex': '-1'
  },
  '#floating-menuactive libackground-item': {
    'transform': 'none !important',
    'WebkitTransform': 'none !important',
    'transitionDelay': '5ms !important',
    'WebkitTransitionDelay': '5ms !important',
    'zIndex': '-1',
    'display': 'inline-block',
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 175 }],
    'left': [{ 'unit': 'px', 'value': -145 }],
    'top': [{ 'unit': 'px', 'value': -143 }],
    'width': [{ 'unit': 'px', 'value': 350 }],
    'borderRadius': '0%',
    'WebkitBorderRadius': '0%',
    'borderTopLeftRadius': '350px',
    'borderTopRightRadius': '350px'
  },
  '#floating-menu li spanlabel-container': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'string', 'value': 'inherit' }],
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 30 }]
  },
  '#floating-menu li spanlabel-container spantrans-text': {
    'backgroundColor': 'transparent',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'color': 'white',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  '#floating-menu': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }]
  },
  'atab-item-active spantab-title': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 6 }],
    'borderTopLeftRadius': '12px',
    'borderTopRightRadius': '12px',
    'display': 'block',
    'background': '#E01931'
  },
  'divtab-nav': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  }
});
