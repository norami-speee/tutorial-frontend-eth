import Web3 from "web3";

export const Mnemonic =
  "envelope they chef cloud sample dignity claw learn steak betray rocket inject";

const web3 = new Web3();

export const PrivateKey0 =
  "0x94E6838841F8E3561B4A457CEDE2FAA1DA23B039FBD745784F63FD3180E810BE"; // HDPath m/44'/60'/0'/0/0
export const Address0 = web3.utils.toChecksumAddress(
  "0xe6a28Ed3eDf6be1423b41D42E73Be645d129f363"
);

export const PrivateKey1 =
  "0x303FCCE83B25F4B629A0EF36AFDC3D58950510F67ADCE3B187BCE1EB41216BB9"; // HDPath m/44'/60'/0'/0/1
export const Address1 = web3.utils.toChecksumAddress(
  "0xbe8F0fbd91eC718954313E139cdf29b580AA38AC"
);
