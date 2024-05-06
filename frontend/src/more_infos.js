import bedImg from "./assets/precautions/bed.svg";
import newsImg from "./assets/precautions/news.svg";
import foodImg from "./assets/precautions/food.svg";
import sunImg from "./assets/precautions/sun.svg";
import bodyCheckImg from "./assets/precautions/body_check.svg";
import medicalImg from "./assets/precautions/medical.svg";

export const moreInfos = {
    "Melanocytic nevi": "Also known as a mole, a melanocytic nevus is a benign (non-cancerous) growth of melanocytes. Moles can vary in color, size, and shape and are typically harmless. However, certain types of moles may have a higher risk of developing into melanoma, especially if they exhibit changes in appearance over time.",
    "Melanoma": "Melanoma is a type of skin cancer that originates in melanocytes, the cells responsible for producing melanin, the pigment that gives skin its color. It often appears as a new spot or an existing mole that changes in size, shape, or color. Melanoma has the potential to metastasize and spread to other parts of the body if not detected and treated early.",
    "Benign keratosis-like lesions": "These are harmless skin growths like sun spots or raised bumps. Sometimes they look like cancer, so it's good to get them checked by a doctor.",
    "Basal cell carcinoma": "Basal cell carcinoma is the most common type of skin cancer, originating in the basal cells of the skin's outermost layer. It usually appears as a small, shiny bump or a red, scaly patch on sun-exposed areas of the skin. BCC tends to grow slowly and is less likely to spread to other parts of the body compared to melanoma.",
    "Actinic keratoses": "Actinic keratosis, also known as solar keratosis, is a precancerous growth that develops on sun-damaged skin. It appears as rough, scaly patches and has the potential to progress into squamous cell carcinoma if left untreated.",
    "Vascular lesions": "These are issues with blood vessels in the skin, like red birthmarks or spider veins. They're usually harmless but might need treatment for looks or if they cause problems.",
    "Dermatofibroma": "It's a harmless bump made of fibrous tissue. It can be pink or brown and might be removed if it causes trouble"
}

export const precautions = [
    {
        heading: "Regular Skin Checks",
        moreInfo: "Keep an eye on any moles or skin abnormalities. Report changes to your doctor.",
        img: bodyCheckImg
    },
    {
        heading: "Sun Protection",
        moreInfo: "Wear sunscreen, protective clothing, and seek shade to prevent further damage",
        img: sunImg
    },
    {
        heading: "Avoid Tanning Beds",
        moreInfo: "UV radiation from tanning beds can increase your risk of skin cancer.",
        img: bedImg
    },
    {
        heading: "Healthy Lifestyle",
        moreInfo: "Eat a balanced diet, exercise regularly, and avoid smoking",
        img: foodImg
    },
    {
        heading: "Medical Advice",
        moreInfo: "Follow your dermatologist's recommendations for treatment and follow-up appointments.",
        img: medicalImg
    },
    {
        heading: "Stay Informed",
        moreInfo: "Educate yourself about your condition and treatment options.",
        img: newsImg
    },
]