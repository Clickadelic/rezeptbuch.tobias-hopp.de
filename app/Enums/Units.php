<?php

namespace App\Enums;

enum Units: string
{
    case MILLILITER = 'Milliliter';
    case CENTILITER = 'Centiliter';
    case LITER = 'Liter';
    case GRAMM = 'Gramm';
    case KILO = 'Kilo';
    case TEESPOON = 'Teespoon';
    case TABLESPOON = 'Tablespoon';
    case CUP = 'Cup';
    case PIECE = 'Piece';
    case DASH = 'Dash';
}