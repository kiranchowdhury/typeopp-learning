import { CodeLabel } from '../../../common/models/code-label';
export interface IQuoteStatus {
  responsetime: string,
  message: string,
  status: string,
  bpstatuslist: CodeLabel[],
  internalstatuslist: CodeLabel[],
  bpreasoncodeslist: CodeLabel[],
  internalreasoncodeslist: CodeLabel[]
}
