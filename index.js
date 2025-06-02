const SAFARICOM_REGEX =
  /^(?:\+254|0)?(7(?:0\d|1\d|2\d|4[0-3]|45|46|48|57|58|59|68|69|9\d)|11[0-7])\d{6}$/;
const AIRTEL_REGEX = /^(?:\+254|0)?(7(?:3\d|5[0-6]|62)|10[0-8])\d{6}$/;
const TELKOM_REGEX = /^(?:\+254|0)?77\d\d{6}$/;

const NETWORKS = {
  safaricom: { code: 1, name: "safaricom" },
  airtel: { code: 2, name: "airtel" },
  telkom: { code: 3, name: "telkom" },
  unknown: { code: 0, name: "MNO not found" },
};

/**
 * Returns the Mobile Number Operator (MNO) info of a Kenyan mobile number
 * @param {string} number - The phone number
 * @returns {{code: number, name: string} | null}
 */
function getKenyanMobileOperatorInfo(number) {
  if (SAFARICOM_REGEX.test(number)) return NETWORKS.safaricom;
  if (AIRTEL_REGEX.test(number)) return NETWORKS.airtel;
  if (TELKOM_REGEX.test(number)) return NETWORKS.telkom;
  return NETWORKS.unknown;
}

module.exports = {
  getKenyanMobileOperatorInfo,
  NETWORKS,
};
