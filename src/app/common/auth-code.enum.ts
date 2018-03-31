export enum AuthCode {
    // R7 New values for existing constants ePricer Transaction Quote GUI
    // Function Ids common to e-Pricer / transactions quotes GUI (module #60) & e-Pricer term quotes GUI (module #63)
    /**
     * View quote = run module
     */
    AUTH_RUN_MODULE = '0',

    /**
     * Update List Price if price not found
     */
    AUTH_UPDATE_LISTPRICE = '1',

    /**
     * Delete quote
     */
    AUTH_DELETE_QUOTE = '2',

    /**
     * View CUE/BUE/RTL price
     */
    AUTH_VIEW_BUSINESSMINIMUM = '4',

    /**
     *  View Reg GM/Geo Brd VP price
     */
    AUTH_VIEW_QUICKFLOOR = '5',

    /**
     *  View Geo GM/MD price
     */
    AUTH_VIEW_FLOOR = '6',

    /**
     * View Gross Profit
     */
    AUTH_VIEW_GROSSPROFIT = '7',

    /**
     * View cost
     */
    AUTH_VIEW_COST = '8',

    /**
     * Use real cost
     */
    AUTH_USE_REALCOST = '9',

    /**
     * Approve transaction/component pricing
     */
    AUTH_APPROVE_QUOTE = '10',

    /**
     * Convert deal to another currency
     */
    AUTH_CONVERT_DEALTOANOTHERCURRENCY = '12',

    /**
     *  Quote in another currency
     */
    AUTH_QUOTE_INANOTHERCURRENCY = '13',

    /**
     * Update cost
     */
    AUTH_UPDATE_COST = '18',

    /**
     *  Approve transaction/component pricing below delegation
     */
    AUTH_APPROVE_QUOTEBELOWDELEG = '20',

    /**
     * Disable checksum
     */
    AUTH_DISABLE_CHECKSUM = '22',

    /**
     * Import/export quote in .CSV
     */
    AUTH_IMPEXP_QUOTEINCVS = '25',

    /**
     * Attach documents
     */
    AUTH_ATTACH_DOCS = '27',

    /**
     *  Unlock quotes from others
     */
    AUTH_UNLOCK_QUOTESFROMOTHERS = '30',

    /**
     * View all attached documents
     */
    AUTH_VIEW_ALL_ATTTACHEDDOCS = '32',

    /**
     *  Lock quotes for view
     */
    AUTH_LOCK_QUOTES_FORVIEW = '33',

    /**
     *  Delete approved quote
     */
    AUTH_DELETE_APPROVED_QUOTE = '34',

    /**
     *  Work on other countries CFReports
     */
    AUTH_WORK_OTHER_COUNTRIES_CFREP = '35',

    /**
     * View pricing details screen
     */
    AUTH_VIEW_PRICING_DETAILS = '40',

    /**
     * View best price
     */
    AUTH_VIEW_BESTPRICE = '41',

    /**
     * View MDP Other Price
     */
    AUTH_VIEW_MDP_OTHER_PRICE = '42',
    /**
     * View delegation A price
     * @deprecated use AUTH_VIEW_MDP_OTHER_PRICE instead of this
     */
    AUTH_VIEW_DELEGATIONAPRICE = '42',

    /**
     * View legal deep price
     */
    AUTH_VIEW_LEGALDEEPPRICE = '43',

    /**
     *  Launch CAT from home page
     */
    AUTH_LAUNCH_CAT_HOME_PAGE = '44',

    /**
     * Launch CAT within a quote
     */
    AUTH_LAUNCH_CAT_WITHIN_QUOTE = '45',

    /**
     * View approval history report
     */
    AUTH_VIEW_APPROVAL_HISTORY = '49',

    /**
     * View Net revenue
     */
    AUTH_VIEW_NET_REVENUE = '55',


    /**
     * View Store Type
     */
    AUTH_VIEW_STORE_TYPE = '57',

    /**
     * Create/update quote
     */
    AUTH_CREATE_UPDATE_QUOTE = '62',

    /**
     * Update quote
     */
    AUTH_UPDATE_QUOTE = '63',
    // by vivek for for CR#1069257
    AUTH_VIEW_DETAILS_BP_PRICING_READ_ONLY= '80',
    // end by vivek for for CR#1069257
    /**
     * Assign reviewer
     */
    AUTH_ASSIGN_REVIEWER = '70',

    /**
     * Substitute reviewer
     */
    AUTH_SUBSTITUTE_REVIEWER = '71',

    /**
     * Enter and view restricted comments
     */
    AUTH_ENTER_AND_VIEW_RESTRICTED_COMMENTS = '72',

    // End of Function Ids common to e-Pricer / transactions quotes GUI (module #60) & e-Pricer term quotes GUI (module #63)



    // Function ID's specific for e-Pricer / transactions quotes GUI (module #60)
    /**
     * Put transaction in sign status
     */
    AUTH_PUT_TRNTOSIGNSTATUS = '3',

    /**
     * Give conditions on approval
     */
    AUTH_CONDITION_ONAPPROVAL = '11',

    /**
     * Update a transaction in prepare status
     */
    AUTH_UPDATE_TRNPREPARESTATUS = '14',

    /**
     * Set a component to fixed price
     */
    AUTH_ALLOW_COMPFIXEDPRICE = '15',

    /**
     * Allow to enter Education Allowance
     */
    AUTH_ENTER_EDUCATIONALLOWANCE = '16',

    /**
     *  Use GP spread
     */
    AUTH_USE_GPSPREAD = '17',

    /**
     * Update Geo GM/MD price
     */
    AUTH_UPDATE_FLOORPRICE = '19',

    /**
     * Sell maintenance below cost
     */
    AUTH_SELL_MAINBELOWCOST = '21',

    /**
     * Update configurator components
     */
    AUTH_UPDATE_CONFIGCOMPONENTS = '23',

    /**
     *  Replace signed transaction
     */
    AUTH_REPLACE_SIGNEDTRANSACTION = '24',

    /**
     *  View metrics data
     */
    AUTH_VIEW_METRIXDATA = '26',

    /**
     * Delete rejected quotes
     */
    AUTH_DELETE_SIGNEDREPLREJTRN = '28',

    /**
     *  Put quote in reject status
     */
    AUTH_PUT_TRNTOREJECTSTATUS = '29',

    /**
     *  Use prepay maintenance
     */
    AUTH_PREPAY_MAINTAVAILABLE = '31',

    /**
     * Update quote for signature only
     */
    AUTH_UPDATE_QUOTE_FOR_SIGNATURE_ONLY = '64',

    /**
     * Enter flexibility information for BP quotes
     */
    AUTH_ENTER_FLEXIBILITY_INFORMATION_FOR_BP_QUOTES = '65',

    /**
     * Change status of on hold selected house account quote
     */
    AUTH_CHANGE_STATUS_OF_ON_HOLD_SELECTED_HOUSE_ACCOUNT_QUOTE = '66',

    /**
     * Change status of on hold duplicate quote
     */
    AUTH_CHANGE_STATUS_OF_ON_HOLD_DUPLICATE_QUOTE = '67',

    /**
     * Change status of on hold SB restricted quote
     */
    AUTH_CHANGE_STATUS_OF_ON_HOLD_SB_RESTRICTED_QUOTE = '68',
    // New Authorization Codes added again RCQ00096141
    AUTH_CHANGE_STATUS_OF_ON_HOLD_SCREENING_INCOMPLETE= '84',
    AUTH_CHANGE_STATUS_OF_ON_HOLD_SB_RESTRICTED_QUOTE_INCOMPLETE = '85',
    // RCQ00096141 ENDS
    /**
     * Withdraw quote
     */
    AUTH_WITHDRAW_QUOTE = '69',

    /**
     * Certify BP duplicated bids
     */
    AUTH_CERTIFY_BP_DUPLICATED_BIDS = '73',

    /**
     * Enter quoted price for BP quote
     */
    AUTH_ENTER_QUOTED_PRICE_FOR_BP_QUOTE = '74',

    /**
     * Override end user price or percentage
     */
    AUTH_OVERRIDE_END_USER_PRICE_OR_PERCENTAGE = '75',

    /**
     * Identify potential duplicated bids
     */
    AUTH_IDENTIFY_POTENTIAL_DUPLICATED_BIDS = '76',
    /**
     * Start [R11.3]RCQ00160864 :-Added for GCO quotes Quote Actions on Tx side -Deepak k Sharma,Pardha
     */
    AUTH_CREATE_GCO_TX_QUOTE = '87',
    /**
     * Work on BP quotes
     */
    AUTH_WORK_ON_BP_QUOTES = '77',

    // CR721277 IDD G6031, G6032 - Start - Tapan
    /**
     * Update BP Quote ship status
     */
  UPDATE_BP_QUOTE_SHIPPED_STATUS = '78',
  // CR721277 IDD G6031, G6032 - End - Tapan

  // CR 975641 - Change Quote Manager - Jalaj Sachdeva
    /**
     * Update BP Quote ship status
     */
  AUTH_CHANGE_QUOTE_MANAGER = '79',
    // End of Function ID's specific for e-Pricer / transactions quotes GUI (module #60)



    // Function ID's specific to for e-Pricer term quotes GUI (module #63)
    /**
     * Replace win quote
     */
    AUTH_REPLACE_WIN_QUOTE = '46',

    /**
     * Update EUV information
     */
    AUTH_UPDATE_EUV_INFORMATION = '47',

    /**
     * Update number of employees
     */
    AUTH_UPDATE_NUMBER_EMPLOYEES = '48',

    /**
     * Send notification/customer offer letter
     */
    AUTH_SEND_NOTIFICATION_LETTER = '50',

    /**
     * Work on international quotes
     */
    AUTH_WORK_INTERNATIONAL_QUOTES = '51',

 // Start Change for RCQ 00100344- Work on National added by Niloy/Bhuwanesh-Mayank
    /**
     * Work on National Quotes
     */
    AUTH_WORK_TERM_NATIONAL_QUOTES = '89',

 // End Change for RCQ 00100344- Work on National added by Niloy/Bhuwanesh-Mayank

 // Start Change for RCQ 00100344- Work on National(Tx) added by Vikram Kakkar

    AUTH_WORK_TRANSACTION_NATIONAL_QUOTES = '90',

// End Change for RCQ 00100344- Work on National(Tx) added by Vikram Kakkar

    /**
     * Work on GCO priced quotes
     */
    AUTH_WORK_GCO_PRICED_QUOTES = '52',

    /**
     * Work on GCO priced and owned quotes
     */
    AUTH_WORK_GCO_PRICED_OWNED_QUOTES = '53',

    /**
     * Export/Import to PCPRICE
     */
    AUTH_EXPORT_PCPRICE = '54',

    /**
     * Work on XCC transaction quote
     */
    AUTH_WORK_ON_XCC_TX_QUOTE = '56',

    /**
     * Assign RPQ number
     */
    AUTH_ASSIGN_RPQ = '58',

    /**
     * View PTI
     */
    AUTH_VIEW_PTI = '59',

    /**
     * Use Quote Bottom Line delegation process
     */
    AUTH_QUOTE_BOTTOMLINE_DELEGATION_PROCESS = '60',

    /**
     * Use Alternate delegation process
     */
    AUTH_ALTERNATIVE_DELEGATION_PROCESS = '61',

    // End of function ID's specific to for e-Pricer term quotes GUI (module #63)



    // Funtion ID Codes for BP GUI Module Id #64
    /**
     * View quote = Run module
     */
    AUTH_BP_RUN_MODULE = '0',

    /**
     * View BP entitled percentage/price
     */
    AUTH_BP_VIEW_ENTITELED_PRICE_PERCENTAGE = '78',

    /**
     * Submit to IBM
     */
    AUTH_BP_SUBMIT_TO_IBM = '79',

    /**
     * Manage trade-ins
     */
    AUTH_BP_MANAGE_TRADE_INS = '80',

    /**
     * Add manual component
     */
    AUTH_BP_ADD_MANUAL_COMPONENT = '81',
 // add for CR1069251
    AUTH_CHANGE_STATUS_OF_IBM_APPROVED_QUOTE = '81',
    AUTH_CHANGE_STATUS_OF_IBM_WITHDRAWN_QUOTE = '82',
    AUTH_CHANGE_STAT_OF_ANYTIME_IBM_APPRVD_WTHDRN_BID_TO_INCOMPLT= '83',
// end add for CR1069251
    /**
     * Update end user customer name
     */
    AUTH_BP_UPDATE_END_USER_CUSTOMER_NAME = '82',

    /**
     * Create quote
     */
    AUTH_BP_CREATE_UPDATE_QUOTE = '62',

    /**
     * Disable checksum
     */
    AUTH_BP_DISABLE_CHECKSUM = '22',

    /**
     * Work on other countries CFReport
     */
    AUTH_BP_WORK_ON_OTHERCOUNTRIES_CFREPORT = '35',

    /// End of codes for BP GUI Module Id #64

    // 	TODO - document code
    AUTH_VIEW_BP_ENTITLED_PERCENTAGE_PRICE = '78',

    AUTH_SUBMIT_TO_IBM = '79',

    AUTH_MANAGE_TRADE_INS = '80',

    AUTH_ADD_MANUAL_COMPONENT = '81',

    AUTH_UPDATE_END_USER_CUSTOMER_NAME = '82',
    // add for CR#500456-OPRA by vivek
    AUTH_IMPORT_XML_FILE_BP_FORM = '83',
    // end add for CR#500456-OPRA by vivek
    /**
     * Pseudo authorization used to manage "blanks" in authorization lists
     */
    AUTH_NOP = 'NOP',

    /**
     * Authorization for updating customer store type
     */
    AUTH_UPDATE_CUST_STORE_TYPE = 'Update_Customer_Store_Type',

    // Added for CR RCQ00065749-Single Bid Ordering
    AUTH_UPDATE_SINGLE_ORDER_BID = '84',
    // Added for RCQ151522
    AUTH_WORK_WITH_GTS_QUOTE_INFO = '88',

    // Start RCQ00163567-Allow more than one Tailored Report - Rajesh
    IMPORT_TAILOR_REPORT = '90',
    // Start [R12.2][RCQ184125 - System X - By Naresh / Pradnya]
    // Using CTMAFCT table in CTMPREFS DB

    AUTH_VIEW_LEVEL5PRICE = '91',
    AUTH_VIEW_LEVEL6PRICE = '92',
    AUTH_VIEW_LEVEL7PRICE = '93',
    AUTH_VIEW_LEVEL8PRICE = '94',

    // End [R12.2][RCQ184125 - System X - By Naresh / Pradnya]
    // Madhur - RCQ 192074
    AUTH_VIEW_PLANGPPRICE = '96',

  // RCQ00258046- Added by Kimmi Start
    AUTH_VIEW_DISPLAYMANUALPRICEINDICATOR = '97',
  // RCQ00258046- Added by Kimmi End

  // Start RCQ00312019 - iPAT integration into ePricer � simplified approach   by Rekha/Tarun
    AUTH_VIEW_UPDATE_MARGIN = '99',
  // End RCQ00312019 - iPAT integration into ePricer � simplified approach   by Rekha/Tarun

  // Added  by Azza for IN6789328
    AUTH_DISABLE_RECOMPUTE_ALL = '105',

  // end for IN6789328
  // Added by Azza IN6932160
    AUTH_HIDE_VALUE_SELLER_PRICE = '115',
  // end for IN6932160

    AUTH_COPRA_PRICES = '112',
    AUTH_CONTINUE_BRET_PROCESS = '113'
}
