// hard coded redirect url map to avoid the max-redirect things
// TODO: localized redirect url
const hardCodedRedirectUrl = {
  'https://developer.mozilla.org/zh-CN/docs/CSS/CSS_transitions':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API',
  'https://developer.mozilla.org/zh-CN/docs/Web/Reference/Events/ended':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/ended_event',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/SMSEvent':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozSmsEvent',
  'https://developer.mozilla.org/zh-CN/docs/Web/Reference/Events/upgradeneeded_indexedDB':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event',
  'https://developer.mozilla.org/zh-CN/docs/Alternative_style_sheets':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Alternative_style_sheets',
  'https://developer.mozilla.org/zh-CN/docs/Apps/Manifest':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS/Manifest',
  'https://developer.mozilla.org/zh-CN/Firefox_OS/Developer_phone_guide/Flame':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Phone_guide/Flame',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/TCPSocket/open':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/TCPSocket/open',
  'https://developer.mozilla.org/zh-CN/docs/DOM/MozMobileConnectionInfo.relSignalStrength':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozMobileConnectionInfo/relSignalStrength',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozSettingsEvent/settingValue':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozSettingsEvent/settingValue',
  'https://developer.mozilla.org/zh-CN/Apps/Developing/App_permissions':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Firefox_OS_apps/App_permissions',
  'https://developer.mozilla.org/zh-CN/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial',
  'https://developer.mozilla.org/zh-CN/docs/DOM/event.charCode':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/charCode',
  'https://developer.mozilla.org/zh-CN/WebGL':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API',
  'https://developer.mozilla.org/zh-CN/DOM/element.tagName':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/tagName',
  'https://developer.mozilla.org/zh-CN/IndexedDB/IDBObjectStore':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/IDBObjectStore',
  'https://developer.mozilla.org/zh-CN/docs/Web/Apps/App_templates':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Apps/Tools_and_frameworks/App_templates',
  'https://developer.mozilla.org/zh-CN/docs/Security/MixedContent/fix_website_with_mixed_content':
    'https://developer.mozilla.org/zh-CN/docs/Security/MixedContent/How_to_fix_website_with_mixed_content',
  'https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Map':
    'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map',
  'https://developer.mozilla.org/zh-CN/docs/Apps/App_permissions':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Firefox_OS_apps/App_permissions',
  'https://developer.mozilla.org/zh-CN/Apps/CSP':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS/CSP',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozAlarmsManager/getAll':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozAlarmsManager/getAll',
  'https://developer.mozilla.org/zh-CN/docs/DOM/window.clearTimeout':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/WindowTimers/clearTimeout',
  'https://developer.mozilla.org/zh-CN/Configuring_Build_Options':
    'https://developer.mozilla.org/zh-CN/docs/%E9%85%8D%E7%BD%AE%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9',
  'https://developer.mozilla.org/zh-CN/DOM/window.openDialog':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/openDialog',
  // 'https://developer.mozilla.org/zh-CN/docs/XUL_School/The_Essentials_of_an_Extension': '',
  'https://developer.mozilla.org/zh-CN/Apps/Build/Manipulating_media/buffering_seeking_time_ranges':
    'https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges',
  'https://developer.mozilla.org/zh-CN/DOM/document.readyState':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:-moz-full-screen':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen',
  'https://developer.mozilla.org/zh-CN/docs/DOM/CustomEvent':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent',
  'https://developer.mozilla.org/zh-CN/DOM/Element.nextElementSibling':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling',
  'https://developer.mozilla.org/zh-CN/docs/DOM/element.nodeName':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeName',
  'https://developer.mozilla.org/zh-CN/docs/CSS/Using_CSS_flexible_boxes':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes',
  'https://developer.mozilla.org/zh-CN/docs/Controlling_spell_checking_in_HTML_forms':
    'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/spellcheck',
  'https://developer.mozilla.org/zh-CN/docs/CSS/Using_URL_values_for_the_cursor_property':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor/url',
  'https://developer.mozilla.org/zh-CN/docs/DOM/Using_dynamic_styling_information':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-animation-fill-mode':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-column-rule-style':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-rule-style',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-hyphens':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-moz-transform-style':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style',
  // 'https://developer.mozilla.org/samples/webgl/sample2':
  //   'https://mdn.github.io/webgl-examples/tutorial/sample2/',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-moz-transition-delay':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-column-width':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-width',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-moz-transition-property':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-moz-perspective':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-background-size':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-column-span':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-span',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-border-bottom-right-radius':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-right-radius',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-background-clip':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-box-sizing':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-animation-timing-function':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-border-image':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-column-gap':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-moz-transition':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition',
  'https://developer.mozilla.org/zh-CN/XUL_%E6%95%99%E7%A8%8B/%E5%AE%9A%E4%BD%8D%E5%B1%82':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL/Tutorial/Stack_Positioning',
  'https://developer.mozilla.org/zh-CN/XUL_%E6%95%99%E7%A8%8B/%E6%A0%B7%E5%BC%8F%E5%8C%96%E6%A0%91':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL/Tutorial/Styling_a_Tree',
  'https://developer.mozilla.org/zh-CN/XUL_%E6%95%99%E7%A8%8B/%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4%E7%9A%84%E7%9A%AE%E8%82%A4':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL/Tutorial/Modifying_the_Default_Skin',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-animation':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-animation-duration':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration',
  'https://developer.mozilla.org/zh-CN/docs/Submitting_an_add-on_to_AMO':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/Submitting_an_add-on_to_AMO',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-column-rule-color':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-rule-color',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API/Animation_timing_options':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/EffectTiming',
  'https://developer.mozilla.org/zh-CN/docs/Apps/Packaged_apps':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/Marketplace/Options/%E6%89%93%E5%8C%85_%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozMobileMessageManager/send':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozMobileMessageManager/send',
  'https://developer.mozilla.org/zh-CN/docs/Apps/Updating_apps':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/Marketplace/Publishing/Updating_apps',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/DOMCursor/done':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/DOMCursor/done',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/DOMCursor/continue':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/DOMCursor/continue',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozContact/bday':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozContact/bday',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozContact/published':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozContact/published',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/PowerManager/getWakeLockState':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozPowerManager/getWakeLockState',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozContact/init':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozContact/init',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozWifiConnectionInfoEvent/network':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozWifiConnectionInfoEvent/network',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozContact/jobTitle':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozContact/jobTitle',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozPowerManager/removeWakeLockListener':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozPowerManager/removeWakeLockListener',
  'https://developer.mozilla.org/zh-CN/docs/Project:The_Kuma_API':
    'https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Tools/Document_parameters',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/API/MozActivityRequestHandler':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozActivityRequestHandler',
  'https://developer.mozilla.org/zh-CN/docs/NsIInputStream':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIInputStream',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/API/MozActivityOptions':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozActivityOptions',
  'https://developer.mozilla.org/zh-CN/docs/Web/Apps/JavaScript_API/navigator.mozApps.mgmt.clearWatch':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Marketplace/API/DOMApplicationsManager/clearWatch',
  'https://developer.mozilla.org/zh-CN/Apps/JavaScript_API':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Marketplace/API/App_installation_and_management_APIs',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/DeviceStorage/default':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/DeviceStorage/default',
  'https://developer.mozilla.org/zh-CN/docs/Web/Apps/JavaScript_API/navigator.mozApps.mgmt.watchUpdates':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Marketplace/API/DOMApplicationsManager/watchUpdates',
  'https://developer.mozilla.org/zh-CN/docs/Web/Apps/JavaScript_API/navigator.mozApps.mgmt.list':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Marketplace/API/DOMApplicationsManager/list',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/Apps.getInstalled':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Marketplace/API/DOMApplicationsRegistry/getInstalled',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-moz-transition-duration':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/window.navigator.mozApps':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/Navigator/mozApps',
  'https://developer.mozilla.org/zh-CN/Apps/Manifest':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS/Manifest',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozContact/email':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozContact/email',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/SmsMessage':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozSmsMessage',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/API/MozActivity':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozActivity',
  'https://developer.mozilla.org/zh-CN/XUL_%E6%95%99%E7%A8%8B/Tree_Box_Objects':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL/Tutorial/More_Wizards',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozWifiConnectionInfoEvent/linkSpeed':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozWifiConnectionInfoEvent/linkSpeed',
  'https://developer.mozilla.org/zh-CN/docs/Gecko_User_Agent_Strings':
    'https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent/Firefox',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/CameraCapabilities/recorderProfiles':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/CameraCapabilities/recorderProfiles',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozWifiStatusChangeEvent/status':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozWifiStatusChangeEvent/status',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozWifiConnectionInfoEvent/signalStrength':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozWifiConnectionInfoEvent/signalStrength',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozMobileCFInfo/serviceClass':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozMobileCFInfo/serviceClass',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozMobileCFInfo/reason':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozMobileCFInfo/reason',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozMobileCellInfo/gsmCellId':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozMobileCellInfo/gsmCellId',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozMobileICCInfo/spn':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozMobileCCInfo/spn',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/MozMobileCFInfo/number':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/MozMobileCFInfo/number',
  'https://developer.mozilla.org/zh-CN/docs/XUL/Property/valueNumber':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/XUL/Property/valueNumber',
  // 'https://developer.mozilla.org/zh-CN/Gecko_Plugin_API_Reference/Plug-in_Development_Overview':'404',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/dominant-baseline':
    'https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/dominant-baseline',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/Telephony/active':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/Telephony/active',
  'https://developer.mozilla.org/zh-CN/docs/Web/Guide/Telephony':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Web_Telephony_API',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-perspective':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective',
  'https://developer.mozilla.org/zh-CN/Apps/Build/installable_apps/App_manifest_FAQ':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Firefox_OS_apps/App_development_FAQ',
  'https://developer.mozilla.org/zh-CN/Apps/app_layout/responsive_design_building_blocks':
    'https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/Phone':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Phone_guide/Phone_specs',
  'https://developer.mozilla.org/zh-CN/docs/nsIConsoleService':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIConsoleService',
  'https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/LiveConnect_Overview':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Web/LiveConnect',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/API/BluetoothGattService':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/BluetoothGattService',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Bluetooth_API/Using_the_Web_Bluetooth_API':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Bluetooth_API/Using_the_Web_Bluetooth_API',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/BluetoothGattService_%28Firefox_OS%29':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/BluetoothGattService',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/API/BluetoothDeviceEvent':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/BluetoothDeviceEvent',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/API/BluetoothGattCharacteristic':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/BluetoothGattCharacteristic',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox_OS/API/BluetoothGattCharacteristicEvent':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/BluetoothGattCharacteristicEvent',
  'https://developer.mozilla.org/zh-CN/docs/DOM/CSS':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-transform-style':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style',
  'https://developer.mozilla.org/zh-CN/docs/NSPR_API_Reference:Floating_Point_Number_to_String_Conversion':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/NSPR/Reference/Floating_Point_Number_to_String_Conversion',
  'https://developer.mozilla.org/zh-CN/docs/Site_Author_Guide_for_Click-To-Activate_Plugins':
    'https://developer.mozilla.org/zh-CN/docs/Plugins/Flash_Activation:_Browser_Comparison',
  'https://developer.mozilla.org/zh-CN/Gecko_Plugin_API_Reference':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/Plugins/Plugin_API_Reference',
  'https://developer.mozilla.org/zh-CN/DOM/document.async':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/XMLDocument/async',
  'https://developer.mozilla.org/zh-CN/docs/Project:MDC_editor_guide':
    'https://developer.mozilla.org/zh-CN/docs/Project:MDN/%E8%B4%A1%E7%8C%AE/Editor_guide/Basics',
  'https://developer.mozilla.org/zh-CN/docs/Project:Custom_templates':
    'https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Content/Custom_macros',
  'https://developer.mozilla.org/zh-CN/Apps/Packaged_apps':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/Marketplace/Options/%E6%89%93%E5%8C%85_%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F',
  'https://developer.mozilla.org/zh-CN/docs/Project:MDN/Contributing/Custom_macros':
    'https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Content/Custom_macros',
  'https://developer.mozilla.org/zh-CN/Add-ons/SDK/Getting_Started_With_cfx':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/SDK/Tutorials/Getting_started',
  'https://developer.mozilla.org/zh-CN/docs/Code_snippets/Tree':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Add-ons/Code_snippets/Tree',
  'https://developer.mozilla.org/zh-CN/docs/XUL/School_tutorial/Adding_Toolbars_and_Toolbar_Buttons':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/Overlay_Extensions/XUL_School/Adding_Toolbars_and_Toolbar_Buttons',
  'https://developer.mozilla.org/zh-CN/Apps/App_developer_tools':
    'https://developer.mozilla.org/zh-CN/docs/Tools',
  'https://developer.mozilla.org/zh-CN/Marketplace/Creating_a_store':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Marketplace/Options/Creating_a_store',
  'https://developer.mozilla.org/zh-CN/Marketplace/Submission/Submitting_an_app':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/Marketplace/Publishing/Submit/After_submission',
  'https://developer.mozilla.org/zh-CN/Add-ons/SDK/Tutorials/Getting_Started_With_cfx':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/SDK/Tutorials/Getting_started',
  'https://developer.mozilla.org/zh-CN/Apps/Build/JavaScript_API':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Marketplace/API/App_installation_and_management_APIs',
  'https://developer.mozilla.org/zh-CN/Marketplace/Publishing/Marketplace_screenshot_criteria':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/Marketplace/Publishing/Policies_and_Guidelines/Marketplace_screenshot_criteria',
  'https://developer.mozilla.org/zh-CN/docs/Web/Apps/FAQs/About_app_manifests':
    'https://developer.mozilla.org/zh-CN/docs/Web/Apps/Build/installable_apps_for_Firefox_OS/App_manifest_FAQ',
  'https://developer.mozilla.org/zh-CN/Marketplace/Prepare_For_Success/Getting_to_know_your_users':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/Marketplace/Prepare/Getting_to_know_your_users',
  'https://developer.mozilla.org/zh-CN/Apps/Publishing/Marketplace_screenshot_criteria':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/Marketplace/Publishing/Policies_and_Guidelines/Marketplace_screenshot_criteria',
  'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Canvas/Tutorial/Basic_animations':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations',
  'https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ATSPI_Support':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/Accessibility/AT-APIs',
  'https://developer.mozilla.org/zh-CN/docs/Core_JavaScript_1.5_Reference/Operators/Special_Operators/instanceof_Operator':
    'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof',
  'https://developer.mozilla.org/zh-CN/Add-ons/Firefox_for_Android/API/HomeProvider.jsm/HomeStorage':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/HomeProvider.jsm/HomeStorage',
  'https://developer.mozilla.org/zh-CN/docs/XUL/Property/preferenceElements':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Mozilla/XUL/Property/preferenceElements',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/SDK/Guides/Getting_Started':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Add-ons/Add-on_SDK/Guides/Contributor_s_Guide/Getting_Started',
  'https://developer.mozilla.org/zh-CN/docs/Extensions/Mobile/API/NativeWindow/pageactions':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/PageActions.jsm',
  'https://developer.mozilla.org/zh-CN/DOM/EventTarget':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechRecognition':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB',
  'https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-animation-direction':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction',
  'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Alternative_distribution_options/Sideloading_add-ons':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Distribution_options/Sideloading_add-ons',
  'https://developer.mozilla.org/zh-CN/DOM/XMLHttpRequest/FormData':
    'https://developer.mozilla.org/zh-CN/docs/Web/API/FormData',
  'https://developer.mozilla.org/zh-CN/docs/Web/Apps/Developing/Optimizing_startup_performance':
    'https://developer.mozilla.org/zh-CN/docs/Web/Performance/Optimizing_startup_performance',
  'https://developer.mozilla.org/zh-CN/docs/JavaScript':
    'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
  'https://developer.mozilla.org/zh-CN/docs/Tools/Responsive_Design_Mode':
    'https://developer.mozilla.org/zh-CN/docs/Tools/Responsive_Design_View',
  'https://developer.mozilla.org/zh-CN/docs/nsIXMLHttpRequest':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXMLHttpRequest',
  'https://developer.mozilla.org/@api/deki/files/272/=Moz_ffx_openStandards_1280x1024.jpg':
    'https://developer.mozilla.org/files/559/Moz_ffx_openStandards_1280x1024.jpg',
  'https://developer.mozilla.org/zh-CN/docs/CSS:text-align':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align',
  'https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_property':
    'https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute',
  'https://developer.mozilla.org/zh-CN/docs/CSS:font-size-adjust':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size-adjust',
  'https://developer.mozilla.org/zh-CN/docs/CSS:border':
    'https://developer.mozilla.org/zh-CN/docs/Web/CSS/border',
  'https://developer.mozilla.org/zh-CN/XUL_%E6%95%99%E7%A8%8B/%E5%85%B3%E4%BA%8EContents.rdf':
    'https://developer.mozilla.org/zh-CN/docs/junks/%E5%85%B3%E4%BA%8EContents.rdf',
  'https://developer.mozilla.org/zh-CN/docs/Web/API/DeviceStorage/storageName':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/DeviceStorage/storageName',
  'https://developer.mozilla.org/zh-CN/docs/Accessibility/AT-SPI_Support':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/Accessibility/AT-APIs',
  'https://developer.mozilla.org/zh-CN/XUL_%E6%95%99%E7%A8%8B/XUL%E7%9A%84%E7%BB%93%E6%9E%84':
    'https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL/Tutorial/XUL_Structure',
  'https://developer.mozilla.org/zh-CN/docs/API/WebTelephony':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Web_Telephony_API',
  'https://developer.mozilla.org/zh-CN/docs/Accessible_DHTML':
    'https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA',
  'https://developer.mozilla.org/zh-CN/docs/API/WebSMS/Introduction_to_WebSMS':
    'https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/API/Mobile_Messaging_API/Introduction_to_Mobile_Message_API',
  'https://developer.mozilla.org/zh-CN/docs/XUL_School/Connecting_to_Remote_Content':
    'https://developer.mozilla.org/zh-CN/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Connecting_to_Remote_Content'
};

module.exports = hardCodedRedirectUrl;