import { CarouselContainer, CarouselItem, CustomCarousel } from "./AppCarouselStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AppCarousel = ({ carouselIndex, handleAccess, setCarouselIndex }) => {
    return (
        <CarouselContainer>
          <CustomCarousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            selectedItem={carouselIndex}
            onChange={(index) => setCarouselIndex(index)}
          >
            <CarouselItem>
              <h2>QR Code Generator</h2>
              <button onClick={() => handleAccess(0, "QRCodeGenerator")}>
                Access
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>IP Address Finder</h2>
              <button onClick={() => handleAccess(1, "IPAddressFinder")}>
                Acccess
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Movie Search Engine</h2>
              <button onClick={() => handleAccess(2, "MovieSearchEngine")}>
                Access
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Todo App</h2>
              <button onClick={() => handleAccess(3, "TodoApp")}>
                Access
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Quiz App</h2>
              <button onClick={() => handleAccess(4, "QuizApp")}>
                Access
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Language Translator</h2>
              <button onClick={() => handleAccess(5, "LanguageTranslator")}>
                Access
              </button>
            </CarouselItem>
          </CustomCarousel>
        </CarouselContainer>
      );
    };
    
    export default AppCarousel;