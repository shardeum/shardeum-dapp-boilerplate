/**
 * Complete ERC20 ABI with additional OpenZeppelin extensions
 * Includes: ERC20, ERC20Burnable, ERC20Permit, and Ownable functions
 */
export const ERC20_ABI = [
  // Standard ERC20 Functions
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",

  // ERC20Burnable Functions
  "function burn(uint256 amount)",
  "function burnFrom(address account, uint256 amount)",

  // Ownable Functions
  "function owner() view returns (address)",
  "function renounceOwnership()",
  "function transferOwnership(address newOwner)",

  // Custom Functions (from MyToken contract)
  "function mint(address to, uint256 amount)",

  // ERC20Permit Functions (EIP-2612 - Gasless Approvals)
  "function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)",
  "function nonces(address owner) view returns (uint256)",
  "function DOMAIN_SEPARATOR() view returns (bytes32)",

  // Events
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)"
];
