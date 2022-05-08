import styled from "styled-components";

import { colorGrey4, primary } from "../../constants/colors";
import { phone } from "../../constants/screens";

const styleGigaTitle = `
	font-size: 96px;
	font-style: normal;
	font-weight: 400;
	line-height: 112px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary}
	}

	${phone} {
		font-size: 54px;
		line-height: 86px;
	}
`;

export const GigaTitle = styled.h1`
	${styleGigaTitle}
`;
export const H2GigaTitle = styled.h2`
	${styleGigaTitle}
`;
export const H3GigaTitle = styled.h3`
	${styleGigaTitle}
`;

export const LargeTitle = styled.h1`
	font-size: 72px;
	font-style: normal;
	font-weight: 400;
	line-height: 84px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}

	${phone} {
		font-size: 44px;
		line-height: 64px;
	}
`;

export const MediumTitle = styled.h1`
	font-size: 52px;
	font-style: normal;
	font-weight: 400;
	line-height: 64px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}

	${phone} {
		font-size: 34px;
		line-height: 52px;
	}
`;

export const SmallTitle = styled.h1`
	font-size: 44px;
	font-style: normal;
	font-weight: 400;
	line-height: 52px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}

	${phone} {
		font-size: 28px;
	}
`;

export const SmallAltTitle = styled.h1`
	font-size: 44px;
	font-style: normal;
	font-weight: 400;
	line-height: 52px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}

	${phone} {
		font-size: 24px;
	}
`;

export const LargeHeading = styled.h2`
	font-size: 36px;
	font-style: normal;
	font-weight: 400;
	line-height: 44px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}
`;

export const MediumHeading = styled.h2`
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: 36px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}
`;

export const SmallHeading = styled.h2`
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}
`;

export const LargeText = styled.p`
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}

	&.grey {
		color: ${colorGrey4};
	}

	${phone} {
		font-size: 16px;
	}
`;
export const MediumText = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}
`;
export const SmallText = styled.p`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0px;
	&.white {
		color: #ffffff;
	}

	&.black {
		color: ${primary};
	}
`;

export const Link = styled.a``;
