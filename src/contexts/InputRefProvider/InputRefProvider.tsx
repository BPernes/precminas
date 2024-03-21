import { ReactNode, MutableRefObject, createContext, useRef } from "react";

export const InputRefContext = createContext<MutableRefObject<HTMLInputElement | null>>({ current: null })

type InputRefContextProviderProps = {
	children: ReactNode
}

const InputRefContextProvider = ({ children }: InputRefContextProviderProps) => {
	const inputRef = useRef(null)

	return (
		<InputRefContext.Provider value={inputRef}>
			{children}
		</InputRefContext.Provider>
	)
}



export default InputRefContextProvider
