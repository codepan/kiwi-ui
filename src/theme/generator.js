import {mix} from './utils'
export default theme => {
  let style = ''
  Object.keys(theme).forEach(color => {
    style += `
    /*** Button ***/
    .kw-button-${color} {
      background-color: ${theme[color]}
    }
    .kw-button-${color}:active {
      background-color: ${mix(theme[color])}
    }
    .kw-button-outline.kw-button-${color} {
      border-color: ${theme[color]};
      color: ${theme[color]};
    }
    .kw-button-outline.kw-button-${color}:active {
      border-color: ${mix(theme[color])};
      color: ${mix(theme[color])};
    }
    .kw-button-text.kw-button-${color} {
      color: ${theme[color]};
    }
    .kw-button-text.kw-button-${color}:active {
      color: ${mix(theme[color])};
    }
    
    /*** Switch ***/
    .kw-switch.is-active.kw-switch-${color} {
      background-color: ${theme[color]};
      border-color: ${theme[color]};
    }
    
    /*** Radio ***/
    .kw-radio-group.kw-radio-group-${color} .kw-radio-icon {
      border-color: ${theme[color]};
    }
    .kw-radio-group.kw-radio-group-${color} .kw-radio-icon.active::after {
      background: ${theme[color]};
    }
    
    /*** Icon ***/
    .kw-icon-wrapper .kw-icon.kw-icon-${color} {
      fill: ${theme[color]}
    }
    
    /*** Tabs ***/
    .kw-tabs .kw-tab-links.kw-tab-links-active-${color} .kw-tab-link.is-active {
      color: ${theme[color]};
    }
    .kw-tabs .kw-tab-link.kw-tab-links-active-${color} .kw-tab-link-highlight {
      background: mix(${theme[color]});
    }
    /*** Text ***/
    .kw-${color}-text-color {
      color: ${theme[color]}
    }
    /*** Border ***/
    .kw-${color}-border-color {
      border-color: ${theme[color]}
    }
    /*** Background ***/
    .kw-${color}-bg-color {
      background-color: ${theme[color]}
    }
    `
  })
  return style
}
