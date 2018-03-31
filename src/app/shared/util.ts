import { StatusCodeCount } from '../dashboard/dashboard.reducer';
import { CodeLabel } from '../common/models/code-label';


export function printLog(stmt) {
  console.log('PRINTING IN LOG#########', stmt);
}

export function quoteStatusCodeToLabel(statusCodeArray: StatusCodeCount[],
  statusCodeLabelArray: CodeLabel[],
  reasonCodeLabelArray): StatusCodeCount[] {
    const transformedArray: StatusCodeCount[] = [];
    statusCodeArray.forEach(function(statusCodeItem, index) {
      const splittedStr: string[] = statusCodeItem.statuscode.split(':')
      const statusCode = splittedStr[0];
      const reasonCode = splittedStr[1];
      const matchingStatus = statusCodeLabelArray.find( function(codeLabel: CodeLabel) {
        return codeLabel.code === (statusCode)
      });
      const matchingReasonCode: CodeLabel = reasonCodeLabelArray.find( function(codeLabel: CodeLabel) {
        return codeLabel.code === (reasonCode)
      });
      if (matchingReasonCode) {
        transformedArray.push({statuscode: matchingStatus.description + '-' + matchingReasonCode.description, count: statusCodeItem.count})
      } else {
        transformedArray.push({statuscode: matchingStatus.description, count: statusCodeItem.count})
      }
    })
    console.log('Transformed Array', transformedArray);
  return transformedArray;
}
